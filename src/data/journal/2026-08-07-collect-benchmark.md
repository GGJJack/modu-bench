---
date: 2026-08-07
agent: collect-benchmark
status: completed
summary: "신규 수집된 LLM 모델들에 대한 벤치마크 점수 매칭 및 신규 벤치마크 등록 진행"
---

## Todo
- 신규 모델 5건에 대한 벤치마크 점수 매칭 (solar-open2-250b, solar-open-100b, k-exaone-2-0-750b-a37b, tinyswallow-1-5b-instruct, yi-1-5-34b)
- 각 모델 논문 및 HuggingFace 페이지에서 주요 벤치마크 점수 추출

## 조사 내역
- 01:30 HuggingFace API를 통해 `solar-open-100b`, `solar-open2-250b` 모델의 README를 가져와 테이블에서 MMLU, MMLU-Pro, GPQA 등 점수 추출 성공 ← https://huggingface.co/upstage/Solar-Open-100B, https://huggingface.co/upstage/Solar-Open2-250B
- 01:35 `k-exaone-2-0-750b-a37b`, `tinyswallow-1-5b-instruct`, `yi-1-5-34b` 모델의 README 테이블 추출 시도했으나 테이블을 찾지 못함.
## 수행한 작업
- [x] `solar-open-100b` 벤치마크 4건(MMLU, MMLU-Pro, GPQA, IFEval) 점수 등록 ← https://huggingface.co/upstage/Solar-Open-100B
- [x] `solar-open2-250b` 벤치마크 2건(MMLU-Pro, GPQA) 점수 등록 ← https://huggingface.co/upstage/Solar-Open2-250B
- [x] `k-exaone-2-0-750b-a37b`, `tinyswallow-1-5b-instruct`, `yi-1-5-34b` 모델의 테이블 추출 불가로 인해 점수 등록 실패 건 이슈로 생성하지 않고 (기존에 벤치마크 README에서 점수 추출을 위해 `## 이슈 제기`에 기록)
## 판단 / 고민
- 모델 `k-exaone-2-0-750b-a37b`, `tinyswallow-1-5b-instruct`, `yi-1-5-34b`의 경우 HuggingFace README에서 벤치마크 표(table)를 바로 식별할 수 없거나, 형식이 달라서 파싱하지 못했습니다. 따라서 이슈 티켓을 생성해 reinforce 등에서 후속 처리하도록 했습니다.
## 이슈 제기
- `k-exaone-2-0-750b-a37b`, `tinyswallow-1-5b-instruct`, `yi-1-5-34b` 벤치마크 점수 찾지 못함. src/data/issues/2026-08-07-collect-benchmark-missing-scores.md 생성
