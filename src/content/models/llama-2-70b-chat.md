---
modelId: llama-2-70b-chat
domain: llm
status: published
updated: 2026-11-10
sources:
  - https://huggingface.co/meta-llama/Llama-2-70b-chat-hf
  - https://arxiv.org/abs/2307.09288
  - https://ai.meta.com/resources/models-and-libraries/llama-downloads/
  - https://ai.meta.com/llama/use-policy
features:
  toolUse: false
  vision: false
highlights:
  - "Meta가 2023년 7월 공개한 70B 규모 오픈 가중치 대화형 플래그십 파운데이션 모델"
  - "2조 토큰의 공개 데이터로 사전 훈련 및 70B 모델 전용 GQA(Grouped-Query Attention) 적용"
  - "SFT 및 RLHF(기혼 피드백 반영 및 안전 보장)를 정밀 적용하여 상용 폐쇄형 모델에 준하는 대화 정렬 달성"
relatedOrganization: meta
---

# Llama 2 70B Chat 소개

## 개요
Llama 2 70B Chat(Llama-2-70b-chat-hf)은 메타(Meta)가 2023년 7월 18일 공식 출시한 오픈 가중치 대규모 언어 모델 패밀리의 최상위 대화형 모델입니다 ([Meta Llama 2 Downloads](https://ai.meta.com/resources/models-and-libraries/llama-downloads/)). 사전 훈련된 700억(70B) 매개변수의 오토레그레시브 트랜스포머에 지도 미세 조정(SFT)과 인간 피드백 기반 강화학습(RLHF)을 심층 적용하여 어시스턴트 형태의 대화 작업에 최적화되었습니다 ([HuggingFace Llama-2-70b-chat-hf](https://huggingface.co/meta-llama/Llama-2-70b-chat-hf)). 공개 당시 인간 평가에서 유용성(Helpfulness)과 안전성(Safety) 양면 모두 상용 폐쇄형 초기 모델(ChatGPT, PaLM)에 필적하는 완성도를 보여주며, 글로벌 오픈소스 AI 생태계의 부흥을 이끈 역사적인 이정표 모델입니다 ([Llama 2: Open Foundation and Fine-Tuned Chat Models](https://arxiv.org/abs/2307.09288)).

## 기술 특징
Llama 2 70B Chat은 최적화된 오토레그레시브 트랜스포머 아키텍처를 기반으로 하며, 사전 훈련에는 공개적으로 접근 가능한 온라인 데이터 2조(2.0 Trillion) 토큰이 투입되었습니다 ([Llama 2 Paper](https://arxiv.org/abs/2307.09288)). Llama 1 대비 40% 늘어난 데이터를 학습했고, 컨텍스트 길이는 4,096(4K) 토큰으로 확장되었습니다. 특히 Llama 2 패밀리 중 70B 모델에 최초로 GQA(Grouped-Query Attention) 메커니즘을 적용하여 추론 시 키-값(KV) 캐시 메모리 사용량을 대폭 절감하고 배치 처리 처리량을 비약적으로 향상시켰습니다 ([HuggingFace Llama-2-70b-chat-hf](https://huggingface.co/meta-llama/Llama-2-70b-chat-hf)). 대화 정렬을 위해 100만 건 이상의 고품질 인간 주석 기반 데이터와 거부 샘플링(Rejection Sampling), PPO(Proximal Policy Optimization) 결합 RLHF 파이프라인이 사용되었습니다.

## 사용 사례
Llama 2 70B Chat은 연구 기관 및 기업 환경에서 독자적인 대화형 AI 어시스턴트, 온프레미스 사내 챗봇, 지능형 문서 질의응답 및 서머리 시스템 구축의 표준 플랫폼으로 활용됩니다 ([Meta Llama Downloads](https://ai.meta.com/resources/models-and-libraries/llama-downloads/)). Llama 2 Community License를 통해 월간 활성 사용자 7억 명 미만의 기업과 연구자들에게 상업적 이용 및 파생 모델 개발이 허용되었으며 ([HuggingFace Llama-2-70b-chat-hf](https://huggingface.co/meta-llama/Llama-2-70b-chat-hf)), 다운스트림 파인튜닝, 지식 증류(Distillation) 및 다양한 안전성 벤치마크 평가 연구의 기준(Baseline) 모델로 널리 채택되었습니다.

## 한계
이 모델은 70B 규모의 거대한 가중치를 지니고 있어 단일 소비자용 GPU에서 실행할 수 없으며, 다중 GPU 클러스터 또는 4-bit/8-bit 양자화 환경(AWQ, GPTQ, llama.cpp 등)이 필수적으로 요구됩니다 ([HuggingFace Llama-2-70b-chat-hf](https://huggingface.co/meta-llama/Llama-2-70b-chat-hf)). 컨텍스트 윈도우가 4,096 토큰으로 제한되어 최신 8K~128K 모델에 비해 장문 문서 분석 시 컨텍스트 초과 제약이 발생합니다. 또한 사전 훈련 및 안전성 정렬이 영어 위주로 수행되어 한국어를 비롯한 다국어 작업에서는 문맥 이해도나 생성 품질의 한계가 존재하며, 텍스트 전용 모델로 멀티모달(비전, 오디오) 입출력 및 공식 함수 호출(Function Calling) 기능은 기본 탑재되어 있지 않습니다 ([Meta Llama Use Policy](https://ai.meta.com/llama/use-policy)).
