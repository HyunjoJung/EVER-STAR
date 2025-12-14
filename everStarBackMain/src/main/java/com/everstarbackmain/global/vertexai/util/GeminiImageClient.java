package com.everstarbackmain.global.vertexai.util;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

import org.springframework.stereotype.Component;

import com.everstarbackmain.global.config.VertexAiConfig;
import com.everstarbackmain.global.exception.CustomException;
import com.everstarbackmain.global.exception.ExceptionResponse;
import com.google.cloud.aiplatform.v1.PredictionServiceClient;
import com.google.protobuf.Value;
import com.google.protobuf.util.JsonFormat;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * Google Vertex AI Imagen을 사용한 이미지 생성 클라이언트
 * OpenAI DALL-E를 대체하여 비용 절감 및 품질 향상
 */
@Component
@RequiredArgsConstructor
@Slf4j
public class GeminiImageClient {

	private final PredictionServiceClient predictionServiceClient;
	private final VertexAiConfig vertexAiConfig;

	/**
	 * 텍스트 프롬프트로부터 이미지 생성 (DALL-E writePetTextToImageAnswer 대체)
	 *
	 * @param prompt 이미지 생성 프롬프트
	 * @return Base64 인코딩된 이미지 데이터
	 */
	public String generateImageFromText(String prompt) {
		log.info("Generating image from text prompt: {}", prompt);

		try {
			// Imagen 요청 파라미터 구성
			Value.Builder instanceBuilder = Value.newBuilder();
			String instanceJson = String.format(
				"{\"prompt\": \"%s\", \"sampleCount\": 1}",
				escapeJson(prompt)
			);
			JsonFormat.parser().merge(instanceJson, instanceBuilder);

			List<Value> instances = new ArrayList<>();
			instances.add(instanceBuilder.build());

			// 파라미터 설정
			Value.Builder parametersBuilder = Value.newBuilder();
			String parametersJson = "{\"sampleImageSize\": \"1024\"}";
			JsonFormat.parser().merge(parametersJson, parametersBuilder);

			// Vertex AI 예측 요청
			var response = predictionServiceClient.predict(
				vertexAiConfig.getEndpoint(),
				instances,
				parametersBuilder.build()
			);

			// 응답에서 이미지 데이터 추출
			if (response.getPredictionsCount() > 0) {
				Value prediction = response.getPredictions(0);
				String base64Image = prediction.getStructValue()
					.getFieldsOrThrow("bytesBase64Encoded")
					.getStringValue();

				log.info("Image generated successfully from text prompt");
				return base64Image;
			} else {
				throw new ExceptionResponse(CustomException.VERTEX_AI_EXCEPTION);
			}

		} catch (IOException e) {
			log.error("Failed to generate image from text: {}", e.getMessage(), e);
			throw new ExceptionResponse(CustomException.VERTEX_AI_EXCEPTION);
		}
	}

	/**
	 * 텍스트 프롬프트와 참조 이미지로부터 이미지 생성 (DALL-E writePetTextImageToImageAnswer 대체)
	 *
	 * @param prompt 이미지 생성 프롬프트
	 * @param referenceImageBase64 참조 이미지 (Base64)
	 * @return Base64 인코딩된 이미지 데이터
	 */
	public String generateImageFromTextAndImage(String prompt, String referenceImageBase64) {
		log.info("Generating image from text and reference image");

		try {
			// Imagen 요청 파라미터 구성 (참조 이미지 포함)
			Value.Builder instanceBuilder = Value.newBuilder();
			String instanceJson = String.format(
				"{\"prompt\": \"%s\", \"image\": {\"bytesBase64Encoded\": \"%s\"}, \"sampleCount\": 1}",
				escapeJson(prompt),
				referenceImageBase64
			);
			JsonFormat.parser().merge(instanceJson, instanceBuilder);

			List<Value> instances = new ArrayList<>();
			instances.add(instanceBuilder.build());

			// 파라미터 설정
			Value.Builder parametersBuilder = Value.newBuilder();
			String parametersJson = "{\"sampleImageSize\": \"1024\", \"mode\": \"image-to-image\"}";
			JsonFormat.parser().merge(parametersJson, parametersBuilder);

			// Vertex AI 예측 요청
			var response = predictionServiceClient.predict(
				vertexAiConfig.getEndpoint(),
				instances,
				parametersBuilder.build()
			);

			// 응답에서 이미지 데이터 추출
			if (response.getPredictionsCount() > 0) {
				Value prediction = response.getPredictions(0);
				String base64Image = prediction.getStructValue()
					.getFieldsOrThrow("bytesBase64Encoded")
					.getStringValue();

				log.info("Image generated successfully from text and reference image");
				return base64Image;
			} else {
				throw new ExceptionResponse(CustomException.VERTEX_AI_EXCEPTION);
			}

		} catch (IOException e) {
			log.error("Failed to generate image from text and image: {}", e.getMessage(), e);
			throw new ExceptionResponse(CustomException.VERTEX_AI_EXCEPTION);
		}
	}

	/**
	 * JSON 문자열 이스케이프 처리
	 */
	private String escapeJson(String text) {
		return text.replace("\\", "\\\\")
			.replace("\"", "\\\"")
			.replace("\n", "\\n")
			.replace("\r", "\\r")
			.replace("\t", "\\t");
	}
}
