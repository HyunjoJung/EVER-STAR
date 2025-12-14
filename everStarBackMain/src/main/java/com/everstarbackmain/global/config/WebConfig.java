package com.everstarbackmain.global.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.Arrays;
import java.util.List;

/**
 * Web MVC 설정
 * CORS 설정 (Spring Security와 통합)
 */
@Configuration
public class WebConfig implements WebMvcConfigurer {

	@Value("${frontend.url:http://localhost:3000}")
	private String frontendUrl;

	/**
	 * CORS 설정 Bean
	 * Spring Security에서 이 설정을 사용
	 */
	@Bean
	public CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration configuration = new CorsConfiguration();

		// 허용할 출처 (Origin)
		configuration.setAllowedOrigins(Arrays.asList(
			frontendUrl,
			"http://localhost:3000",
			"https://localhost:3000"
		));

		// 허용할 HTTP 메서드
		configuration.setAllowedMethods(Arrays.asList(
			"GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"
		));

		// 허용할 헤더
		configuration.setAllowedHeaders(List.of("*"));

		// 노출할 헤더
		configuration.setExposedHeaders(Arrays.asList("Authorization"));

		// 인증 정보 포함 허용
		configuration.setAllowCredentials(true);

		// Preflight 요청 캐시 시간 (1시간)
		configuration.setMaxAge(3600L);

		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", configuration);

		return source;
	}
}
