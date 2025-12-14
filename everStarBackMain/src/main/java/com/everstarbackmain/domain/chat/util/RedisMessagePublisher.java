package com.everstarbackmain.domain.chat.util;

import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Component;

import com.everstarbackmain.domain.chat.requestDto.ChatMessage;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
@RequiredArgsConstructor
public class RedisMessagePublisher {

	private final RedisTemplate<String, Object> redisTemplate;
	private final ObjectMapper objectMapper;

	public void publish(String channel, ChatMessage message) {
		try {
			String messageJson = objectMapper.writeValueAsString(message);
			redisTemplate.convertAndSend(channel, messageJson);
			log.info("Published message to Redis channel: {}", channel);
		} catch (JsonProcessingException e) {
			log.error("Failed to serialize message", e);
		}
	}
}
