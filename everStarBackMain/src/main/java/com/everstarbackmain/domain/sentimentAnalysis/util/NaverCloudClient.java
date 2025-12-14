package com.everstarbackmain.domain.sentimentAnalysis.util;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import com.everstarbackmain.domain.sentimentAnalysis.model.SentimentAnalysisResult;
import com.everstarbackmain.global.config.OpenAiConfig;
import com.everstarbackmain.global.exception.CustomException;
import com.everstarbackmain.global.exception.ExceptionResponse;
import com.everstarbackmain.global.openai.model.ChatGPTRequest;
import com.everstarbackmain.global.openai.model.ChatGPTResponse;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * GPT-4.1 기반 감정분석 클라이언트 (네이버 클라우드 API 대체)
 * GPT-4.1의 향상된 지시 준수 능력을 활용하여 감정 분석 수행
 */
@Component
@Slf4j
public class NaverCloudClient {

	private final ObjectMapper objectMapper;
	private final RestTemplate restTemplate;
	private final OpenAiConfig openAiConfig;

	public NaverCloudClient(ObjectMapper objectMapper,
	                        @Qualifier("openAiRestTemplate") RestTemplate restTemplate,
	                        OpenAiConfig openAiConfig) {
		this.objectMapper = objectMapper;
		this.restTemplate = restTemplate;
		this.openAiConfig = openAiConfig;
	}

	private static final String SENTIMENT_ANALYSIS_SYSTEM_PROMPT =
		"당신은 전문 감정 분석가입니다. 주어진 텍스트의 감정을 중립(neutral), 긍정(positive), 부정(negative)으로 분석하고, "
		+ "각 감정의 신뢰도를 0.0~1.0 사이의 값으로 제공해주세요. 세 값의 합은 정확히 1.0이 되어야 합니다.\n\n"
		+ "응답은 반드시 다음 JSON 형식으로만 제공하고, 다른 설명은 추가하지 마세요:\n"
		+ "{\"neutral\": 0.0, \"positive\": 0.0, \"negative\": 0.0}";

	private static final String SENTIMENT_ANALYSIS_USER_PROMPT =
		"다음 텍스트의 감정을 분석해주세요:\n\n%s";

	public SentimentAnalysisResult analyseSentiment(String content) {
		log.info("Analyzing sentiment with GPT-4.1: {}", content.substring(0, Math.min(50, content.length())));

		String userPrompt = String.format(SENTIMENT_ANALYSIS_USER_PROMPT, content);

		ChatGPTRequest request = ChatGPTRequest.createChatGPTRequest(
			openAiConfig.getModel(),
			SENTIMENT_ANALYSIS_SYSTEM_PROMPT,
			userPrompt
		);

		ChatGPTResponse response = restTemplate.postForObject(
			openAiConfig.getApiUrl(),
			request,
			ChatGPTResponse.class
		);

		if (response == null || response.getChoices() == null || response.getChoices().isEmpty()) {
			throw new ExceptionResponse(CustomException.OPENAI_API_EXCEPTION);
		}

		String result = response.getChoices().get(0).getMessage().getContent();
		log.info("GPT-4.1 sentiment analysis result: {}", result);

		return parseSentimentFromGPTResponse(result);
	}

	private SentimentAnalysisResult parseSentimentFromGPTResponse(String response) {
		try {
			// GPT 응답에서 JSON 부분만 추출 (코드 블록 제거)
			String jsonStr = response.trim();
			if (jsonStr.startsWith("```json")) {
				jsonStr = jsonStr.substring(7, jsonStr.lastIndexOf("```")).trim();
			} else if (jsonStr.startsWith("```")) {
				jsonStr = jsonStr.substring(3, jsonStr.lastIndexOf("```")).trim();
			}

			JsonNode root = objectMapper.readTree(jsonStr);

			double neutral = root.path("neutral").asDouble();
			double positive = root.path("positive").asDouble();
			double negative = root.path("negative").asDouble();

			return SentimentAnalysisResult.createSentimentAnalysisResult(neutral, positive, negative);
		} catch (JsonProcessingException e) {
			log.error("Failed to parse GPT-4.1 sentiment response: {}", response, e);
			throw new ExceptionResponse(CustomException.OPENAI_API_EXCEPTION);
		}
	}
}
