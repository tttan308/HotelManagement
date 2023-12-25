package com.example.backend.auth;

import com.example.backend.config.JwtService;
import com.example.backend.entity.Role;
import com.example.backend.entity.UserAccount;
import com.example.backend.repository.UserAccountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

        private final UserAccountRepository repository;
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
            repository.save(user);
            var jwtToken = jwtService.generateToken(user);
            return AuthenticationResponse.builder()
                    .token(jwtToken)
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
             return AuthenticationResponse.builder()
                    .token(jwtToken)
                    .build();
        }
}
