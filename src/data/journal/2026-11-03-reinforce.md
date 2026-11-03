---
date: 2026-11-03
agent: reinforce
status: completed
summary: "2건의 오래된 blocker 이슈 재검증 및 진행 내역 갱신"
---

## Todo
- [x] 이슈 `2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 재검증 및 진행 내역 기록
- [x] 이슈 `2026-05-06-collect-llm-pricing-missing.md` 재검증 및 진행 내역 기록

## 조사 내역
- 03:00 Gemini Robotics-ER 1.6 공식 문서 확인 및 MMLU/GPQA 등 범용 LLM 벤치마크 점수 부재 재확인 ← https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- 03:05 HyperCLOVA X, Yi-Large, Baichuan-4 공식 요금 체계 미공개(상담 필요) 상태 지속 확인 ← https://www.ncloud.com/product/ai/clovaStudio

## 수행한 작업
- [x] `2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md` 진행 내역 append 및 blocker 상태 유지 ← https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- [x] `2026-05-06-collect-llm-pricing-missing.md` 진행 내역 append 및 blocker 상태 유지 ← https://www.ncloud.com/product/ai/clovaStudio

## 판단 / 고민
- Gemini Robotics-ER 1.6은 로보틱스 특화 모델로 범용 언어 모델 벤치마크(MMLU/GPQA 등) 지표가 공표되지 않는 기조가 지속되고 있고, 공식적으로 셧다운(deprecated) 상태이므로 blocker 상태를 유지함.
- HyperCLOVA X, Yi-Large, Baichuan-4 가격 정보는 여전히 상담 필요/개별 협의 품목으로 비공개 유지 중이므로 blocker 상태를 유지함.

## 이슈 제기
- (없음)

## 재실행 (04:00)

### Todo
- [x] 이슈 `2026-05-07-collect-llm-metadata-missing.md` 재검토 및 진행 내역 기록
- [x] 이슈 `2026-05-14-collect-benchmark-unverified.md` 재검토 및 진행 내역 기록

### 조사 내역
- 04:00 HyperCLOVA X, Sakana AI(Fugu), 01.AI, Baichuan AI 공식 가격 페이지 재확인 ← https://www.ncloud.com/product/ai/clovaStudio
- 04:05 AWS Bedrock Meta Llama 페이지 및 DeepSeek 공식 채널 확인, Llama 4 Maverick/Scout 17B 및 DeepSeek V3.2 표준 학술 벤치마크 점수 부재 재확인 ← https://aws.amazon.com/bedrock/meta/

### 수행한 작업
- [x] `2026-05-07-collect-llm-metadata-missing.md` 진행 내역(2026-11-03) append 및 blocker 유지 ← https://www.ncloud.com/product/ai/clovaStudio
- [x] `2026-05-14-collect-benchmark-unverified.md` 진행 내역(2026-11-03) append 및 모니터링 유지 ← https://aws.amazon.com/bedrock/meta/

### 판단 / 고민
- NCP CLOVA Studio 및 주요 엔터프라이즈 모델(01.AI, Baichuan AI, Sakana AI 베타)의 공식 가격은 일반 공개 단가 없이 상담 필요 및 기업 협의 제도로 운영되고 있어 blocker 상태를 유지함.
- Llama 4 Maverick/Scout 17B 및 DeepSeek V3.2는 AWS Bedrock 및 공식 채널에서 범용 학술 벤치마크 수치가 추가 공개되지 않아 모니터링을 지속함.
