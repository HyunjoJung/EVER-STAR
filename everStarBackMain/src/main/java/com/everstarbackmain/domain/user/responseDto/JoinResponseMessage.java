package com.everstarbackmain.domain.user.responseDto;

import org.springframework.http.HttpStatus;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum JoinResponseMessage {
	SUCCESS_SIGNUP(HttpStatus.OK, "회원가입이 완료되었습니다.");

	private final HttpStatus httpStatus;
	private final String message;
}
