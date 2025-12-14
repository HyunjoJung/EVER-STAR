package com.everstarbackmain.domain.chat.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.web.bind.annotation.RestController;

import com.everstarbackmain.domain.chat.requestDto.ChatMessage;
import com.everstarbackmain.domain.chat.service.ChatService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequiredArgsConstructor
@Slf4j
public class ChatController {

	private final ChatService chatService;

	/**
	 * WebSocket으로 받은 메시지를 Redis Pub/Sub을 통해 브로드캐스트
	 */
	@MessageMapping("/chat/message")
	public void sendMessage(@Payload ChatMessage message) {
		log.info("Received message from WebSocket: roomId={}, sender={}",
			message.getRoomId(), message.getSender());
		chatService.sendMessage(message);
	}
}
