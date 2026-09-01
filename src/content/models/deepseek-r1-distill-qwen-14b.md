---
modelId: deepseek-r1-distill-qwen-14b
domain: llm
status: published
updated: 2026-09-01
sources:
  - https://github.com/deepseek-ai/DeepSeek-R1
  - https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-14B
  - https://arxiv.org/abs/2501.12948
features:
  toolUse: true
  vision: false
  extendedThinking: true
highlights:
  - "DeepSeek-R1의 고성능 추론 사고 사슬을 Qwen2.5-14B 베이스 모델에 지도 미세조정(SFT)하여 증류"
  - "AIME 2024 pass@1 69.7%, MATH-500 93.9%, GPQA Diamond 59.1% 등 뛰어난 수학·이공계 추론 능력 기록"
  - "상업적 이용 및 자유로운 연구·튜닝을 허용하는 MIT 라이선스 적용"
relatedOrganization: deepseek
---

# DeepSeek-R1-Distill-Qwen-14B 소개

## 개요
DeepSeek-R1-Distill-Qwen-14B는 DeepSeek(深度求索)가 2025년 1월 공개한 추론 전문 언어 모델 DeepSeek-R1의 사고 사슬(Chain-of-Thought) 데이터를 140억 파라미터 규모의 Qwen2.5-14B 베이스 모델에 증류(Distillation)하여 학습시킨 미세조정 모델입니다 ([DeepSeek-R1 GitHub](https://github.com/deepseek-ai/DeepSeek-R1), [Hugging Face Repository](https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-14B)). 플래그십 671B MoE 모델인 DeepSeek-R1이 생성한 80만 건의 정제된 수식 및 코딩 추론 파이프라인 데이터셋을 지도 학습(SFT) 소스로 활용하여, 중형급 오픈웨이트 모델에서도 탁월한 단계를 거친 문제 해결 능력 및 자가 검증 속성을 제공하도록 구현되었습니다 ([DeepSeek-R1 Paper](https://arxiv.org/abs/2501.12948)).

## 기술 특징 및 성능
DeepSeek-R1-Distill-Qwen-14B는 아키텍처 베이스로 Qwen2.5-14B를 체용하였으며, 128k 토큰 컨텍스트 창 및 BF16 정밀도를 표준으로 제공합니다 ([Hugging Face Repository](https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-14B)). benchmarks 평가 결과에 따르면, AIME 2024 pass@1 69.7%, MATH-500 pass@1 93.9%, GPQA Diamond 59.1%, LiveCodeBench 53.1%, Codeforces rating 1481점을 달성하여 기존 14B 수준 dense 모델이나 프론티어 proprietary 모델(GPT-4o 0513, Claude-3.5-Sonnet-1022 등)의 복잡 추론 능력을 능가하거나 비등한 성과를 증명했습니다 ([DeepSeek-R1 Paper](https://arxiv.org/abs/2501.12948)).

## 사용 방법 및 권장 사항
이 모델은 Hugging Face Transformers, vLLM, SGLang, Ollama 등의 오픈소스 서빙 엔진 및 추론 백엔드 환경에서 유연하게 배포가 가능합니다 ([Hugging Face Repository](https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-14B)). 공식 배포팀은 모델 응답 시 무한 반복 현상이나 논리적 불일치를 예방하기 위해 추론 temperature를 0.5~0.7(권장 0.6) 범위로 유지하고 system prompt 대신 user prompt 내에 직접 구체적인 명령 및 지시를 기재할 것을 제안합니다 ([Hugging Face Repository](https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Qwen-14B)). 본 모델 및 세부 가중치는 상업적 이용과 무제한 미세조정을 커버하는 MIT 라이선스 하에 무료 공개되어 있습니다 ([DeepSeek-R1 GitHub](https://github.com/deepseek-ai/DeepSeek-R1)).

## 한계
14B 파라미터 경량 모델로서 전반적인 추론 가성비가 매우 탁월하지만, 671B 원본 DeepSeek-R1이나 70B 증류 모델 대비 extreme 수준의 고난도 알고리즘 문제나 긴 문맥의 수식 증명 시 추론 심도가 단축되거나 사고 오류가 발생할 가능성이 존재합니다 ([DeepSeek-R1 Paper](https://arxiv.org/abs/2501.12948)). 또한 본 모델은 텍스트 중심 사고 추론에 특화되어 있으므로 별도의 멀티모달(비전·음성) 입력을 처리할 수 없다는 제약이 있습니다.
