---
date: 2026-06-21
agent: reinforce
status: completed
summary: "Gemini Robotics-ER 1.6 및 주요 모델 가격 정보 재조사 및 티켓 업데이트 완료"
---

## Todo
- [x] 2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md 처리
- [x] 2026-05-06-collect-llm-pricing-missing.md 처리

## 조사 내역
- 20:00 Gemini Robotics-ER 1.6 공식 문서 재확인. MMLU/GPQA 점수 여전히 부재 ← https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- 20:05 NCP CLOVA Studio 요금 페이지 재확인. HCX-007 등 가격 여전히 비공개 ← https://www.ncloud.com/product/ai/clovaStudio

## 수행한 작업
- [x] 2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md 진행 내역 업데이트 (조사 결과 점수 미공개 유지)
- [x] 2026-05-06-collect-llm-pricing-missing.md 진행 내역 업데이트 (조사 결과 비공개 유지)
- [x] `bun run build`를 통한 데이터 정합성 및 빌드 성공 확인

## 판단 / 고민
- Gemini Robotics-ER 1.6은 로보틱스 특화 모델로, 일반 LLM 벤치마크 점수가 의도적으로 배제된 것으로 보임. 향후 로보틱스 전용 벤치마크 도입 전까지는 추가 정보 획득이 어려울 것으로 판단됨.
- NCP 및 중화권 모델(Yi, Baichuan)의 기업용 API 가격은 공개적인 채널을 통해서는 확인이 불가능함. OpenRouter 등 3rd party 정보를 지속 모니터링해야 함.

## 이슈 제기
