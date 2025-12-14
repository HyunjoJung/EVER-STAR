# EVER-STAR

반려동물 추모 서비스 **EVER-STAR**의 프론트엔드/백엔드 코드와 정리된 문서를 담은 저장소입니다.

## 구조
- `everStarFrontend/` : React + TypeScript, Playwright E2E, MSW 모킹, OpenVidu/FCM 연동.
- `everStarBackMain/` : Spring Boot + JPA + MySQL, OAuth(Kakao/Google), OpenAI·Naver 감정분석 연동.
- `docs/` : 기능/요구사항, 아키텍처, API, UX/UI, 데이터모델, 운영 등 9개 문서로 정리.

## 주요 기능(서비스 관점)
- 지구별(메인): 편지 작성/조회, 마이페이지.
- 영원별(추모별): 응원 게시판, 탐험/검색, 메모리얼북.
- 49일 퀘스트, GPT 편지 답장, 감정 분석 시각화, 화상 통화(OpenVidu), 알림(FCM/로컬 비활성).

## 로컬 실행
프론트:
```bash
cd everStarFrontend
npm install
npm run dev   # http://localhost:3000
```
백엔드:
```bash
cd everStarBackMain
./gradlew build
./gradlew bootRun   # http://localhost:8080
```

## 문서
- `docs/` 내 9개 문서(overview, requirements, architecture, api-spec, ux-ui, data-model, process, ops, references)에서 정리된 내용을 확인하세요.
