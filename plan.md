# 문서 정리 계획 (Notion Export → docs)

## 목표
- 노션 export 원본(`docs/notion-export`)을 직접 검토하여 필요한 내용을 `docs/` 내 정리본(md)으로 재작성
- 민감정보(계정, 비밀번호, 토큰 등) 포함 금지
- 정리 완료 후 `docs/notion-export` 폴더 삭제

## 대상 원본 (가급적 전체 스캔)
- 위치: `docs/notion-export/`
- 파일 형식: md, csv, json, png 등 (번호형 파일명: `file_0001.md` 등)
- 우선 확인할 대표 md: `file_0001.md`(개요/링크), `file_0047.md`(아키텍처), `file_0059.md`(회의/기획 체크리스트)
- 이미지 참조: `file_0048.png` 등 (아키텍처/발표 자료 관련)

## 산출 예정 문서 (docs/)
- `docs/requirements.md` : 요구사항/기능 목록/화면 흐름 요약
- `docs/architecture.md` : 시스템/인프라/아키텍처 설명(이미지 경로 포함)
- `docs/process.md` : 운영/회의/스프린트/발표 팁 등 프로세스 정리
- `docs/links.md` : 주요 링크(ERD, Figma, Jira 등) 모음. 민감정보 제외
- (필요 시) 기타 섹션 추가

## 작업 절차
1. `docs/notion-export` 내용을 가능한 한 모두 훑으면서 카테고리 분류
2. 각 카테고리에 따라 위 문서 초안 작성 → 민감 정보 필터링
3. 작성 후 다시 검토 및 경로/이미지 참조 확인
4. `docs/notion-export` 폴더 삭제 (정리본만 남김)

## 유의사항
- 민감정보(계정/암호/토큰/접속 정보) 발견 시 기록하지 않음
- 외부 공유 전 추가 검토 필요 안내를 문서에 명시
