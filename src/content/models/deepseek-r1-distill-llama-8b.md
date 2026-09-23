---
modelId: deepseek-r1-distill-llama-8b
domain: llm
status: published
updated: 2026-09-23
sources:
  - https://github.com/deepseek-ai/DeepSeek-R1
  - https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Llama-8B
  - https://arxiv.org/abs/2501.12948
features:
  toolUse: true
  extendedThinking: true
highlights:
  - "Meta Llama-3.1-8B 아키텍처 기반으로 DeepSeek-R1의 고품질 추론 데이터(CoT)를 증류해 학습한 경량 추론 모델"
  - "128k 토큰 컨텍스트 윈도우 및 <think> 태그 기반 자생적 사고 과정 가시화 지원"
  - "AIME, MATH-500 및 Codeforces 벤치마크에서 동급 메이저 SLM 대비 우수한 수학·논리 추론 성능 발휘"
---

# DeepSeek-R1-Distill-Llama-8B 소개

## 개요
DeepSeek-R1-Distill-Llama-8B는 DeepSeek 팀이 2025년 1월 플래그십 추론 모델인 DeepSeek-R1과 함께 공개한 경량 지식 증류(Knowledge Distillation) 추론 언어 모델입니다 ([DeepSeek-R1 GitHub](https://github.com/deepseek-ai/DeepSeek-R1)). Meta의 오픈 가중치 모델인 Llama-3.1-8B 아키텍처를 베이스로 삼고, 671B 규모의 거대 모델 DeepSeek-R1이 생성한 80만 개 이상의 고품질 사고 사슬(Chain-of-Thought, CoT) 파인튜닝 데이터를 이식하여 완성되었습니다 ([DeepSeek-R1 Tech Report](https://arxiv.org/abs/2501.12948)). 이를 통해 소형 모델 환경에서도 복잡한 수학 및 프로그래밍 문제 해결 능력을 비약적으로 끌어올렸습니다.

## 기술 특징
이 모델은 128,000(128k) 토큰의 넓은 컨텍스트 윈도우를 지원하며, 출력 시 `<think>` 태그 내에 문제 해결에 필요한 논리적 탐색 및 자가 검증 사고 과정을 명시적으로 기록합니다 ([Hugging Face DeepSeek-R1-Distill-Llama-8B](https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Llama-8B)). 강화 학습 기반 거대 추론 모델의 추론 패턴을 8B 경량 파라미터로 효과적으로 응축하였으며, AIME 2024(50.4%), MATH-500(89.1%), LiveCodeBench 등 주요 고난도 학술 및 추론 평가에서 동일 파라미터대 일반 지시 이행 모델들을 크게 능가하는 성과를 도출했습니다.

## 사용 사례 및 한계
DeepSeek-R1-Distill-Llama-8B는 엣지 디바이스, 고성능 개발용 워크스테이션, 온프레미스 서버 등 제한된 GPU 자원 환경에서 로컬 추론 에이전트를 구축하려는 연구자 및 개발자에게 이상적입니다 ([DeepSeek-R1 GitHub](https://github.com/deepseek-ai/DeepSeek-R1)). Llama-3.1 커뮤니티 라이선스 조건을 준수하며 자유로운 연구 및 상업적 애플리케이션 개발이 가능합니다. 다만 원본 671B DeepSeek-R1 모델에 비해 전체 지식의 범주와 다단계 복잡 문제에 대한 사고 유연성은 제한적이므로, 극도로 미묘하거나 거대한 맥락 이해가 필요한 작업에서는 고성능 프록시 모델과의 상호보완적 활용이 추천됩니다.
