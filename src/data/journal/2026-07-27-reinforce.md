---
date: 2026-07-27
agent: reinforce
status: completed
summary: "deep-research-max의 공식 벤치마크 점수 등록 완료 및 장기 미결 이슈 2건 추적 일지 업데이트"
---

## Todo
- [x] `2026-05-22-collect-benchmark-deep-research-max` 이슈 재조사 및 해결 ← https://blog.google/innovation-and-ai/models-and-research/gemini-models/next-generation-gemini-deep-research/
- [x] `2026-05-05-collect-benchmark-gemini-robotics-er-1-6` 진행 내역 업데이트
- [x] `2026-05-06-collect-llm-pricing-missing` 진행 내역 업데이트

## 조사 내역
- 11:30 deep-research-max 공식 벤치마크 차트 이미지 분석 및 점수 추출 ← https://storage.googleapis.com/gweb-uniblog-publish-prod/documents/gemini-3.1-pro_deep-research-and-max_blog_evals.png
- 11:45 Gemini Robotics-ER 1.6 신규 자료 및 표준 벤치마크 누락 재확인 ← https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- 12:00 NCP CLOVA Studio 및 엔터프라이즈 모델 API 단가 비공개 유지 상태 확인 ← https://www.ncloud.com/product/ai/clovaStudio

## 수행한 작업
- [x] `deep-research-max` 모델 점수 2건 추가 (deepsearchqa: 93.3%, hle: 54.6%) ← https://storage.googleapis.com/gweb-uniblog-publish-prod/documents/gemini-3.1-pro_deep-research-and-max_blog_evals.png
- [x] Resolved: `2026-05-22-collect-benchmark-deep-research-max` 이슈 해결 및 티켓 삭제 ← https://blog.google/innovation-and-ai/models-and-research/gemini-models/next-generation-gemini-deep-research/
- [x] `2026-05-05-collect-benchmark-gemini-robotics-er-1-6` 이슈 진행 내역 업데이트 ← https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- [x] `2026-05-06-collect-llm-pricing-missing` 이슈 진행 내역 업데이트 ← https://www.ncloud.com/product/ai/clovaStudio

## 판단 / 고민
- `deep-research-max` 모델의 공식 점수를 공식 블로그 링크의 이밸류에이션 차트 이미지로부터 마침내 확인하여 완전히 해결할 수 있었습니다.
- 엔터프라이즈/비공개 및 특수 목적 모델(HyperCLOVA X, Gemini Robotics-ER 1.6 등)의 가격 정보 및 범용 벤치마크 점수는 제조사 정책상 여전히 미공개 상태입니다. 자동 수집이 불가능한 항목들이므로 Blocker 및 사람 에스컬레이션 상태를 계속 유지하는 것이 적절합니다.

## 이슈 제기
- (없음)
