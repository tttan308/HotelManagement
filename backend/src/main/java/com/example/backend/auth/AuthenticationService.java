package com.example.backend.auth;

import com.example.backend.config.JwtService;
import com.example.backend.entity.Token;
import com.example.backend.entity.TokenType;
import com.example.backend.entity.UserAccount;
import com.example.backend.repository.UserAccountRepository;
import com.example.backend.repository.TokenRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

        private final UserAccountRepository repository;
        private final TokenRepository tokenRepository;
        private final PasswordEncoder passwordEncoder;
        private final JwtService jwtService;
        private final AuthenticationManager authenticationManager;

        public AuthenticationResponse register(RegisterRequest request) {
            var user = UserAccount.builder()
                    .username(request.getUsername())
                    .password(passwordEncoder.encode(request.getPassword()))
                    .name(request.getName())
                    .email(request.getEmail())
                    .phoneNumber(request.getPhoneNumber())
                    .birthDay(request.getBirthDay())
                    .role(request.getRole())
                    .build();
            var savedUser = repository.save(user);
            var jwtToken = jwtService.generateToken(user);
            var refreshToken = jwtService.generateRefreshToken(user);
            saveUserToken(savedUser, jwtToken);
            return AuthenticationResponse.builder()
                    .accessToken(jwtToken)
                    .refreshToken(refreshToken)
                    .build();
        }

        public AuthenticationResponse authenticate(AuthenticationRequest request) {
             authenticationManager.authenticate(
                     new UsernamePasswordAuthenticationToken(
                             request.getUsername(),
                             request.getPassword()
                     )
             );
             var user = repository.findByUsername(request.getUsername()).orElseThrow();
             var jwtToken = jwtService.generateToken(user);
             var refreshToken = jwtService.generateRefreshToken(user);
             revokeAllUserTokens(user);
             saveUserToken(user, jwtToken);
             return AuthenticationResponse.builder()
                     .accessToken(jwtToken)
                     .refreshToken(refreshToken)
                     .build();
        }

    private void saveUserToken(UserAccount user, String jwtToken) {
        var token = Token.builder()
                        .userAccount(user)
                        .token(jwtToken)
                        .tokenType(TokenType.BEARER)
                        .expired(false)
                        .revoked(false)
                        .build();

        tokenRepository.save(token);
    }

    private void revokeAllUserTokens(UserAccount user) {
        var validUserTokens = tokenRepository.findAllValidTokenByUser(user.getUserAccountId());
        if (validUserTokens.isEmpty())
            return;
        validUserTokens.forEach(token -> {
            token.setExpired(true);
            token.setRevoked(true);
        });
        tokenRepository.saveAll(validUserTokens);
    }

    public void refreshToken(
            HttpServletRequest request,
            HttpServletResponse response
    ) throws IOException {
        final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        final String refreshToken;
        final String userName;
        if (authHeader == null ||!authHeader.startsWith("Bearer ")) {
            return;
        }
        refreshToken = authHeader.substring(7);
        userName = jwtService.extractUsername(refreshToken);
        if (userName != null) {
            var user = this.repository.findByUsername(userName)
                    .orElseThrow();
            if (jwtService.isTokenValid(refreshToken, user)) {
                var accessToken = jwtService.generateToken(user);
                revokeAllUserTokens(user);
                saveUserToken(user, accessToken);
                var authResponse = AuthenticationResponse.builder()
                        .accessToken(accessToken)
                        .refreshToken(refreshToken)
                        .build();

                new ObjectMapper().writeValue(response.getOutputStream(), authResponse);
            }
        }
    }
}
