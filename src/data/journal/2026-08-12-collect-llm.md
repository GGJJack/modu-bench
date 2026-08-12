---
date: 2026-08-12
agent: collect-llm
status: completed
summary: "국가별 독자 LLM(중국 Qwen2.5 Base 시리즈, 일본 Tokyo Tech Swallow Base 시리즈) 5개 신규 모델 추가 및 기존 3개 모델 정보 보강 완료"
---

## Todo
- [x] 신규 모델 수집 및 등록 5건 (qwen-2.5-7b, qwen-2.5-14b, qwen-2.5-32b, swallow-7b, swallow-13b)
- [x] 기존 모델 보강 3건 (qwen-2.5-7b-instruct, qwen-2.5-14b-instruct, qwen-2.5-32b-instruct)

## 조사 내역
- 13:00 작업 시작 및 임무 포커스 대조
- 13:10 중국 Alibaba Cloud Qwen 2.5 공식 릴리스 페이지 및 Hugging Face 정보 대조 ← https://qwenlm.github.io/blog/qwen2.5/
- 13:20 일본 도쿄공업대학(Tokyo Tech) Swallow 7B/13B Base 모델 사양 및 공식 깃허브/허깅페이스 경로 조사 ← https://tokyotech-llm.github.io/

## 수행한 작업
- 13:30 qwen-2.5-7b 신규 모델 추가 (7B, Context 128000, Apache-2.0) ← https://qwenlm.github.io/blog/qwen2.5/
- 13:35 qwen-2.5-14b 신규 모델 추가 (14B, Context 128000, Apache-2.0) ← https://qwenlm.github.io/blog/qwen2.5/
- 13:40 qwen-2.5-32b 신규 모델 추가 (32B, Context 128000, Apache-2.0) ← https://qwenlm.github.io/blog/qwen2.5/
- 13:45 swallow-7b 신규 모델 추가 (7B, Context 4096, Llama 2 Community License Agreement) ← https://tokyotech-llm.github.io/
- 13:50 swallow-13b 신규 모델 추가 (13B, Context 4096, Llama 2 Community License Agreement) ← https://tokyotech-llm.github.io/
- 14:00 qwen-2.5-7b-instruct 기존 모델 정보 보강 (github, paper 링크 추가) ← https://github.com/QwenLM/Qwen2.5, https://arxiv.org/abs/2412.15115
- 14:05 qwen-2.5-14b-instruct 기존 모델 정보 보강 (github, paper 링크 추가) ← https://github.com/QwenLM/Qwen2.5, https://arxiv.org/abs/2412.15115
- 14:10 qwen-2.5-32b-instruct 기존 모델 정보 보강 (github, paper 링크 추가) ← https://github.com/QwenLM/Qwen2.5, https://arxiv.org/abs/2412.15115

## 판단 / 고민
- `missions/llm.md` 임무 정의에 근거하여 아시아 주요국(중국 Qwen, 일본 Swallow)의 핵심 독자(Sovereign) LLM base 모델들을 발굴 및 정비했습니다.
- 기존 데이터베이스에 Instruct 계열만 편중되어 존재하던 Qwen2.5 및 Swallow 모델들의 근간이 되는 Base 모델군을 신규 등록함으로써 데이터의 다각성과 완성도를 크게 제고했습니다.
- 또한, 기존에 Hugging Face 링크만 소수 등록되어 있었던 Qwen2.5 Instruct 시리즈에 대해 검증된 GitHub 리포지토리 및 논문(arXiv) 출처를 정교히 매핑 보강하였습니다.
- 이로써 높은 정밀도와 신뢰성을 추구하는 ModuBench PoC 수집 프로세스에 기여했습니다.

## 이슈 제기
- (없음)
