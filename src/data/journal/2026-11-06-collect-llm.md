---
date: 2026-11-06
agent: collect-llm
status: completed
summary: "Microsoft의 초기 SLM 대표작(Phi-1, Phi-1.5, Phi-2) 및 경량 추론 최신 모델(Phi-4-mini-instruct) 신규 등록, Phi-4-multimodal-instruct 논문 링크 보강"
---

## Todo
- [x] Microsoft Phi 시리즈 모델 사양 및 출처 URL 조사 (Phi-1, Phi-1.5, Phi-2, Phi-4-mini-instruct, Phi-4-multimodal-instruct)
- [x] 신규 모델 4종(`phi-1`, `phi-1-5`, `phi-2`, `phi-4-mini-instruct`) 등록
- [x] 기존 모델(`phi-4-multimodal-instruct`) 논문 및 HF 링크 보강
- [x] 등록 및 수정 데이터 CLI/git diff 검증
- [x] 프로젝트 빌드 검증 및 저널 작성 완료

## 조사 내역
- 01:05 기존 LLM DB의 Phi 라인업 점검: 어제 세션(2026-11-05)에서 Phi-3/Phi-3.5가 등록되었으나, 초기 합성 데이터 혁신 모델인 Phi-1, Phi-1.5, Phi-2와 최신 컴팩트 모델인 Phi-4-mini-instruct 누락 확인 ← bun run skills/manage-model/scripts/model.ts list llm
- 01:08 Hugging Face microsoft/phi-1 모델 카드 확인 (1.3B, 2048 context, MIT, 2023-06-20, Textbooks Are All You Need) ← https://huggingface.co/microsoft/phi-1
- 01:10 arXiv:2306.11644 논문 확인 (Textbooks Are All You Need: phi-1 1.3B) ← https://arxiv.org/abs/2306.11644
- 01:13 Hugging Face microsoft/phi-1_5 모델 카드 확인 (1.3B, 2048 context, MIT, 2023-09-11, Textbooks Are All You Need II) ← https://huggingface.co/microsoft/phi-1_5
- 01:15 arXiv:2309.05463 논문 확인 (Textbooks Are All You Need II: phi-1.5 technical report) ← https://arxiv.org/abs/2309.05463
- 01:18 Hugging Face microsoft/phi-2 모델 카드 확인 (2.7B, 2048 context, MIT, 2023-12-12) ← https://huggingface.co/microsoft/phi-2
- 01:21 Hugging Face microsoft/Phi-4-mini-instruct 모델 카드 확인 (3.8B, 128K contextWindow, MIT, 2025-02-19) ← https://huggingface.co/microsoft/Phi-4-mini-instruct
- 01:23 Microsoft Azure 공식 Phi 포털 확인 ← https://azure.microsoft.com/en-us/products/phi
- 01:25 arXiv:2503.01743 기술 리포트 확인 (Phi-4-Mini Technical Report: Compact yet Powerful Multimodal Language Models via Mixture-of-LoRAs, Phi-4-mini 및 Phi-4-multimodal 기술 논문) ← https://arxiv.org/abs/2503.01743
- 01:28 Hugging Face microsoft/Phi-4-multimodal-instruct 모델 카드 확인 (5.6B, 128K contextWindow, MIT, 2025-02-19) ← https://huggingface.co/microsoft/phi-4-multimodal-instruct

## 수행한 작업
- [x] `phi-1` 신규 등록 (parameterSize: 1.3B, contextWindow: 2048, license: MIT, paper: arXiv:2306.11644) ← https://huggingface.co/microsoft/phi-1
- [x] `phi-1-5` 신규 등록 (parameterSize: 1.3B, contextWindow: 2048, license: MIT, paper: arXiv:2309.05463) ← https://huggingface.co/microsoft/phi-1_5
- [x] `phi-2` 신규 등록 (parameterSize: 2.7B, contextWindow: 2048, license: MIT) ← https://huggingface.co/microsoft/phi-2
- [x] `phi-4-mini-instruct` 신규 등록 (parameterSize: 3.8B, contextWindow: 128000, license: MIT, paper: arXiv:2503.01743) ← https://huggingface.co/microsoft/Phi-4-mini-instruct
- [x] `phi-4-multimodal-instruct` 메타데이터 보강 (기술 보고서 arXiv:2503.01743 링크 및 HF 링크 추가) ← https://huggingface.co/microsoft/phi-4-multimodal-instruct

## 판단 / 고민
- Microsoft의 Phi 패밀리는 'Textbooks Are All You Need' 패러다임을 통해 초소형 고효율 모델의 새로운 지평을 연 핵심 모델 시리즈임.
- 어제 Phi-3(mini, small, medium) 및 Phi-3.5 MoE를 등록한 데 이어, 그 뿌리가 되는 Phi-1(1.3B 코딩 특화), Phi-1.5(1.3B 상식 추론 특화), Phi-2(2.7B 일반 추론 및 지식)를 모두 수집하여 데이터 완성도를 높임.
- 또한 2025년 2월 공개된 최신 경량 고성능 모델인 `phi-4-mini-instruct`(3.8B, 128K context, 200K 토큰 어휘 사전)를 정식 등록하였으며, 기존에 등록되어 있던 멀티모달 자매 모델 `phi-4-multimodal-instruct`에 공통 기술 보고서(arXiv:2503.01743) 링크를 보강하여 상호 참조가 가능하도록 정리함.
- 모든 등록/수정 데이터는 Hugging Face 공식 모델 카드 및 arXiv 공식 논문 링크를 철저히 교차 검증하여 출처가 불분명한 추정치를 배제함.

## 이슈 제기
- (없음)
