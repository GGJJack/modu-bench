---
date: 2026-11-09
agent: collect-llm
status: completed
summary: "Meta Llama 패밀리 핵심 모델(Llama 3 70B/8B Instruct, Llama 2 7B/13B Chat) 신규 등록 및 Llama 모델 링크 보강"
---

## Todo
- [x] Meta Llama 모델 공식 문서, Hugging Face 모델 카드 및 논문 출처 조사
- [x] 신규 모델 4종(`llama-3-70b-instruct`, `llama-3-8b-instruct`, `llama-2-7b-chat`, `llama-2-13b-chat`) 등록
- [x] 기존 모델 3종(`llama-3-8b`, `llama-3.1-8b`, `llama-3.2-1b`) 메타데이터 링크 보강
- [x] 등록 및 수정 데이터 CLI/git diff 검증
- [x] 프로젝트 빌드 검증 및 저널 작성 완료

## 조사 내역
- 01:05 missions/master.md 및 missions/llm.md 확인: 글로벌 메이저(OpenAI/Meta/Google/Anthropic/Mistral) 및 국가별 LLM 포커스 지침 확인
- 01:08 기존 등록 LLM 점검: Meta Llama 계열 중 Llama 3.1/3.2/3.3은 등록되어 있으나, 오픈소스 커뮤니티의 기준 모델이었던 Llama 3 핵심 Instruct 라인업(70B/8B Instruct)과 Llama 2 대표 대화형 모델(7B Chat, 13B Chat)이 누락되어 있음을 확인
- 01:10 Hugging Face meta-llama/Meta-Llama-3-70B-Instruct 모델 카드 확인 (70B, 8192 context, Llama 3 Community License, 2024-04-18) ← https://huggingface.co/meta-llama/Meta-Llama-3-70B-Instruct
- 01:12 Hugging Face meta-llama/Meta-Llama-3-8B-Instruct 모델 카드 확인 (8B, 8192 context, Llama 3 Community License, 2024-04-18) ← https://huggingface.co/meta-llama/Meta-Llama-3-8B-Instruct
- 01:15 Hugging Face meta-llama/Llama-2-7b-chat-hf 모델 카드 및 arXiv:2307.09288 논문 확인 (7B, 4096 context, Llama 2 Community License, 2023-07-18) ← https://huggingface.co/meta-llama/Llama-2-7b-chat-hf
- 01:17 Hugging Face meta-llama/Llama-2-13b-chat-hf 모델 카드 및 arXiv:2307.09288 논문 확인 (13B, 4096 context, Llama 2 Community License, 2023-07-18) ← https://huggingface.co/meta-llama/Llama-2-13b-chat-hf
- 01:20 Llama 3 베이스 모델 및 Llama 3.1 8B, Llama 3.2 1B 공식 블로그/GitHub/논문 링크 점검 (arXiv:2407.21783, llama-models GitHub) ← https://arxiv.org/abs/2407.21783

## 수행한 작업
- [x] `llama-3-70b-instruct` 신규 등록 (parameterSize: 70B, contextWindow: 8192, license: Llama 3, official: https://llama.meta.com/llama3/, huggingface: https://huggingface.co/meta-llama/Meta-Llama-3-70B-Instruct) ← https://huggingface.co/meta-llama/Meta-Llama-3-70B-Instruct
- [x] `llama-3-8b-instruct` 신규 등록 (parameterSize: 8B, contextWindow: 8192, license: Llama 3, official: https://llama.meta.com/llama3/, huggingface: https://huggingface.co/meta-llama/Meta-Llama-3-8B-Instruct) ← https://huggingface.co/meta-llama/Meta-Llama-3-8B-Instruct
- [x] `llama-2-7b-chat` 신규 등록 (parameterSize: 7B, contextWindow: 4096, license: Llama 2, paper: arXiv:2307.09288, huggingface: https://huggingface.co/meta-llama/Llama-2-7b-chat-hf) ← https://huggingface.co/meta-llama/Llama-2-7b-chat-hf
- [x] `llama-2-13b-chat` 신규 등록 (parameterSize: 13B, contextWindow: 4096, license: Llama 2, paper: arXiv:2307.09288, huggingface: https://huggingface.co/meta-llama/Llama-2-13b-chat-hf) ← https://huggingface.co/meta-llama/Llama-2-13b-chat-hf
- [x] `llama-3-8b` 링크 보강 (huggingface 모델 카드 링크 추가) ← https://huggingface.co/meta-llama/Meta-Llama-3-8B
- [x] `llama-3.1-8b` 링크 보강 (Llama 3 Herd of Models 공식 arXiv:2407.21783 논문 링크 추가) ← https://arxiv.org/abs/2407.21783
- [x] `llama-3.2-1b` 링크 보강 (공식 블로그 발표문 링크 정밀화 및 llama-models 공식 GitHub 저장소 링크 추가) ← https://ai.meta.com/blog/llama-3-2-connect-open-multimodal-edge-models/

## 판단 / 고민
- Meta의 Llama 시리즈는 글로벌 오픈소스 LLM 생태계의 기초이자 표준 기준 모델임.
- 저장소 내 DB에 Llama 3.1(8B, 70B, 405B)과 Llama 3.2(1B, 3B), Llama 3.3(70B) 및 Llama 3 8B 베이스 모델은 존재했으나, 2024년 상반기 오픈소스 AI 생태계를 주도한 Llama 3의 공식 대화형 튜닝 모델인 70B Instruct 및 8B Instruct가 누락되어 있었음.
- 또한 오늘날 대부분의 오픈소스 LLM 및 파인튜닝 연구의 기초가 되었던 역사적 이정표 모델인 Llama 2의 핵심 대화형 모델(7B Chat, 13B Chat) 역시 누락되어 있었음.
- 공식 Hugging Face 리포지토리 및 논문(arXiv:2307.09288, arXiv:2407.21783)을 직접 확인하여 신규 4종을 검증 등록하고, 기존 Llama 모델 3종에 누락되어 있던 공식 링크들을 안전하게 보강함.
- 미공개/불확실한 가격 정보는 추정하지 않고 null로 유지함.

## 이슈 제기
- (없음)
