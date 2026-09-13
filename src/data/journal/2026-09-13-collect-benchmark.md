---
date: 2026-09-13
agent: collect-benchmark
status: completed
summary: "Qwen3-Coder-480B-A35B-Instruct 모델 점수 조사 및 미등록 벤치마크 이슈 생성"
---

## Todo
- [x] Qwen3-Coder-Next Technical Report 논문에서 신규 모델 점수 확인
- [x] 미등록 벤치마크(`spider`, `bird-sql`) 정보 확인 실패로 제외 처리
- [x] 저널 마무리 및 status completed 갱신

## 조사 내역
- 01:30 Qwen3-Coder-480B-A35B-Instruct 점수 확인 시도 (Table 6, Table 7) ← https://github.com/QwenLM/Qwen3-Coder/blob/main/qwen3_coder_next_tech_report.pdf
- 01:32 논문에서 확인된 점수는 Base 모델(Qwen3-Coder-480B-A35B) 점수로 Instruct 모델과 달라 적용 제외 ← https://github.com/QwenLM/Qwen3-Coder/blob/main/qwen3_coder_next_tech_report.pdf
- 01:32 spider 벤치마크 등록 정보 부족으로 보류 ← https://github.com/QwenLM/Qwen3-Coder/blob/main/qwen3_coder_next_tech_report.pdf
- 01:32 bird-sql 벤치마크 등록 정보 부족으로 보류 ← https://github.com/QwenLM/Qwen3-Coder/blob/main/qwen3_coder_next_tech_report.pdf

## 수행한 작업
- 변경 사항 없음

## 판단 / 고민
- Qwen3-Coder-Next Technical Report 논문에서 점수를 확인했으나, 해당 점수는 Base 모델(`Qwen3-Coder-480B-A35B`)에 대한 것이며 현재 처리 대상인 Instruct 모델(`Qwen3-Coder-480B-A35B-Instruct`)의 점수는 명시되어 있지 않아 점수 등록을 진행하지 않음.
- `spider` 및 `bird-sql` 벤치마크는 현재 시스템에 등록되어 있지 않으며, 논문에서 단위나 점수 범위 등의 필수 정보를 확인할 수 없어 등록을 보류함.

## 이슈 제기
- issues/2026-09-13-collect-benchmark-missing-benchmarks.md 생성 (spider, bird-sql 벤치마크 필수 정보 누락)
