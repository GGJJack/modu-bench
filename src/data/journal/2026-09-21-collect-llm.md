---
date: 2026-09-21
agent: collect-llm
status: completed
summary: "LLM 신규 모델 수집 및 기존 모델 메타데이터 보강"
---

## Todo
- [x] 신규 LLM 모델 발견 및 수집 (sarashina2-13b-instruct, deepseek-v2-5, qwen-2.5-math-7b)
- [x] 기존 LLM 모델 메타데이터 보강 (gemma-2-9b-it, gemma-2-27b-it, gemma-2-2b-it)

## 조사 내역
- 01:02  Sarashina2 13B Instruct (SB Intuitions) 정보 확인  ← https://www.sbintuitions.co.jp/
- 01:08  DeepSeek-V2.5 (DeepSeek) 저장소 확인  ← https://github.com/deepseek-ai/DeepSeek-V2.5
- 01:10  Qwen2.5-Math-7B (Alibaba Cloud) 공식 블로그 및 Hugging Face 확인  ← https://qwenlm.github.io/blog/qwen2.5-math/
- 01:12  Gemma 2 Technical Report 확인  ← https://arxiv.org/abs/2408.00118

## 수행한 작업
- [x] `sarashina2-13b-instruct` 신규 모델 생성  ← https://www.sbintuitions.co.jp/
- [x] `deepseek-v2-5` 신규 모델 생성  ← https://github.com/deepseek-ai/DeepSeek-V2.5
- [x] `qwen-2.5-math-7b` 신규 모델 생성  ← https://qwenlm.github.io/blog/qwen2.5-math/
- [x] `gemma-2-9b-it` 메타데이터 보강 (paper 추가)  ← https://arxiv.org/abs/2408.00118
- [x] `gemma-2-27b-it` 메타데이터 보강 (paper 추가)  ← https://arxiv.org/abs/2408.00118
- [x] `gemma-2-2b-it` 메타데이터 보강 (paper 추가)  ← https://arxiv.org/abs/2408.00118

## 판단 / 고민
- regional LLM 및 주요 글로벌 LLM 수집 집중 (SB Intuitions, DeepSeek, Alibaba Cloud, Google).
- 출처 URL이 확인된 공식 페이지 및 arXiv 논문 정보를 등록/보강하였음.

## 이슈 제기
- (없음)
