package com.everstarbackmain.global.config;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;

import com.everstarbackmain.global.exception.CustomException;
import com.everstarbackmain.global.exception.ExceptionResponse;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@RequiredArgsConstructor
@Slf4j(topic = "elk")
public class NotificationInitializer {

	@Value("${FIREBASE_SERVICE_ACCOUNT_JSON:#{null}}")
	private String firebaseServiceAccountJson;

	@PostConstruct
	public void initalize(){
		try {
			InputStream serviceAccountStream;

			// 환경변수에 JSON이 있으면 우선 사용 (Azure App Service)
			if (firebaseServiceAccountJson != null && !firebaseServiceAccountJson.isEmpty()) {
				log.info("Loading Firebase credentials from environment variable");
				serviceAccountStream = new ByteArrayInputStream(firebaseServiceAccountJson.getBytes());
			}
			// 없으면 classpath에서 파일 읽기 (로컬 개발)
			else {
				log.info("Loading Firebase credentials from classpath");
				serviceAccountStream = new ClassPathResource("firebase-admin-sdk.json").getInputStream();
			}

			GoogleCredentials googleCredentials = GoogleCredentials.fromStream(serviceAccountStream);
			FirebaseOptions options = new FirebaseOptions.Builder()
				.setCredentials(googleCredentials)
				.build();
			FirebaseApp.initializeApp(options);

			log.info("Firebase initialized successfully");
		} catch (IOException e) {
			log.error("MAIN SERVER - FCM error message { } : " + e.getMessage());
			throw new ExceptionResponse(CustomException.ACCESS_DENIED_EXCEPTION);
		}
	}
}
