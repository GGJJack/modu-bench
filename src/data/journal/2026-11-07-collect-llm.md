---
date: 2026-11-07
agent: collect-llm
status: completed
summary: "DeepSeek 초기 기초 LLM 라인업(DeepSeek-LLM 7B/67B Base/Chat) 및 MoE 대표작(DeepSeek-V2) 신규 등록, DeepSeek-V3 및 DeepSeek-R1 논문 링크 보강"
---

## Todo
- [x] DeepSeek 기초 및 MoE 모델 사양 및 출처 URL 조사 (DeepSeek-LLM 7B/67B Base/Chat, DeepSeek-V2, DeepSeek-V3, DeepSeek-R1)
- [x] 신규 모델 5종(`deepseek-llm-7b-base`, `deepseek-llm-7b-chat`, `deepseek-llm-67b-base`, `deepseek-llm-67b-chat`, `deepseek-v2`) 등록
- [x] 기존 모델(`deepseek-v3`, `deepseek-r1`) 논문 링크 arXiv 공식 URL로 보강
- [x] 등록 및 수정 데이터 CLI/git diff 검증
- [x] 프로젝트 빌드 검증 및 저널 작성 완료

## 조사 내역
- 01:05 missions/llm.md 및 sources.md의 국가별/주요 LLM 중 중국 주요 모델(DeepSeek) 라인업 점검 ← bun run skills/manage-model/scripts/model.ts list llm | grep deepseek
- 01:08 DeepSeek의 첫 자체 언어 모델 라인업(DeepSeek-LLM 7B/67B) 및 MLA/DeepSeekMoE 아키텍처의 시초인 DeepSeek-V2가 누락되어 있음을 확인
- 01:10 Hugging Face deepseek-ai/deepseek-llm-7b-base 모델 카드 및 사양 확인 (7B, 4096 context, DeepSeek Model License, 2023-11-29) ← https://huggingface.co/deepseek-ai/deepseek-llm-7b-base
- 01:12 Hugging Face deepseek-ai/deepseek-llm-7b-chat 모델 카드 및 사양 확인 (7B, 4096 context, DeepSeek Model License, 2023-11-29) ← https://huggingface.co/deepseek-ai/deepseek-llm-7b-chat
- 01:14 Hugging Face deepseek-ai/deepseek-llm-67b-base 모델 카드 및 사양 확인 (67B, 4096 context, DeepSeek Model License, 2023-11-29) ← https://huggingface.co/deepseek-ai/deepseek-llm-67b-base
- 01:16 Hugging Face deepseek-ai/deepseek-llm-67b-chat 모델 카드 및 사양 확인 (67B, 4096 context, DeepSeek Model License, 2023-11-29) ← https://huggingface.co/deepseek-ai/deepseek-llm-67b-chat
- 01:18 arXiv:2401.02954 논문 확인 (DeepSeek LLM: Scaling Open-Source Language Models with Longtermism) ← https://arxiv.org/abs/2401.02954
- 01:20 Hugging Face deepseek-ai/DeepSeek-V2 모델 카드 및 사양 확인 (236B total / 21B active MoE, 128K context, DeepSeek Model License, 2024-05-06) ← https://huggingface.co/deepseek-ai/DeepSeek-V2
- 01:22 arXiv:2405.04434 논문 확인 (DeepSeek-V2: A Strong, Economical, and Efficient Mixture-of-Experts Language Model) ← https://arxiv.org/abs/2405.04434
- 01:25 arXiv:2412.19437 기술 리포트 확인 (DeepSeek-V3 Technical Report) ← https://arxiv.org/abs/2412.19437
- 01:27 arXiv:2501.12948 논문 확인 (DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning) ← https://arxiv.org/abs/2501.12948

## 수행한 작업
- [x] `deepseek-llm-7b-base` 신규 등록 (parameterSize: 7B, contextWindow: 4096, license: DeepSeek Model License, paper: arXiv:2401.02954) ← https://huggingface.co/deepseek-ai/deepseek-llm-7b-base
- [x] `deepseek-llm-7b-chat` 신규 등록 (parameterSize: 7B, contextWindow: 4096, license: DeepSeek Model License, paper: arXiv:2401.02954) ← https://huggingface.co/deepseek-ai/deepseek-llm-7b-chat
- [x] `deepseek-llm-67b-base` 신규 등록 (parameterSize: 67B, contextWindow: 4096, license: DeepSeek Model License, paper: arXiv:2401.02954) ← https://huggingface.co/deepseek-ai/deepseek-llm-67b-base
- [x] `deepseek-llm-67b-chat` 신규 등록 (parameterSize: 67B, contextWindow: 4096, license: DeepSeek Model License, paper: arXiv:2401.02954) ← https://huggingface.co/deepseek-ai/deepseek-llm-67b-chat
- [x] `deepseek-v2` 신규 등록 (parameterSize: 236B (21B active) MoE, contextWindow: 128000, license: DeepSeek Model License, paper: arXiv:2405.04434) ← https://huggingface.co/deepseek-ai/DeepSeek-V2
- [x] `deepseek-v3` 메타데이터 보강 (공식 기술 보고서 arXiv:2412.19437 링크로 업데이트) ← https://arxiv.org/abs/2412.19437
- [x] `deepseek-r1` 메타데이터 보강 (공식 기술 보고서 arXiv:2501.12948 링크로 업데이트) ← https://arxiv.org/abs/2501.12948

## 판단 / 고민
- DeepSeek는 최근 글로벌 LLM 생태계와 오픈소스 생태계에 큰 영향을 끼친 핵심 프로바이더 중 하나임.
- 기존 DB에는 DeepSeek-V3, R1, Coder V2 계열 및 경량 증류 모델들이 등록되어 있었으나, DeepSeek 발전의 초석이 된 DeepSeek-LLM(7B, 67B Base/Chat) 및 MLA 혁신을 처음 선보인 DeepSeek-V2가 누락되어 있었음.
- 따라서 DeepSeek의 근간이 되는 초기 모델 4종(7B Base/Chat, 67B Base/Chat)과 MoE 아키텍처 대표작인 DeepSeek-V2를 공식 HF 모델 카드 및 arXiv 기술 보고서를 통해 검증하여 신규 등록함.
- 기존 등록되어 있던 DeepSeek-V3와 DeepSeek-R1의 paper 링크가 GitHub 저장소 내 PDF 파일로 되어 있던 점을 영구 보존 및 서지 정보 확인이 가능한 공식 arXiv 아카이브 URL(arXiv:2412.19437, arXiv:2501.12948)로 보강함.
- 모든 등록/수정 데이터는 출처 URL을 명확히 확인하였으며, 비공개 또는 불확실한 가격 등은 추정하지 않고 null을 유지함.

## 이슈 제기
- (없음)
