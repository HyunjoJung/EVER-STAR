package com.everstarbackmain.domain.chat.service;

import org.springframework.data.redis.listener.ChannelTopic;
import org.springframework.stereotype.Service;

import com.everstarbackmain.domain.chat.requestDto.ChatMessage;
import com.everstarbackmain.domain.chat.requestDto.MessageType;
import com.everstarbackmain.domain.chat.util.RedisMessagePublisher;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class ChatService {

	private final RedisMessagePublisher redisMessagePublisher;
	private final ChannelTopic chatTopic;

	/**
	 * 메시지 처리 및 Redis Pub/Sub을 통한 브로드캐스트
	 */
	public void sendMessage(ChatMessage message) {
		// ENTER 메시지 처리
		if (MessageType.ENTER.equals(message.getType())) {
			message.updateEnterMessage(message.getSender() + "님이 입장하셨습니다.");
		}

		// Redis Pub/Sub을 통해 메시지 발행
		// 모든 서버 인스턴스의 RedisMessageSubscriber가 이를 수신하여 WebSocket 클라이언트에 전달
		redisMessagePublisher.publish(chatTopic.getTopic(), message);

		log.info("Published message to Redis: roomId={}, type={}",
			message.getRoomId(), message.getType());
	}
}
