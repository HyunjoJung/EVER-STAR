package com.everstarbackmain.global.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.aiplatform.v1.EndpointName;
import com.google.cloud.aiplatform.v1.PredictionServiceClient;
import com.google.cloud.aiplatform.v1.PredictionServiceSettings;

import lombok.Getter;
import lombok.extern.slf4j.Slf4j;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;

/**
 * Vertex AI Imagen 설정
 * 이미지 생성을 위한 Google Cloud Vertex AI 클라이언트 설정
 */
@Configuration
@Getter
@Slf4j
public class VertexAiConfig {

	@Value("${vertex.ai.project-id}")
	private String projectId;

	@Value("${vertex.ai.location}")
	private String location;

	@Value("${vertex.ai.model}")
	private String model;

	@Value("${FIREBASE_SERVICE_ACCOUNT_JSON:#{null}}")
	private String firebaseServiceAccountJson;

	/**
	 * Vertex AI PredictionServiceClient Bean 생성
	 * Firebase Admin SDK와 동일한 서비스 계정 파일 사용
	 */
	@Bean
	public PredictionServiceClient predictionServiceClient() throws IOException {
		log.info("Initializing Vertex AI PredictionServiceClient");
		log.info("Project ID: {}, Location: {}, Model: {}", projectId, location, model);

		InputStream serviceAccountStream;

		// 환경변수에 JSON이 있으면 우선 사용 (Azure App Service)
		if (firebaseServiceAccountJson != null && !firebaseServiceAccountJson.isEmpty()) {
			log.info("Loading Vertex AI credentials from environment variable");
			serviceAccountStream = new ByteArrayInputStream(firebaseServiceAccountJson.getBytes());
		}
		// 없으면 classpath에서 파일 읽기 (로컬 개발)
		else {
			log.info("Loading Vertex AI credentials from classpath");
			serviceAccountStream = new ClassPathResource("firebase-admin-sdk.json").getInputStream();
		}

		// Firebase Admin SDK와 동일한 서비스 계정 파일 사용
		GoogleCredentials credentials = GoogleCredentials.fromStream(serviceAccountStream)
			.createScoped("https://www.googleapis.com/auth/cloud-platform");

		PredictionServiceSettings settings = PredictionServiceSettings.newBuilder()
			.setCredentialsProvider(() -> credentials)
			.build();

		log.info("Vertex AI PredictionServiceClient initialized successfully");
		return PredictionServiceClient.create(settings);
	}

	/**
	 * Imagen 모델 엔드포인트 이름 생성
	 */
	public String getEndpoint() {
		return String.format("projects/%s/locations/%s/publishers/google/models/%s",
			projectId, location, model);
	}
}
