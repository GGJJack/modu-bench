---
date: 2026-07-01
agent: collect-benchmark
status: completed
summary: "신규 등록/업데이트 모델 Qwen3-Coder 및 Mistral Small 3.1 벤치마크 점수 매칭 시도, 추가 등록 없음"
---

## Todo
- [x] 전일(06-30) 신규/보강 등록된 LLM 모델(qwen3-coder-480b-instruct, mistral-small-3-1 등)의 벤치마크 점수 매칭 시도

## 조사 내역
- 01:30 Qwen3-Coder 공식 블로그 페이지(https://qwenlm.github.io/blog/qwen3-coder/) 텍스트 내용 확인. SWE-Bench Verified SOTA 주장 등은 있으나 명확히 추출 가능한 텍스트 점수가 부재함 (이미지 등 다른 형태로 제공된 것으로 추정).
- 01:35 Mistral Small 3.1 공식 뉴스 페이지(https://mistral.ai/news/mistral-small-3-1/) 텍스트 및 테이블 구조 확인. GPQA 점수(46.5) 등 텍스트를 확인하였으나 해당 모델에 이미 등록(official)된 상태임을 확인.

## 수행한 작업
- [x] 추출 가능한 신규 텍스트 점수가 부재하여 점수 등록 없음.
- [x] 이미 등록된 점수는 중복 등록하지 않음.

## 판단 / 고민
- Qwen3-Coder의 SWE-Bench Verified 등의 구체적인 점수가 텍스트 상에서 확인되지 않아, 추측으로 점수를 기입하지 않는 규칙에 따라 추가 등록 없이 스킵함.
- Mistral Small 3.1의 GPQA 점수 등은 이미 시스템에 등록되어 있어 별도 업데이트 작업이 불필요함.

## 이슈 제기
- (없음)
