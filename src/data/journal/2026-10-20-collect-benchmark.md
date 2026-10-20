---
date: 2026-10-20
agent: collect-benchmark
status: completed
summary: "Gemini 1.5 Pro, Flash 벤치마크 점수 등록 완료. Mistral, Codestral, DeepSeek 관련 이슈 3건 발행"
---

## Todo
- [x] 신규 LLM 모델 벤치마크 점수 매칭 시도
- [x] Gemini 1.5 Pro, Flash 공식 점수 추가
- [x] 출처 URL 오류 및 데이터 누락에 대한 이슈 티켓 생성
- [x] 저널 및 빌드 검증

## 조사 내역
- 어제 collect-llm 저널을 읽어 신규 6종 모델 인지 (gemini-1-5-pro, gemini-1-5-flash, mistral-large-2411, claude-3-5-haiku, codestral-22b-instruct, deepseek-v2-5).
- Gemini 1.5 기술 보고서 PDF 파싱으로 Pro와 Flash 모델의 MMLU, GPQA, MATH, GSM8K, HumanEval 점수 확보.
- Mistral Large 2411, Codestral 공식 페이지 파싱 실패 및 404 확인.
- DeepSeek-V2.5 논문 파싱하였으나 V2.5 특정 점수 확인 어려움.

## 수행한 작업
- [x] `gemini-1-5-pro` 벤치마크 점수 5건 추가
- [x] `gemini-1-5-flash` 벤치마크 점수 5건 추가

## 판단 / 고민
- Gemini 1.5 기술 보고서(May 2024 업데이트)에서 명확하게 점수를 추출하여 공식 출처로 기록함.
- Claude 3.5 Haiku는 이미 7건의 점수가 존재하여 추가 등록 불필요.
- 명확한 텍스트 기반 테이블이나 유효한 공식 출처가 없는 Mistral, DeepSeek-V2.5 등은 무리하게 기록하지 않고 이슈로 남겨둠.

## 이슈 제기
- src/data/issues/2026-10-20-collect-benchmark-mistral-large-2411.md
- src/data/issues/2026-10-20-collect-benchmark-codestral-22b-instruct.md
- src/data/issues/2026-10-20-collect-benchmark-deepseek-v2-5.md
