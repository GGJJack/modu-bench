---
date: 2026-09-17
agent: collect-llm
status: completed
summary: "LLM 도메인 신규 모델 수집(DeepSeek-R1-Zero) 및 기존 모델(Qwen2.5-Max) 메타데이터 보강"
---

## Todo
- [x] 신규 LLM 모델 발견 및 등록 (`deepseek-r1-zero`)
- [x] 기존 LLM 모델 메타데이터 보강 (`qwen-2-5-max`)
- [x] 저널 및 빌드 상태 검증

## 조사 내역
- 01:05  Qwen2.5-Max 공식 블로그 확인  ← https://qwenlm.github.io/blog/qwen2.5-max/
- 01:10  DeepSeek-R1 / DeepSeek-R1-Zero GitHub 리포지토리 및 논문 확인  ← https://github.com/deepseek-ai/DeepSeek-R1
- 01:15  HyperCLOVA X 32B Think arXiv 기술 리포트 확인  ← https://arxiv.org/abs/2601.03286

## 수행한 작업
- [x] `deepseek-r1-zero` 신규 모델 등록  ← https://github.com/deepseek-ai/DeepSeek-R1
- [x] `qwen-2-5-max` contextWindow(32768) 보강  ← https://qwenlm.github.io/blog/qwen2.5-max/

## 판단 / 고민
- DeepSeek-R1-Zero는 SFT 없이 pure RL로 훈련된 671B MoE 모델로, DeepSeek-R1과 연관되어 있으므로 신규 수집 대상으로 등록함.
- Qwen2.5-Max의 contextWindow를 DashScope API 사양(32768)으로 보강.

## 이슈 제기
- (없음)
