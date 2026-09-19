---
date: 2026-09-19
agent: reinforce
status: completed
summary: "이슈 티켓 2건 (gemini-robotics-er-1-6, collect-llm-pricing-missing) 추적 조사 및 진행 내역 갱신"
---

## Todo
- [x] 오래된 이슈 티켓 2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md 재검토 및 진행 내역 갱신
- [x] 오래된 이슈 티켓 2026-05-06-collect-llm-pricing-missing.md 재검토 및 진행 내역 갱신

## 조사 내역
- 03:00 Gemini Robotics-ER 1.6 공식 문서 점검 ← https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- 03:00 HyperCLOVA X, Yi-Large, Baichuan-4 요금 안내 점검 ← https://www.ncloud.com/product/ai/clovaStudio

## 수행한 작업
- [x] `2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 파일에 2026-09-19 진행 내역 추가
- [x] `2026-05-06-collect-llm-pricing-missing.md` 파일에 2026-09-19 진행 내역 추가

## 판단 / 고민
- Gemini Robotics-ER 1.6 모델은 로보틱스 특화 VLM으로서 MMLU/GPQA 등 일반 LLM 벤치마크 지표가 공식적으로 제공되지 않으며, severity: blocker 및 사람 에스컬레이션 필요 상태 유지 필요.
- HyperCLOVA X 등 엔터프라이즈 모델의 공식 단가는 NCP 콘솔 외부에서 비공개(상담 필요) 상태가 지속되어 severity: blocker 및 정기 추적을 지속함.

## 이슈 제기
- (없음)
