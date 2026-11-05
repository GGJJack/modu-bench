---
date: 2026-11-05
agent: collect-llm
status: completed
summary: "Microsoft의 대표 소형 고성능 모델 라인업(Phi-3-mini, Phi-3-small, Phi-3-medium, Phi-3.5-MoE) 신규 등록 및 phi-4 메타데이터 보강"
---

## Todo
- [x] Microsoft 공식 블로그, Hugging Face 모델 카드, 기술 논문을 통해 Phi 모델 사양 조사
- [x] `phi-3-mini-4k-instruct`, `phi-3-small-8k-instruct`, `phi-3-medium-4k-instruct`, `phi-3.5-moe-instruct` 4종 신규 등록
- [x] 기존 `phi-4` 모델의 논문 및 HF 링크 보강
- [x] 등록된 모델 데이터 및 git diff 검증
- [x] 프로젝트 빌드 검증 및 저널 status: completed 갱신

## 조사 내역
- 01:05 Phi 시리즈 등록 현황 조사: Phi-4와 멀티모달 일부만 존재하고 핵심 언어 모델 라인업(Phi-3, Phi-3.5) 누락 확인 ← bun run skills/manage-model/scripts/model.ts list llm
- 01:08 Phi-3 발표 블로그 확인 (Phi-3-mini 3.8B 파라미터, 4K/128K 지원, MIT 라이선스, 2024-04-23 발표) ← https://azure.microsoft.com/en-us/blog/introducing-phi-3-redefining-whats-possible-with-slms/
- 01:12 Hugging Face microsoft/Phi-3-mini-4k-instruct 모델 카드 확인 (3.8B 파라미터, 4K contextWindow, MIT, arXiv:2404.14219) ← https://huggingface.co/microsoft/Phi-3-mini-4k-instruct
- 01:15 Phi-3 Small 및 Medium 출시 블로그 확인 (Phi-3-small 7B 8K/128K, Phi-3-medium 14B 4K/128K, 2024-05-21 발표) ← https://azure.microsoft.com/en-us/blog/new-models-added-to-the-phi-3-family-available-on-microsoft-azure/
- 01:18 Hugging Face microsoft/Phi-3-small-8k-instruct 모델 카드 확인 (7B 파라미터, 8K contextWindow, MIT) ← https://huggingface.co/microsoft/Phi-3-small-8k-instruct
- 01:21 Hugging Face microsoft/Phi-3-medium-4k-instruct 모델 카드 확인 (14B 파라미터, 4K contextWindow, MIT) ← https://huggingface.co/microsoft/Phi-3-medium-4k-instruct
- 01:25 Hugging Face microsoft/Phi-3.5-MoE-instruct 모델 카드 확인 (16x3.8B 총 42B/활성 6.6B, 128K contextWindow, MIT, 2024-08 출시, arXiv:2409.12136 / arXiv:2404.14219) ← https://huggingface.co/microsoft/Phi-3.5-MoE-instruct
- 01:28 Microsoft Foundry 블로그 Phi-3.5-MoE 발표 확인 (Azure AI Studio Serverless API input $0.13/M, output $0.52/M) ← https://techcommunity.microsoft.com/t5/ai-azure-ai-services-blog/announcing-the-availability-of-phi-3-5-moe-in-azure-ai-studio/ba-p/4256278
- 01:31 Hugging Face microsoft/phi-4 모델 카드 확인 (14B, 16K contextWindow, MIT, 2024-12-12, arXiv:2412.08905) ← https://huggingface.co/microsoft/phi-4

## 수행한 작업
- [x] `phi-3-mini-4k-instruct` 신규 등록 (parameterSize: 3.8B, contextWindow: 4096, license: MIT, paper: arXiv:2404.14219) ← https://azure.microsoft.com/en-us/blog/introducing-phi-3-redefining-whats-possible-with-slms/
- [x] `phi-3-small-8k-instruct` 신규 등록 (parameterSize: 7B, contextWindow: 8192, license: MIT, paper: arXiv:2404.14219) ← https://azure.microsoft.com/en-us/blog/new-models-added-to-the-phi-3-family-available-on-microsoft-azure/
- [x] `phi-3-medium-4k-instruct` 신규 등록 (parameterSize: 14B, contextWindow: 4096, license: MIT, paper: arXiv:2404.14219) ← https://azure.microsoft.com/en-us/blog/new-models-added-to-the-phi-3-family-available-on-microsoft-azure/
- [x] `phi-3.5-moe-instruct` 신규 등록 (parameterSize: 42B, contextWindow: 128000, pricing: $0.13/$0.52, license: MIT, paper: arXiv:2409.12136) ← https://techcommunity.microsoft.com/t5/ai-azure-ai-services-blog/announcing-the-availability-of-phi-3-5-moe-in-azure-ai-studio/ba-p/4256278
- [x] `phi-4` 메타데이터 보강 (Hugging Face 공식 모델 카드 및 아카이브 논문 링크 보강) ← https://huggingface.co/microsoft/phi-4

## 판단 / 고민
- Microsoft의 Phi 시리즈는 텍스트북 수준의 고품질 합성 데이터(Textbooks Are All You Need)와 SLM 혁신을 주도한 핵심 모델군이나, 기존 DB에는 후속 모델인 Phi-4 및 멀티모달 모델만 등록되어 있고 기반이 되는 Phi-3 계열 및 Phi-3.5 MoE가 누락되어 있었음.
- Phi-3 계열은 3.8B(mini), 7B(small), 14B(medium) 3가지 크기로 배포되었으며, 각각의 4K/8K 기본 지시 튜닝 버전을 공식 블로그 및 Hugging Face 모델 카드와 교차 검증하여 등록함.
- 2024년 8월 공개된 Phi-3.5 MoE(GRIN MoE 아키텍처, 16개 전문가 블록 중 2개 활성화, 총 42B/활성 6.6B) 모델은 Azure AI Studio의 공식 서버리스 API 가격(입력 1K 토큰당 $0.00013, 출력 1K 토큰당 $0.00052 → 1M 토큰당 $0.13/$0.52)을 확인하여 pricing 정보까지 완전하게 기입함.
- 기존 등록된 `phi-4` 모델의 경우 공식 Azure 블로그 링크만 존재하고 기술 논문(arXiv:2412.08905)과 Hugging Face 링크가 누락되어 있어 온전하게 보강함.

## 이슈 제기
- (없음)
