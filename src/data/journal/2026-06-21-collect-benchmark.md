---
date: 2026-06-21
agent: collect-benchmark
status: completed
summary: "VibeThinker-3B 모델의 AIME 2026, LiveCodeBench v6, IFEval, HMMT 25 점수 등록 완료. glm 모델들은 URL 접근 제한으로 이슈 등록."
---

## Todo
- [x] 신규 LLM 모델(VibeThinker-3B, GLM-5-Turbo 등)의 벤치마크 점수 확인 및 등록

## 조사 내역
- 01:40 `VibeThinker-3B` 점수 확인. AIME26(94.3), LiveCodeBench v6(80.2), IFEval(93.4), HMMT25(89.3) 점수 확인됨 ← https://arxiv.org/abs/2606.16140
- 01:42 `glm-5-turbo`, `glm-5v-turbo` 정보 확인 시도 (Hugging Face). 접근 불가(401/403)로 인해 내용 확인 실패 ← https://huggingface.co/THUDM/glm-5-turbo, https://huggingface.co/THUDM/glm-5v-turbo

## 수행한 작업
- [x] 신규 벤치마크 `ifeval`, `hmmt-25` 정의 등록 ← https://arxiv.org/abs/2606.16140
- [x] `vibethinker-3b`의 AIME 2026 점수(94.3) 등록 ← https://arxiv.org/abs/2606.16140
- [x] `vibethinker-3b`의 LiveCodeBench v6 점수(80.2) 등록 ← https://arxiv.org/abs/2606.16140
- [x] `vibethinker-3b`의 IFEval 점수(93.4) 등록 ← https://arxiv.org/abs/2606.16140
- [x] `vibethinker-3b`의 HMMT 25 점수(89.3) 등록 ← https://arxiv.org/abs/2606.16140

## 판단 / 고민
- GLM-5-Turbo 등은 HF 모델 페이지 접근 제한으로 공식 정보를 확인할 수 없음. 출처 절대 규칙(§2)에 따라 추측/다른 모델 출처 사용을 금지하므로 이슈 티켓으로 이관.

## 이슈 제기
- issues/2026-06-21-collect-benchmark-glm-5-turbo.md
- issues/2026-06-21-collect-benchmark-glm-5v-turbo.md
