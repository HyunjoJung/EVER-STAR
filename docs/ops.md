# Ops

## 공통-프로젝트 / README / 운영.md

# 운영

---

## 시스템 아키텍쳐

![image.png](images/image_0048.png)

### blue/green 배포를 통한 무증단 배포

![image.png](images/image_0048.png)

![image.png](images/image_0048.png)

- 다음과 같이 backend, front end 를 blue green 으로 설정하여 무증단 배포
- 무증단 배포를 통해 짧은 기간 동안 배포시 끈키지 않는 devops 를 수행 할 수 있음

## 백엔드 주요 기능별로 나누어 배포

![image.png](images/image_0048.png)

 

- 다음과 같이 백엔드를 auth 서버 , main 서버 , chat 서버를 나누어 분산 트래픽 관리 및 보안 높임
- 각 기능을 각 개발자가 맡아 개발 편의성을 높임

## elk를 이용한 중앙 집중식 로 모니터링

![image.png](images/image_0048.png)

![image.png](images/image_0048.png)

- 분산 서버의 로깅 추적이 어렵다는 점을 파악하여 elk 를 이용한 중앙 집중식 로깅 모니터링


## 공통-프로젝트 / 백엔드 / application-properties / History.md

# History

---

**07.22 도이 추가** 

**(auth) main**

```java

spring.datasource.url=jdbc:mysql://localhost:3306/everstar?autoReconnect=true
spring.datasource.username=root
spring.datasource.password=<redacted>
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

spring.cache.type=redis
spring.data.redis.host=i11b101.p.ssafy.io
spring.data.redis.port=6379

spring.jpa.show-sql=true
spring.jpa.hibernate.ddl-auto=create
spring.jpa.properties.hibernate.show_sql=true
spring.jpa.properties.hibernate.format_sql=true
spring.jpa.properties.hibernate.highlight_sql: true
spring.jpa.properties.hibernate.defer-datasource-initialization: true
spring.jpa.defer-datasource-initialization = true
spring.sql.init.mode = always
spring.jpa.open-in-view=false
spring.jpa.hibernate.naming.physical-strategy=org.hibernate.boot.model.naming.CamelCaseToUnderscoresNamingStrategy

jwt.secret=<redacted>
jwt.access-token-expire=<redacted>
sms.api-key=NCSN5PO5G3GHGGQO
sms.api-secret=<redacted>
sms.sms-provider=01020007052
```

**(auth) test**

```java
spring.application.name=SpringJWT
spring.datasource.url=jdbc:mysql://localhost:3306/everstar?autoReconnect=true
spring.datasource.username=root
spring.datasource.password=<redacted>
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

spring.cache.type=redis
spring.data.redis.host=i11b101.p.ssafy.io
spring.data.redis.port=6379

spring.jpa.show-sql=true
spring.jpa.hibernate.ddl-auto=create
spring.jpa.properties.hibernate.show_sql=true
spring.jpa.properties.hibernate.format_sql=true
spring.jpa.open-in-view=false
spring.jpa.hibernate.naming.physical-strategy=org.hibernate.boot.model.naming.CamelCaseToUnderscoresNamingStrategy

jwt.secret=<redacted>
jwt.access-token-expire=<redacted>
sms.api-key=NCSN5PO5G3GHGGQO
sms.api-secret=<redacted>
sms.sms-provider=01020007052

logging.level.org.hibernate.SQL=debug
#logging.level.org.hibernate.type=trace
```

07.22 세현 everStarBackChat 폴더 내의 properties

```jsx
spring.application.name=everStarBackChat

spring.datasource.url=jdbc:mysql://localhost:3306/everstar?autoReconnect=true
spring.datasource.username=root
spring.datasource.password=<redacted>
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.show-sql=true
spring.jpa.hibernate.ddl-auto= create
spring.jpa.properties.hibernate.format_sql=true

jwt.secret = <redacted>
jwt.access-token-expire = <redacted>
```


## 공통-프로젝트 / 백엔드 / application-properties.md

# application.properties

---

통합버전 : 상의하고 여기다 추가하시오

0730_세현 naverapi 추가

0731_세현_openaiapi 추가 (모델 3.5 turbo로 설정. 추후 사진 추가 시 업그레이드)

0801_세현_openai api 모델 4.0 mini로 수정

0802_세현_aws s3 설정 추가

0805_세현_openvidu 설정 추가

0807_세현_openai api 주소 추가

0809_세현_diffusiona

```java
## mysql
spring.datasource.url=jdbc:mysql://localhost:3306/everstar?autoReconnect=true
spring.datasource.username=root
spring.datasource.password=각자의 비밀번호
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.show-sql=true
spring.jpa.hibernate.ddl-auto= update
spring.jpa.properties.hibernate.format_sql=true

## jwt
jwt.secret = <redacted>
jwt.access-token-expire = <redacted>

## sms
sms.api-key=NCSZAQEZJNWS2PJW
sms.api-secret=<redacted>
sms.sms-provider=01029463517
## osiv
spring.jpa.open-in-view=false

## redis
spring.data.redis.host=i11b101.p.ssafy.io
spring.data.redis.port=6379

# oauth kakao
spring.security.oauth2.client.registration.kakao.client-id=<redacted>
spring.security.oauth2.client.registration.kakao.client-secret=<redacted>
spring.security.oauth2.client.registration.kakao.redirect-uri=<redacted>
spring.security.oauth2.client.registration.kakao.authorization-grant-type=authorization_code
spring.security.oauth2.client.registration.kakao.client-authentication-method= client_secret_post
spring.security.oauth2.client.registration.kakao.client-name=Kakao
spring.security.oauth2.client.registration.kakao.scope= profile_nickname, profile_image, account_email, name, phone_number
spring.security.oauth2.client.provider.kakao.authorization-uri = https://kauth.kakao.com/oauth/authorize
spring.security.oauth2.client.provider.kakao.token-uri = https://kauth.kakao.com/oauth/token
spring.security.oauth2.client.provider.kakao.user-info-uri = https://kapi.kakao.com/v2/user/me
spring.security.oauth2.client.provider.kakao.user-name-attribute = id

# oauth google
spring.security.oauth2.client.registration.google.client-id = <redacted>
spring.security.oauth2.client.registration.google.client-secret = <redacted>
spring.security.oauth2.client.registration.google.scope = profile, email
spring.security.oauth2.client.registration.google.redirect-uri= http://localhost:8080/api/auth/login/oauth2/code/google

## naver cloud
naver.cloud.id=<redacted>
naver.cloud.secret=<redacted>

## openai
openai.model=<redacted>
openai.image.model=<redacted>
openai.api.key=<redacted>
openai.api.url=<redacted>
openai.api.create-image-url=<redacted>

## aws
cloud.aws.s3.bucket=everstarbucket
cloud.aws.credentials.access-key=<redacted>
cloud.aws.credentials.secret-key=<redacted>
cloud.aws.region.static=ap-northeast-2
cloud.aws.region.auto=false
cloud.aws.stack.auto=false

## file upload
spring.servlet.multipart.max-file-size=10MB
spring.servlet.multipart.max-request-size=10MB

##openvidu
openvidu.url=https://i11b101.p.ssafy.io:4443/
openvidu.secret=pdw06135

#kafka
spring.kafka.producer.bootstrap-servers=http://i11b101.p.ssafy.io:9092
spring.kafka.consumer.group-id=group_1
spring.kafka.consumer.group=group

## diffusion ai
diffusionai.model=anything-v5
diffusionai.api.key=jeOb8nKM7uO6bxToSpz37MIKwH0uPDCAB3MUTbtoX1SGRXmpCPtClQ999xuo
diffusionai.api.url=https://modelslab.com/api/v6/images/img2img
```

---

---

[History](application%20properties/History%202b906a3ff15d47ed9291f2e6c4d08d16.md)


## 공통-프로젝트 / 버그수정-머지-후-완료-해주세용 / FE-버그-및-수정사항 / webrtc-질문창에서-이미지-첨부하면-파일명이-뜨게-바꾸기.md

# webrtc 질문창에서 이미지 첨부하면 파일명이 뜨게 바꾸기

상태: 완료
제보자: 도이 김


## 공통-프로젝트 / 부하-테스트.md

# 부하 테스트

---

ngrinder

---

[https://curiousjinan.tistory.com/entry/ngrinder-springboot-test](https://curiousjinan.tistory.com/entry/ngrinder-springboot-test)

jemeter

---


## 공통-프로젝트 / 운영-배포.md

# 운영 배포

---

### **서버 PORT (아직 미정)**

젠킨스:8080

카프카 : 9902 9903 9904

로그스테이시: 5001

키바나: 5061

엘라스틱서치: 9200

프론트:3000, 3001

메인: 8081, 8082

메시지: 8082

인증: 8083

Nginx: 80

SSL: 443

그라파냐 

- admin
- admin

## 할일

- ELK 이미지 연결 및 KAFKA 토픽 생성 및 로그 스테이시 연결
- 로깅 설정
- 젠킨스 이미지 받은후 GIT LAB 연결 PIPELINE 작성
- NGINX, REDIS, MYSQL 도커 이미지 받기 COMPOSE
- 프로젝트 도커 이미지 받기 COMPOSE
- NIGNX CERTBOT을 이용한 SSL 발급(도메인 연결)
- 프론트, 백 메인 블루 그린 적용 쉘 스크립트 작성

- 채팅 FAFKA 토픽 연결
- 채팅 NGINX 에서 트래픽 분산시 부하 테스트
