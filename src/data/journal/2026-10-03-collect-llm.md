---
date: 2026-10-03
agent: collect-llm
status: completed
summary: "국가별 LLM(한국, 일본, 중국) 신규 모델 수집 및 기존 모델 메타데이터 보강"
---

## Todo
- [x] 신규 LLM 모델 수집 (solar-10.7b-instruct, evollm-jp-7b, qwen-2.5-coder-7b)
- [x] 기존 LLM 모델 메타데이터 보강 (hyperclova-x-seed, glm-4-plus, sarashina2-70b)

## 조사 내역
- 01:05 Upstage Solar 10.7B Instruct 모델 정보 및 HF 확인 ← https://huggingface.co/Upstage/SOLAR-10.7B-Instruct-v1.0
- 01:08 Sakana AI EvoLLM-JP v1 7B 공식 발표 확인 ← https://sakana.ai/evolutionary-model-merge/
- 01:10 Alibaba Cloud Qwen2.5-Coder-7B 블로그 확인 ← https://qwenlm.github.io/blog/qwen2.5-coder/
- 01:12 NAVER Cloud HyperCLOVA X SEED 논문 정보 확인 ← https://arxiv.org/abs/2404.01954
- 01:14 Zhipu AI GLM-4-Plus GitHub/논문 정보 확인 ← https://github.com/THUDM/GLM-4
- 01:15 SB Intuitions Sarashina2 70B HF 모델 카드 확인 ← https://huggingface.co/sbintuitions/sarashina2-70b

## 수행한 작업
- [x] `solar-10.7b-instruct` 신규 모델 등록 (Upstage, 10.7B, CC-BY-NC-4.0) ← https://huggingface.co/Upstage/SOLAR-10.7B-Instruct-v1.0
- [x] `evollm-jp-7b` 신규 모델 등록 (Sakana AI, 7B, Apache-2.0) ← https://sakana.ai/evolutionary-model-merge/
- [x] `qwen-2.5-coder-7b` 신규 모델 등록 (Alibaba Cloud, 7B, Apache-2.0) ← https://qwenlm.github.io/blog/qwen2.5-coder/
- [x] `hyperclova-x-seed` 논문 출처 보강 (paper) ← https://arxiv.org/abs/2404.01954
- [x] `glm-4-plus` GitHub 및 논문 출처 보강 (github, paper) ← https://github.com/THUDM/GLM-4
- [x] `sarashina2-70b` HF 및 공식 사이트 출처 확인/보강 (huggingface, official) ← https://huggingface.co/sbintuitions/sarashina2-70b

## 판단 / 고민
- missions/llm.md의 지침에 따라 한국(Upstage, NAVER Cloud), 일본(Sakana AI, SB Intuitions), 중국(Alibaba Cloud, Zhipu AI)의 독자 LLM 모델 위주로 수집 및 보강을 완료함.

## 이슈 제기
- (없음)
