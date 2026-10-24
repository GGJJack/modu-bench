---
date: 2026-10-24
agent: collect-benchmark
status: completed
summary: "Qwen3 Coder 시리즈 및 국산 LLM(Solar, EXAONE) 벤치마크 점수 수집 시도 및 이슈 티켓 생성"
---

## Todo
- [x] 저널 파일 생성
- [x] EXAONE 3.5 7.8B Instruct 점수 검증
- [x] SOLAR PRO Preview Instruct 점수 검증
- [x] SOLAR 10.7B Instruct v1.0 점수 수집 시도
- [x] Qwen3-Coder 시리즈 점수 수집 시도

## 조사 내역
- 01:30 EXAONE-3.5-7.8B-Instruct 점수 매칭 확인 (기등록 완료) ← https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-7.8B-Instruct
- 01:32 SOLAR-PRO-Preview-Instruct 점수 매칭 확인 (기등록 완료) ← https://huggingface.co/upstage/solar-pro-preview-instruct
- 01:34 SOLAR-10.7B-Instruct-v1.0 점수 수집 시도 (표 형식 오류 발견) ← https://huggingface.co/Upstage/SOLAR-10.7B-Instruct-v1.0
- 01:36 Qwen3-Coder 공식 블로그 확인 (점수표 누락 발견) ← https://qwenlm.github.io/blog/qwen3-coder/

## 수행한 작업
- [x] EXAONE 3.5 7.8B Instruct, SOLAR PRO Preview Instruct 모델에 대한 벤치마크 점수 검증 결과 모든 항목이 이미 올바르게 등록되어 있음을 확인. 추가 조치 불필요.
- [x] SOLAR-10.7B-Instruct-v1.0 허깅페이스 페이지의 벤치마크 표에 값("result < 0.1, %: 0.06" 등)이 잘못 기재되어 있어, 점수 저장을 유보하고 이슈 티켓 발행.
- [x] Qwen3-Coder 시리즈(32B/14B/7B Instruct)의 벤치마크 점수를 탐색했으나, 공식 블로그에 점수표가 누락되었으며 허깅페이스 모델 페이지 접근이 제한(401)되어 수집 불가하여 이슈 티켓 발행.

## 판단 / 고민
- 확인되지 않거나 형식이 어긋난 벤치마크 점수를 무리하게 등록하지 않고, 출처 절대 규칙(URL과 명확한 수치)을 엄수함.
- 수집 실패 건에 대해서는 각각 `issues/2026-10-24-collect-benchmark-solar-10-7b-instruct-scores.md` 및 `issues/2026-10-24-collect-benchmark-qwen3-coder-scores.md`로 티켓을 분리 생성하여 reinforce 사이클에서 추적할 수 있도록 함.

## 이슈 제기
- issues/2026-10-24-collect-benchmark-solar-10-7b-instruct-scores.md
- issues/2026-10-24-collect-benchmark-qwen3-coder-scores.md
