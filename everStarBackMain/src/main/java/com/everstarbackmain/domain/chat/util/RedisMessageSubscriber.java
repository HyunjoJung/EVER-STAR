package com.everstarbackmain.domain.chat.util;

import org.springframework.data.redis.connection.Message;
import org.springframework.data.redis.connection.MessageListener;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Component;

import com.everstarbackmain.domain.chat.requestDto.ChatMessage;
import com.fasterxml.jackson.databind.ObjectMapper;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
@RequiredArgsConstructor
public class RedisMessageSubscriber implements MessageListener {

	private final ObjectMapper objectMapper;
	private final SimpMessageSendingOperations messagingTemplate;

	@Override
	public void onMessage(Message message, byte[] pattern) {
		try {
			String messageBody = new String(message.getBody());
			ChatMessage chatMessage = objectMapper.readValue(messageBody, ChatMessage.class);

			// WebSocket 구독자들에게 메시지 전송
			messagingTemplate.convertAndSend(
				"/api/chat/sub/chat/room/" + chatMessage.getRoomId(),
				chatMessage
			);

			log.info("Received and forwarded message from Redis to WebSocket subscribers");
		} catch (Exception e) {
			log.error("Failed to process Redis message", e);
		}
	}
}
