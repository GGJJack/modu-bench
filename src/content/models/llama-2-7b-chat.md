---
modelId: llama-2-7b-chat
domain: llm
status: published
updated: 2026-11-10
sources:
  - https://huggingface.co/meta-llama/Llama-2-7b-chat-hf
  - https://arxiv.org/abs/2307.09288
  - https://ai.meta.com/resources/models-and-libraries/llama-downloads/
  - https://ai.meta.com/llama/use-policy
features:
  toolUse: false
  vision: false
highlights:
  - "Meta가 2023년 7월 공개한 경량 7B 규모 오픈 가중치 대화형 파운데이션 모델"
  - "2조 토큰의 방대한 데이터로 사전 훈련 및 4,096 토큰 컨텍스트 길이 지원"
  - "단일 소비자용 GPU 및 에지 디바이스에서 구동 가능한 높은 효율성과 활발한 오픈 파생 생태계 형성"
relatedOrganization: meta
---

# Llama 2 7B Chat 소개

## 개요
Llama 2 7B Chat(Llama-2-7b-chat-hf)은 메타(Meta)가 2023년 7월 18일 공개한 오픈 가중치 대규모 언어 모델 제품군의 경량 대화형 모델입니다 ([Meta Llama 2 Downloads](https://ai.meta.com/resources/models-and-libraries/llama-downloads/)). 70억(7B) 매개변수 기반 오토레그레시브 트랜스포머에 지도 미세 조정(SFT)과 인간 피드백 기반 강화학습(RLHF)을 정밀하게 적용하여 어시스턴트 대화 및 질의응답 시나리오에 특화되었습니다 ([HuggingFace Llama-2-7b-chat-hf](https://huggingface.co/meta-llama/Llama-2-7b-chat-hf)). 우수한 안전성 지표와 컴팩트한 크기 덕분에 단일 소비자용 GPU나 에지 환경에서 손쉽게 서빙 및 파인튜닝이 가능하여 오픈소스 생성형 AI 애플리케이션의 핵심 기반으로 널리 사용되었습니다 ([Llama 2: Open Foundation and Fine-Tuned Chat Models](https://arxiv.org/abs/2307.09288)).

## 기술 특징
Llama 2 7B Chat은 최적화된 오토레그레시브 트랜스포머 아키텍처를 기반으로 설계되었습니다 ([Llama 2 Paper](https://arxiv.org/abs/2307.09288)). 사전 훈련에는 공개된 온라인 텍스트 2조(2.0 Trillion) 토큰이 사용되었으며, 1세대 Llama 7B 대비 컨텍스트 길이가 2배로 확장된 4,096(4K) 토큰을 지원합니다. 대화 특화를 위해 `[INST]` 및 `<<SYS>>` 구조화된 프롬프트 템플릿 규격을 채택하였으며, 100만 건 이상의 인간 선호도 주석 데이터와 거부 샘플링(Rejection Sampling) 및 PPO를 결합한 RLHF를 통해 유용성과 무해성(Safety) 간의 균형을 확보했습니다 ([HuggingFace Llama-2-7b-chat-hf](https://huggingface.co/meta-llama/Llama-2-7b-chat-hf)). 70B 모델과 달리 표준 멀티헤드 어텐션(MHA)을 사용하면서도 파라미터가 7B 수준으로 작아 빠른 인퍼런스 속도를 제공합니다.

## 사용 사례
Llama 2 7B Chat은 온디바이스 AI, 로컬 개인용 챗봇, 사내 프로토타이핑, 특정 도메인 전용 LoRA/QLoRA 경량 미세 조정 연구에 최적의 출발점으로 사용됩니다 ([Meta Llama Downloads](https://ai.meta.com/resources/models-and-libraries/llama-downloads/)). Hugging Face, vLLM, llama.cpp, Ollama 등 거의 모든 오픈소스 서빙 프레임워크와 즉시 연동되며 ([HuggingFace Llama-2-7b-chat-hf](https://huggingface.co/meta-llama/Llama-2-7b-chat-hf)), Llama 2 커뮤니티 라이선스 하에 상업적 서비스 배포 및 학술 연구가 자유롭게 허용되어 수많은 파생 모델(Vicuna, Alpaca 파생체 등)의 토대가 되었습니다.

## 한계
이 모델은 7B 규모의 경량 매개변수 한계로 인해 70B 이상의 대형 모델에 비해 심층적인 수학적 추론, 복잡한 다단계 논리 문제 해결 및 긴 코드 생성에서 환각(Hallucination) 발생 빈도가 상대적으로 높습니다 ([HuggingFace Llama-2-7b-chat-hf](https://huggingface.co/meta-llama/Llama-2-7b-chat-hf)). 컨텍스트 길이가 4,096 토큰으로 제한되어 초대용량 문서를 처리하기 위해서는 청킹(Chunking)이나 별도의 RAG 시스템 결합이 필요합니다. 또한 주 훈련 데이터셋이 영어에 집중되어 있어 한국어 및 비영어권 언어 처리 능력이 제한적이며, 순수 텍스트 전용 모델로서 멀티모달 입력 및 네이티브 함수/도구 호출 기능은 제공하지 않습니다 ([Meta Llama Use Policy](https://ai.meta.com/llama/use-policy)).
