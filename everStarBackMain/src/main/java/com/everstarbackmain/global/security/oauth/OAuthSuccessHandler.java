package com.everstarbackmain.global.security.oauth;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;

import com.everstarbackmain.domain.user.model.Role;
import com.everstarbackmain.domain.user.model.User;
import com.everstarbackmain.global.security.auth.PrincipalDetails;
import com.everstarbackmain.global.security.jwt.JwtUtil;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@RequiredArgsConstructor
@Slf4j(topic = "elk")
public class OAuthSuccessHandler implements AuthenticationSuccessHandler {
	private final JwtUtil jwtUtil;

	@Value("${frontend.url:http://localhost:3000}")
	private String frontendUrl;

	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
		Authentication authentication) throws IOException, ServletException {
		User user = ((PrincipalDetails)authentication.getPrincipal()).getUser();

		if (user.getRole().equals(Role.ROLE_GUEST)) {
			response.sendRedirect(sendNotAuthenticatedAuthUrl(user));
			return;
		}

		if (user.getRole().equals(Role.ROLE_USER)) {
			response.sendRedirect(sendVerifiedAuthUrl(user));
		}
	}

	private String sendNotAuthenticatedAuthUrl(User user) {
		log.info("auth server: notAuthenticated, redirecting to {}/signup/{}", frontendUrl, user.getEmail());
		return UriComponentsBuilder.fromUriString(frontendUrl + "/signup/" + user.getEmail())
			.build()
			.toString();
	}

	private String sendVerifiedAuthUrl(User user) {
		String token = jwtUtil.getAccessToken(user);
		log.info("auth server - accessToken : {}, redirecting to {}/oauth/{}", token, frontendUrl, token);
		return UriComponentsBuilder.fromUriString(frontendUrl + "/oauth/" + token)
			.build()
			.toString();
	}
}
