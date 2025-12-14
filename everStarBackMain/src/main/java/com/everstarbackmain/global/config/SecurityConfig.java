package com.everstarbackmain.global.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfigurationSource;

import com.everstarbackmain.domain.user.repository.UserRepository;
import com.everstarbackmain.global.security.exceptionHandler.CustomExceptionHandler;
import com.everstarbackmain.global.security.jwt.JwtAuthorizationFilter;
import com.everstarbackmain.global.security.jwt.JwtUtil;
import com.everstarbackmain.global.security.oauth.OAuthService;
import com.everstarbackmain.global.security.oauth.OAuthSuccessHandler;
import com.everstarbackmain.global.security.oauth.OAuthFailHandler;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

	private final JwtUtil jwtUtil;
	private final CustomExceptionHandler customExceptionHandler;
	private final UserRepository userRepository;
	private final OAuthService oAuthService;
	private final OAuthSuccessHandler oAuthSuccessHandler;
	private final OAuthFailHandler oAuthFailHandler;
	private final CorsConfigurationSource corsConfigurationSource;

	@Bean
	public JwtAuthorizationFilter jwtAuthorizationFilter() throws Exception {
		JwtAuthorizationFilter filter = new JwtAuthorizationFilter(jwtUtil, userRepository);
		return filter;
	}

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		// CORS 활성화 (WebConfig의 corsConfigurationSource Bean 사용)
		http.cors(cors -> cors.configurationSource(corsConfigurationSource));

		http.csrf((auth) -> auth.disable());
		http.formLogin((auth) -> auth.disable());
		http.httpBasic((auth) -> auth.disable());
		http.sessionManagement((session) -> session
			.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
		);

		// OAuth2 로그인 설정 추가
		http.oauth2Login((oauth2) -> oauth2
			.userInfoEndpoint((userInfo) -> userInfo
				.userService(oAuthService)
			)
			.successHandler(oAuthSuccessHandler)
			.failureHandler(oAuthFailHandler)
		);

		http.authorizeHttpRequests((auth) -> auth
			// CORS Preflight (OPTIONS) 요청 허용
			.requestMatchers(org.springframework.http.HttpMethod.OPTIONS, "/**").permitAll()

			// Actuator 엔드포인트 허용
			.requestMatchers("/actuator/**").permitAll()

			// OAuth2 엔드포인트 허용
			.requestMatchers("/login/oauth2/**").permitAll()
			.requestMatchers("/oauth2/**").permitAll()
			.requestMatchers("/api/join/**").permitAll()
			.requestMatchers("/api/sms/**").permitAll()

			// 기존 설정
			.requestMatchers("/api/pets/**").hasRole("USER")
			.requestMatchers("/api/accounts/users/**").hasRole("USER")
			.requestMatchers("/api/everstar/**").hasRole("USER")
			.requestMatchers("/api/earth/connect/**").permitAll()
			.requestMatchers("/api/notifications/**").hasRole("USER")
			.requestMatchers("api/sessions/**").permitAll()
			.anyRequest().authenticated()
		);
		http.exceptionHandling((handle) -> handle.authenticationEntryPoint(customExceptionHandler));
		http.addFilterBefore(jwtAuthorizationFilter(), UsernamePasswordAuthenticationFilter.class);

		return http.build();
	}
}
