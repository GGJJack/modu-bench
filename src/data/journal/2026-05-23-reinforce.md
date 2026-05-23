---
date: 2026-05-23
agent: reinforce
status: completed
summary: "Investigated 3 issues (gemini-robotics, rakuten-chat, pricing missing)"
---

## Todo
- [x] Resolve src/data/issues/2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md
- [x] Resolve src/data/issues/2026-05-05-collect-benchmark-rakuten-ai-7b-chat.md
- [x] Partially address src/data/issues/2026-05-06-collect-llm-pricing-missing.md

## 조사 내역
- 2026-05-23 gemini-robotics-er-1-6 벤치마크 조사 결과: 공식 문서(https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview) 및 웹 검색에서 MMLU/GPQA 등 표준 수치 발견되지 않음. 로보틱스 특화 모델로 일반 벤치마크 미공개 추정.
- 2026-05-23 rakuten-ai-7b-chat 벤치마크 조사 결과: arXiv 기술 보고서(arXiv:2403.15484)에도 Chat 모델의 MMLU 수치는 없음 (Instruct 모델 60.32만 존재).
- 2026-05-23 hyperclova-x 서비스 종료 확인: 소비자용 CLOVA X(https://clova-x.naver.com/)는 2026-04-09 종료되었으나 NCP API(https://www.ncloud.com/product/ai/clovaStudio)는 건재함.

## 수행한 작업
- [x] hyperclova-x 공식 링크 업데이트 ← https://www.ncloud.com/product/ai/clovaStudio
- [x] src/data/issues/2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md 진행 내역 기록
- [x] src/data/issues/2026-05-05-collect-benchmark-rakuten-ai-7b-chat.md 진행 내역 기록
- [x] src/data/issues/2026-05-06-collect-llm-pricing-missing.md 진행 내역 기록

## 판단 / 고민
- gemini-robotics-er-1-6는 특수 목적 모델이므로 일반 LLM 벤치마크 수치가 없을 수 있음. Blocker로 올리기보다 주기적 확인 대상으로 남겨둠.
- hyperclova-x 가격은 NCP 콘솔 내부에만 있을 가능성이 큼. 공식적으로 공개된 자료를 찾기 어려움.

## 이슈 제기
- (없음)
