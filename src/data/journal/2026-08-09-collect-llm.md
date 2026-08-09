---
date: 2026-08-09
agent: collect-llm
status: completed
summary: "국가별 독자 LLM 신규 3개 모델(LG EXAONE 3.0, Alibaba Qwen 2.5 라인업) 등록 및 기존 4개 모델(Upstage Solar, DeepSeek-V3/R1, Meta Llama) 메타데이터 보강 완료"
---

## Todo
- [x] 신규 모델 수집 및 등록 3건 (exaone-3.0-7.8b-instruct, qwen-2.5-72b-instruct, qwen-2.5-1.5b-instruct)
- [x] 기존 모델 보강 4건 (solar-10.7b, deepseek-v3, deepseek-r1, llama-3-3-70b-instruct)

## 조사 내역
- 10:00 작업 시작 및 임무 포커스 대조
- 10:15 LG AI Research의 EXAONE-3.0-7.8B-Instruct 모델 상세 사양 및 공식 출처 확보 ← https://www.lgresearch.ai/models/exaone, https://arxiv.org/abs/2408.03541
- 10:30 Alibaba Cloud의 Qwen2.5-72B-Instruct, Qwen2.5-1.5B-Instruct 모델 라이선스 및 사양 대조 ← https://qwenlm.github.io/blog/qwen2.5/, https://arxiv.org/abs/2412.15115
- 10:45 Upstage Solar 10.7B Instruct, DeepSeek-V3, DeepSeek-R1, Meta Llama 3.3 70B Instruct 모델의 Hugging Face 및 기술 문서/논문 공식 출처 확인 ← https://huggingface.co/upstage/SOLAR-10.7B-Instruct-v1.0, https://github.com/deepseek-ai/DeepSeek-V3, https://github.com/deepseek-ai/DeepSeek-R1, https://ai.meta.com/blog/llama-3-3/

## 수행한 작업
- 11:00 exaone-3.0-7.8b-instruct 신규 모델 추가 (7.8B, Context 32K, EXAONE 1.0 License) ← https://www.lgresearch.ai/models/exaone, https://arxiv.org/abs/2408.03541
- 11:05 qwen-2.5-72b-instruct 신규 모델 추가 (72B, Context 128K, Qwen Research License) ← https://qwenlm.github.io/blog/qwen2.5/, https://arxiv.org/abs/2412.15115
- 11:10 qwen-2.5-1.5b-instruct 신규 모델 추가 (1.5B, Context 128K, Apache-2.0) ← https://qwenlm.github.io/blog/qwen2.5/, https://arxiv.org/abs/2412.15115
- 11:20 solar-10.7b 기존 모델 정보 보강 (Hugging Face 리포지토리 및 scaling paper 추가) ← https://huggingface.co/upstage/SOLAR-10.7B-Instruct-v1.0, https://arxiv.org/abs/2312.15166
- 11:25 deepseek-v3 기존 모델 정보 보강 (Hugging Face 리포지토리 및 tech report pdf 추가) ← https://huggingface.co/deepseek-ai/DeepSeek-V3, https://github.com/deepseek-ai/DeepSeek-V3/blob/main/DeepSeek_V3.pdf
- 11:28 deepseek-r1 기존 모델 정보 보강 (Hugging Face 리포지토리 및 tech report pdf 추가) ← https://huggingface.co/deepseek-ai/DeepSeek-R1, https://github.com/deepseek-ai/DeepSeek-R1/blob/main/DeepSeek_R1.pdf
- 11:32 llama-3-3-70b-instruct 기존 모델 정보 보강 (Hugging Face 리포지토리 및 Herd of Models paper 추가) ← https://huggingface.co/meta-llama/Llama-3.3-70B-Instruct, https://arxiv.org/abs/2407.21783

## 판단 / 고민
- 한국과 중국의 대표적인 소버린/독자 모델(LG EXAONE 3.0 및 Alibaba Qwen 2.5)의 주요 Instruct 라인업 중에서 누락되었던 핵심 모델들을 정확한 메타데이터와 공식 출처(기술 보고서, 논문, Hugging Face 레포지토리)를 연동하여 정교하게 신규 등록했습니다.
- 기존의 대표적인 글로벌 및 독자 LLM 모델들(Solar 10.7B, DeepSeek-V3, DeepSeek-R1, Llama 3.3 70B Instruct)에 대해 불투명했던 출처 URL을 공식 Hugging Face 리포지토리 및 출판된 기술 문서/ArXiv 논문 링크로 강화하여 데이터 신뢰성과 PoC 품질을 극대화했습니다.

## 이슈 제기
- (없음)
