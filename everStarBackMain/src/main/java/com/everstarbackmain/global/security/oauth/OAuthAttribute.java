package com.everstarbackmain.global.security.oauth;

import java.util.Map;

import com.everstarbackmain.global.exception.CustomException;
import com.everstarbackmain.global.exception.ExceptionResponse;

import lombok.Getter;
import lombok.extern.slf4j.Slf4j;

@Getter
@Slf4j
public class OAuthAttribute {

	private String email;
	private String name;
	private Map<String, Object> attributes;

	private OAuthAttribute(String email, String name, Map<String, Object> attributes) {
		this.email = email;
		this.name = name;
		this.attributes = attributes;
	}

	public static OAuthAttribute createOauthAttribute(Map<String, Object> attributes, String registrationId) {
		if (registrationId.equals("kakao"))
			return makeKakao(attributes);
		if (registrationId.equals("google"))
			return makeGoogle(attributes);

		throw new ExceptionResponse(CustomException.NOT_EXIST_REGISTRATIONID);
	}

	private static OAuthAttribute makeKakao(Map<String, Object> attributes) {
		Map<String, Object> kakaoAccount = (Map<String, Object>)attributes.get("kakao_account");
		Map<String, Object> profile = (Map<String, Object>)kakaoAccount.get("profile");

		// 카카오 ID (필수 값)
		String kakaoId = String.valueOf(attributes.get("id"));

		// 이메일 (선택 값 - 비즈앱이 아닌 경우 null 가능)
		String email = (String)kakaoAccount.get("email");

		// 닉네임 (필수 값)
		String nickname = (String)profile.get("nickname");

		// 이메일이 없으면 카카오 ID로 임시 이메일 생성
		String identifier = (email != null && !email.isEmpty())
			? email
			: "kakao_" + kakaoId + "@everstar.temp";

		log.info("Kakao ID: {}, Email: {}, Nickname: {}, Identifier: {}", kakaoId, email, nickname, identifier);

		return new OAuthAttribute(identifier, nickname, kakaoAccount);
	}

	private static OAuthAttribute makeGoogle(Map<String, Object> attributes) {
		String email = (String)attributes.get(("email"));
		String name = (String)attributes.get(("name"));
		return new OAuthAttribute(email, name, attributes);
	}
}