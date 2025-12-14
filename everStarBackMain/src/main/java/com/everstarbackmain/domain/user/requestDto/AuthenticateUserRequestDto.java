package com.everstarbackmain.domain.user.requestDto;

import java.time.LocalDate;
import java.time.LocalTime;

import com.everstarbackmain.domain.user.model.Gender;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class AuthenticateUserRequestDto {

	@NotBlank(message = "이메일은 필수 입력 값입니다.")
	@Email(message = "이메일 형식이 올바르지 않습니다.")
	private String email;

	@NotBlank(message = "사용자 이름은 필수 입력 값입니다.")
	private String userName;

	@NotBlank(message = "전화번호는 필수 입력 값입니다.")
	@Pattern(regexp = "^01(?:0|1|[6-9])(?:\\d{3}|\\d{4})\\d{4}$", message = "전화번호 형식이 올바르지 않습니다.")
	private String phoneNumber;

	@NotNull(message = "생년월일은 필수 입력 값입니다.")
	private LocalDate birthDate;

	@NotNull(message = "성별은 필수 입력 값입니다.")
	private Gender gender;

	@NotNull(message = "퀘스트 수신 시간은 필수 입력 값입니다.")
	private LocalTime questReceptionTime;
}
