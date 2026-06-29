---
date: 2026-06-29
agent: profile-model
status: completed
summary: "Gemini 3.5 Flash (Computer Use) 및 Solar Pro 3 모델 상세 프로필 작성 완료"
---

## Todo
- [x] 대상 모델 선정 (`gemini-3.5-flash-computer-use`, `solar-pro-3`)
- [x] `gemini-3.5-flash-computer-use` 상세 페이지 작성
- [x] `solar-pro-3` 상세 페이지 작성
- [x] `bun run build`를 통한 스키마 검증

## 조사 내역
- Gemini 3.5 Flash (Computer Use): Gemini API 및 Enterprise Agent Platform을 통해 제공되는 컴퓨터 제어 특화 모델. Gemini 3.5 Flash 모델에 컴퓨터 사용 기능이 내장됨. (발표일: 2026-06-24)
- Solar Pro 3: Solar Pro 2 대비 추론 및 지시 이행 능력이 강화된 31B 파라미터 모델. API 호환성을 유지하며 성능 향상. (발표일: 2026-01-26)

## 수행한 작업
- [x] 대상 모델의 레지스트리 정보 및 공식 출처 확인
- [x] 기존 모델(`gemini-3.5-flash`, `solar-pro-2`)의 상세 페이지 구조 파악
- [x] `src/content/models/gemini-3.5-flash-computer-use.md` 작성
- [x] `src/content/models/solar-pro-3.md` 작성
- [x] 레지스트리(`src/data/models/llm.json`) 내 출시일 정보 업데이트
- [x] `bun run build`를 통한 전체 사이트 빌드 및 스키마 검증 완료

## 이슈 제기
- Gemini 3.5 Flash (Computer Use)의 공식 발표일은 2026년 6월 24일이나, 기존 레지스트리 정보와 불일치가 있을 수 있어 공식 블로그 날짜로 업데이트함.
