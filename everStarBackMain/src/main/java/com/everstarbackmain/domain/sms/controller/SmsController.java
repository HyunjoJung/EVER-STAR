package com.everstarbackmain.domain.sms.controller;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.everstarbackmain.domain.sms.requestDto.CheckCodeRequestDto;
import com.everstarbackmain.domain.sms.requestDto.SendCodeRequestDto;
import com.everstarbackmain.domain.sms.responseDto.SmsResponseMessage;
import com.everstarbackmain.domain.sms.service.SmsService;
import com.everstarbackmain.global.util.HttpResponseUtil;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth/users")
public class SmsController {

	private final HttpResponseUtil responseUtil;
	private final SmsService smsService;

	@PostMapping("/send-code")
	public ResponseEntity<Map<String, Object>> sendCode(@RequestBody @Valid SendCodeRequestDto sendCodeRequestDto) {
		smsService.sendSms(sendCodeRequestDto);
		return responseUtil.createResponse(SmsResponseMessage.SUCCESS_SEND);
	}

	@PostMapping("/check-code")
	public ResponseEntity<Map<String, Object>> verifyCode(@RequestBody @Valid CheckCodeRequestDto checkCodeRequestDto) {
		smsService.verifySms(checkCodeRequestDto);
		return responseUtil.createResponse(SmsResponseMessage.SUCCESS_VERIFY);
	}
}
