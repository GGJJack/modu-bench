---
date: 2026-07-19
agent: collect-benchmark
status: completed
summary: "hyperclova-x-32b-think, hyperclova-x-8b-omni LLM 모델 벤치마크 신규 등록 및 점수 매칭, 출처 URL이 불분명한 벤치마크/모델에 대한 이슈 티켓 생성"
---

## Todo
- [x] 어제(2026-07-18) 수집된 신규 모델들에 대한 벤치마크 점수 등록 (hyperclova-x-32b-think, hyperclova-x-8b-omni, rakuten-ai-3-0, claude-science, namazu-deepseek-v3-1-terminus, sakana-translate)

## 조사 내역
- 01:30 hyperclova-x-32b-think 관련 벤치마크 탐색 ➔ https://arxiv.org/abs/2601.03286 에서 KMMLU (75.2), KoBALT (50.6), CLIcK (75.2), HAERAE Bench 1.0 (87.4), MMLU (87.7), HellaSwag (57.2), PIQA (76.7) 점수 확인
- 01:32 hyperclova-x-8b-omni 관련 벤치마크 탐색 ➔ https://arxiv.org/abs/2601.01792 에서 KMMLU-pro (64.9), HAERAE (75.3), KoBALT (27.7), MMLU (75.7), MMLU-pro (54.2), GSM8K (87.3) 점수 확인
- 01:35 Sakana AI namazu-deepseek-v3-1-terminus 및 rakuten-ai-3-0 벤치마크 점수 탐색 ➔ https://sakana.ai/namazu-alpha/ 확인하였으나 정확한 수치가 기재된 표 없음, 차트만 존재
- 01:38 sakana-translate 벤치마크 탐색 ➔ https://sakana.ai/translate-release/ 접근, LLM 벤치마크 관련 수치 없음
- 01:40 claude-science 벤치마크 탐색 ➔ https://www.anthropic.com/news/claude-science-ai-workbench 접근, 정확한 평가 지표 및 벤치마크 점수 없음. 출처 URL 없는 필드 저장 규칙에 따라 이슈 티켓 생성 결정
- 01:42 KoBALT, KMMLU-Pro 벤치마크는 논문 레퍼런스(Shin et al. 2025, Hong et al. 2025)만 있고 정확한 원문 URL을 찾을 수 없어 이슈 티켓 생성 결정

## 수행한 작업
- [x] `llm` 도메인에 신규 벤치마크 등록 (CLIcK, HAERAE Bench 1.0, PIQA, HellaSwag)
- [x] `hyperclova-x-32b-think` 모델 `llm` 도메인 벤치마크 점수 등록 (kmmlu, click, haerae-bench, mmlu, hellaswag, piqa) ➔ https://arxiv.org/abs/2601.03286
- [x] `hyperclova-x-8b-omni` 모델 `llm` 도메인 벤치마크 점수 등록 (haerae-bench, mmlu, mmlu-pro, gsm8k) ➔ https://arxiv.org/abs/2601.01792

## 판단 / 고민
- Namazu 시리즈(namazu-deepseek-v3-1-terminus, rakuten-ai-3-0)의 경우 블로그(https://sakana.ai/namazu-alpha/)에 구체적인 수치가 테이블 형태로 제공되지 않아 점수를 등록하지 않았음.
- Claude Science 모델의 경우 공식 블로그(https://www.anthropic.com/news/claude-science-ai-workbench)에 벤치마크 평가 지표가 존재하지 않아 규칙에 따라 점수를 등록하지 않고 이슈 티켓을 생성함.
- KoBALT, KMMLU-Pro 벤치마크는 논문에 구체적인 URL이 명시되어 있지 않아 추가하지 않고 이슈 티켓을 생성함.

## 이슈 제기
- issues/2026-07-19-collect-benchmark-claude-science.md
- issues/2026-07-19-collect-benchmark-kobalt-kmmlu-pro.md
