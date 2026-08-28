---
modelId: deepseek-r1-distill-qwen-7b
domain: llm
status: published
updated: 2026-08-28
sources:
  - https://github.com/deepseek-ai/DeepSeek-R1
  - https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-7B
  - https://arxiv.org/abs/2501.12948
features:
  toolUse: true
  vision: false
  extendedThinking: true
highlights:
  - "DeepSeek-R1의 정교한 Reasoning 능력을 Qwen2.5-Math-7B 아키텍처에 증류(Distillation)한 모델"
  - "7B 파라미터 경량 크기로 로컬 에지 환경에서 우수한 고난도 수학 및 코딩 추론 성능 발휘"
  - "상용 이용 및 자유로운 튜닝을 지원하는 MIT 라이선스 적용"
relatedOrganization: deepseek
---

# DeepSeek-R1-Distill-Qwen-7B 소개

## 개요
DeepSeek-R1-Distill-Qwen-7B는 DeepSeek(深度求索)가 2025년 1월 발표한 플래그십 추론 모델 DeepSeek-R1의 고난도 사고 능력을 경량 아키텍처인 Qwen2.5-Math-7B에 증류(Distillation)하여 구축한 오픈소스 추론 언어 모델입니다 ([DeepSeek-R1 GitHub](https://github.com/deepseek-ai/DeepSeek-R1), [Hugging Face Repository](https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-7B)). 6710억 파라미터 기반의 초대형 R1 모델이 생성한 정제된 사고 사슬(Chain-of-Thought) 데이터를 7B 규모 모델에 지도 미세조정(SFT) 함으로써, 소형 오픈웨이트 모델에서도 강력한 자가 검증 및 단계별 추론 능력을 확보하도록 설계되었습니다 ([DeepSeek-R1 Paper](https://arxiv.org/abs/2501.12948)).

## 기술 특징 및 성능
DeepSeek-R1-Distill-Qwen-7B는 Qwen2.5-Math-7B를 베이스 모델로 삼아 DeepSeek-R1이 도출한 고품질 추론 샘플(약 80만 건)을 학습에 활용하였습니다 ([DeepSeek-R1 GitHub](https://github.com/deepseek-ai/DeepSeek-R1)). AIME 2024 pass@1 지표에서 55.5%, MATH-500 pass@1 지표에서 92.8%를 기록하여 기존의 일반 소형 dense 모델 및 1차 강화학습 전용 모델(DeepSeek-R1-Zero)의 추론 능력을 아득히 상회하는 뛰어난 성과를 보여줍니다 ([Hugging Face Repository](https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-7B)).

## 사용 방법 및 권장 사항
이 모델은 vLLM이나 SGLang, Ollama 등의 서빙 프레임워크를 통해 용이하게 로컬 서빙 및 API 호환 인프라로 배포할 수 있습니다 ([Hugging Face Repository](https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-7B)). 공식 문서에 따르면 반복 출력 및 응답 불일치를 방지하기 위해 temperature 값을 0.5~0.7(권장 0.6) 범위로 설정하고, 별도의 system prompt 없이 user prompt 내에 직접 지시사항을 포함할 것을 권장합니다 ([Hugging Face Repository](https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-7B)). 상업적 이용 및 개조가 보장되는 MIT 라이선스로 배포됩니다 ([DeepSeek-R1 GitHub](https://github.com/deepseek-ai/DeepSeek-R1)).

## 한계
7B 크기의 경량 파라미터 특성상 원본 DeepSeek-R1(671B)이나 32B/70B 증류 버전 대비 극도로 복잡하고 장문인 수학 및 코딩 문제 해결 시 사고 사슬이 단순화되거나 고차원 추론이 미흡할 수 있습니다 ([DeepSeek-R1 Paper](https://arxiv.org/abs/2501.12948)). 또한 텍스트 중심의 추론 전용 모델이므로 비전(Vision)이나 오디오 등 멀티모달 입력 처리는 지원하지 않습니다.
