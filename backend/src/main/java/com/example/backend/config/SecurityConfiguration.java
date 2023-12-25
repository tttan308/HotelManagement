package com.example.backend.config;

import jakarta.servlet.Filter;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.logout.LogoutHandler;

import static com.example.backend.entity.Permission.*;
import static com.example.backend.entity.Role.*;
import static org.springframework.http.HttpMethod.*;
import static org.springframework.security.config.http.SessionCreationPolicy.STATELESS;


@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfiguration {

    private final JwtAuthenticationFilter jwtAuthFilter;
    private final AuthenticationProvider authenticationProvider;
    private final LogoutHandler logoutHandler;
    private static final String[] WHITE_LIST_URL = {
            "/api/v1/auth/**",
            "/api/v1/rooms/",
    };

    //cấu hình chi tiết cách bảo mật cho các yêu cầu HTTP
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
        http
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(req ->
                        req.requestMatchers(WHITE_LIST_URL).permitAll()
                                .requestMatchers("/api/v1/admin/**").hasRole(ADMIN.name())
                                .requestMatchers(GET, "/api/v1/admin/**").hasAuthority(ADMIN_READ.name())
                                .requestMatchers(POST, "/api/v1/admin/**").hasAuthority(ADMIN_CREATE.name())
                                .requestMatchers(PUT, "/api/v1/admin/**").hasAuthority(ADMIN_UPDATE.name())
                                .requestMatchers(DELETE, "/api/v1/admin/**").hasAuthority(ADMIN_DELETE.name())
                                .requestMatchers("/api/v1/staff/**").hasAnyRole(ADMIN.name(), STAFF.name())
                                .requestMatchers(GET, "/api/v1/staff/**").hasAnyAuthority(ADMIN_READ.name(), STAFF_READ.name())
                                .requestMatchers(POST, "/api/v1/staff/**").hasAnyAuthority(ADMIN_CREATE.name(), STAFF_CREATE.name())
                                .requestMatchers(PUT, "/api/v1/staff/**").hasAnyAuthority(ADMIN_UPDATE.name(), STAFF_UPDATE.name())
                                .requestMatchers(DELETE, "/api/v1/staff/**").hasAnyAuthority(ADMIN_DELETE.name(), STAFF_DELETE.name())
                                .requestMatchers("/api/v1/customer/**").hasAnyRole(ADMIN.name(), STAFF.name(), CUSTOMER.name())
                                .requestMatchers(GET, "/api/v1/customer/**").hasAnyAuthority(ADMIN_READ.name(), STAFF_READ.name(), CUSTOMER_READ.name())
                                .requestMatchers(POST, "/api/v1/customer/**").hasAnyAuthority(ADMIN_READ.name(), STAFF_READ.name(), CUSTOMER_READ.name())
                                .requestMatchers(PUT, "/api/v1/customer/**").hasAnyAuthority(ADMIN_READ.name(), STAFF_READ.name(), CUSTOMER_READ.name())
                                .requestMatchers(DELETE, "/api/v1/customer/**").hasAnyAuthority(ADMIN_READ.name(), STAFF_READ.name(), CUSTOMER_READ.name())
                                .anyRequest().authenticated()
                )
                .sessionManagement(session -> session.sessionCreationPolicy(STATELESS))
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
                .logout(logout ->
                        logout.logoutUrl("/api/v1/auth/logout")
                                .addLogoutHandler(logoutHandler)
                                .logoutSuccessHandler((request, response, authentication) -> SecurityContextHolder.clearContext())
                )
        ;
        return http.build();
    }
}
