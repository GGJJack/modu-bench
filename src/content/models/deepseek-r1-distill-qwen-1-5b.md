---
modelId: deepseek-r1-distill-qwen-1-5b
domain: llm
status: published
updated: 2026-09-19
sources:
  - https://github.com/deepseek-ai/DeepSeek-R1
  - https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-1.5B
  - https://arxiv.org/abs/2501.12948
features:
  toolUse: true
  vision: false
  extendedThinking: true
highlights:
  - "DeepSeek-R1의 추론 능력을 Qwen2.5-Math-1.5B 기반 경량 아키텍처에 지식 증류(Distillation)한 모델"
  - "1.5B 소형 파라미터로 디바이스 온디바이스 및 모바일 환경에서 효율적인 사고 사슬(CoT) 추론 수행"
  - "상업적 활용 및 자유로운 미세조정이 가능한 MIT 라이선스 제공"
---

# DeepSeek-R1-Distill-Qwen-1.5B 소개

## 개요
DeepSeek-R1-Distill-Qwen-1.5B는 DeepSeek가 2025년 1월 공개한 초대형 reasoning 모델 DeepSeek-R1의 사고 체계(Chain-of-Thought)를 초경량 아키텍처인 Qwen2.5-Math-1.5B 모델에 증류(Distillation)하여 학습시킨 오픈소스 추론 언어 모델입니다 ([DeepSeek-R1 GitHub](https://github.com/deepseek-ai/DeepSeek-R1), [Hugging Face Repository](https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-1.5B)). 671B 파라미터 기반의 원본 DeepSeek-R1 모델이 도출한 80만 건의 정교한 추론 샘플을 활용하여 지도 미세조정(SFT)을 수행함으로써 소형 온디바이스 파라미터 규모에서도 강력한 자가 검증 및 수학/논리 추론 능력을 구현하도록 제작되었습니다 ([DeepSeek-R1 Paper](https://arxiv.org/abs/2501.12948)).

## 기술 특징 및 성능
DeepSeek-R1-Distill-Qwen-1.5B는 Qwen2.5-Math-1.5B를 기본 아키텍처로 사용하며, 소형 파라미터 한계를 극복하기 위해 DeepSeek-R1의 고품질 사고 사슬 데이터를 이식받았습니다 ([DeepSeek-R1 GitHub](https://github.com/deepseek-ai/DeepSeek-R1)). 주요 벤치마크 평가에서 AIME 2024 pass@1 지표 28.9%, MATH-500 pass@1 지표 83.9%를 달성하며, 동급 규모의 베이크 아키텍처 및 일반 dense 모델들을 압도하는 뛰어난 논리적 문제 해결력을 증명하였습니다 ([Hugging Face Repository](https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-1.5B)).

## 사용 방법 및 권장 사항
이 모델은 vLLM, SGLang, Ollama, LM Studio 등 다양한 런타임 및 경량 서빙 프레임워크와 호환되어 에지 디바이스나 개인용 PC 환경에서도 빠른 추론 속도로 동작합니다 ([Hugging Face Repository](https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-1.5B)). 추론 출력 시 반복 생성 및 루프 형성을 방지하기 위해 temperature 파라미터를 0.5~0.7(권장 0.6) 수준으로 지정하고, 별도의 system prompt 없이 user prompt 내에 요청 사항을 직접 작성하는 방식이 권장됩니다 ([Hugging Face Repository](https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-1.5B)). 오픈소스 생태계 발전을 위해 MIT 라이선스로 자유롭게 배포되고 있습니다 ([DeepSeek-R1 GitHub](https://github.com/deepseek-ai/DeepSeek-R1)).

## 한계
1.5B 규모의 가벼운 모델 파라미터 특성상 극도로 다단계 계산이 요구되는 복잡한 대학 수준 수학 및 대규모 시스템 코딩 문제에서는 사고 사슬 생성이 중단되거나 중간 논리적 오류가 발생할 가능성이 존재합니다 ([DeepSeek-R1 Paper](https://arxiv.org/abs/2501.12948)). 더불어 본 모델은 텍스트 전용 언어 모델로 비전(Vision)이나 음성 등의 멀티모달 입력 처리는 지원하지 않습니다.
