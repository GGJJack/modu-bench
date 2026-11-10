---
date: 2026-11-10
agent: collect-llm
status: completed
summary: "Meta Llama 패밀리 핵심 베이스 및 대화 모델(Llama 3 70B, Llama 2 70B Chat, Llama 2 70B/13B/7B 베이스) 신규 등록 및 Llama 모델 논문·저장소 링크 보강"
---

## Todo
- [x] Meta Llama 시리즈 공식 문서, Hugging Face 모델 카드 및 arXiv 논문 출처 조사
- [x] 신규 모델 5종(`llama-3-70b`, `llama-2-70b-chat`, `llama-2-70b`, `llama-2-13b`, `llama-2-7b`) 등록
- [x] 기존 모델 4종(`llama-3-70b-instruct`, `llama-3-8b-instruct`, `llama-3-8b`, `llama-3.1-405b`) 논문 및 GitHub 링크 보강
- [x] 등록 및 수정 데이터 CLI/git diff 검증
- [x] 프로젝트 빌드 검증 및 저널 작성 완료

## 조사 내역
- 01:05 missions/master.md 및 missions/llm.md 확인: 글로벌 메이저(OpenAI/Meta/Google/Anthropic/Mistral) 및 국가별 LLM 포커스 지침 확인
- 01:08 기존 등록 LLM 점검: Meta Llama 계열 중 Llama 3 8B 베이스 모델 및 Llama 3 70B/8B Instruct는 있으나, Llama 3 70B 베이스 모델(`llama-3-70b`) 및 Llama 2의 최상위 대화 모델인 Llama 2 70B Chat(`llama-2-70b-chat`), 그리고 연구·파인튜닝의 표준 기반 모델이었던 Llama 2 베이스 라인업(70B, 13B, 7B)이 누락되어 있음을 확인
- 01:12 Hugging Face meta-llama/Meta-Llama-3-70B 모델 카드 및 arXiv:2407.21783 확인 (70B, 8192 context, Llama 3 Community License, 2024-04-18) ← https://huggingface.co/meta-llama/Meta-Llama-3-70B
- 01:15 Hugging Face meta-llama/Llama-2-70b-chat-hf 모델 카드 및 arXiv:2307.09288 논문 확인 (70B, 4096 context, Llama 2 Community License, 2023-07-18) ← https://huggingface.co/meta-llama/Llama-2-70b-chat-hf
- 01:18 Hugging Face meta-llama/Llama-2-70b-hf 모델 카드 및 arXiv:2307.09288 논문 확인 (70B, 4096 context, Llama 2 Community License, 2023-07-18) ← https://huggingface.co/meta-llama/Llama-2-70b-hf
- 01:21 Hugging Face meta-llama/Llama-2-13b-hf 모델 카드 및 arXiv:2307.09288 논문 확인 (13B, 4096 context, Llama 2 Community License, 2023-07-18) ← https://huggingface.co/meta-llama/Llama-2-13b-hf
- 01:24 Hugging Face meta-llama/Llama-2-7b-hf 모델 카드 및 arXiv:2307.09288 논문 확인 (7B, 4096 context, Llama 2 Community License, 2023-07-18) ← https://huggingface.co/meta-llama/Llama-2-7b-hf
- 01:28 arXiv:2407.21783 (The Llama 3 Herd of Models) 논문 정보 및 llama-models 공식 GitHub 저장소 링크 점검 ← https://arxiv.org/abs/2407.21783

## 수행한 작업
- [x] `llama-3-70b` 신규 등록 (parameterSize: 70B, contextWindow: 8192, license: Llama 3, official: https://llama.meta.com/llama3/, huggingface: https://huggingface.co/meta-llama/Meta-Llama-3-70B, paper: https://arxiv.org/abs/2407.21783) ← https://huggingface.co/meta-llama/Meta-Llama-3-70B
- [x] `llama-2-70b-chat` 신규 등록 (parameterSize: 70B, contextWindow: 4096, license: Llama 2, official: https://ai.meta.com/resources/models-and-libraries/llama-downloads/, huggingface: https://huggingface.co/meta-llama/Llama-2-70b-chat-hf, paper: https://arxiv.org/abs/2307.09288) ← https://huggingface.co/meta-llama/Llama-2-70b-chat-hf
- [x] `llama-2-70b` 신규 등록 (parameterSize: 70B, contextWindow: 4096, license: Llama 2, official: https://ai.meta.com/resources/models-and-libraries/llama-downloads/, huggingface: https://huggingface.co/meta-llama/Llama-2-70b-hf, paper: https://arxiv.org/abs/2307.09288) ← https://huggingface.co/meta-llama/Llama-2-70b-hf
- [x] `llama-2-13b` 신규 등록 (parameterSize: 13B, contextWindow: 4096, license: Llama 2, official: https://ai.meta.com/resources/models-and-libraries/llama-downloads/, huggingface: https://huggingface.co/meta-llama/Llama-2-13b-hf, paper: https://arxiv.org/abs/2307.09288) ← https://huggingface.co/meta-llama/Llama-2-13b-hf
- [x] `llama-2-7b` 신규 등록 (parameterSize: 7B, contextWindow: 4096, license: Llama 2, official: https://ai.meta.com/resources/models-and-libraries/llama-downloads/, huggingface: https://huggingface.co/meta-llama/Llama-2-7b-hf, paper: https://arxiv.org/abs/2307.09288) ← https://huggingface.co/meta-llama/Llama-2-7b-hf
- [x] `llama-3-70b-instruct` 링크 보강 (Llama 3 Herd of Models 공식 arXiv:2407.21783 논문 링크 추가) ← https://arxiv.org/abs/2407.21783
- [x] `llama-3-8b-instruct` 링크 보강 (Llama 3 Herd of Models 공식 arXiv:2407.21783 논문 링크 추가) ← https://arxiv.org/abs/2407.21783
- [x] `llama-3-8b` 링크 보강 (Llama 3 Herd of Models 공식 arXiv:2407.21783 논문 링크 추가) ← https://arxiv.org/abs/2407.21783
- [x] `llama-3.1-405b` 링크 보강 (llama-models 공식 GitHub 및 arXiv:2407.21783 논문 링크 추가) ← https://arxiv.org/abs/2407.21783

## 판단 / 고민
- Meta의 Llama 생태계는 글로벌 오픈소스 파운데이션 모델의 핵심 축임.
- Llama 3 70B 베이스 모델(`llama-3-70b`)과 Llama 2의 주력 플래그십 대화 모델(`llama-2-70b-chat`), 그리고 생태계 연구와 벤치마크 평가의 표준 기저 모델인 Llama 2 베이스 모델 3종(70B, 13B, 7B)을 수집하여 포괄적인 모델 스펙트럼을 완성함.
- 기존에 등록되어 있던 Llama 3 모델들의 메타데이터에 Llama 3 공식 논문(`arXiv:2407.21783`) 및 llama-models 공식 GitHub 링크를 안전하게 보강함.
- 미공개/불확실한 가격 정보는 추정하지 않고 null로 유지함.

## 이슈 제기
- (없음)
