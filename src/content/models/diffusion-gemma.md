---
modelId: diffusion-gemma
domain: llm
status: published
updated: 2026-06-11
sources:
  - https://blog.google/innovation-and-ai/technology/developers-tools/diffusion-gemma-faster-text-generation/
  - https://developers.googleblog.com/en/diffusiongemma-the-developer-guide
  - https://huggingface.co/google/diffusiongemma-26B-A4B-it
features:
  fineTuning: true
highlights:
  - "텍스트 확산(Text Diffusion) 기술을 활용한 비순차적 텍스트 생성"
  - "전용 GPU 환경에서 기존 자동회귀 모델 대비 최대 4배 빠른 추론"
  - "양방향 어텐션(Bi-directional attention)을 통한 문맥 전체 이해"
relatedOrganization: google
---

# DiffusionGemma 소개

## 개요
DiffusionGemma는 구글이 2026년 6월 10일에 발표한 실험적인 오픈 모델로, 텍스트 확산(Text Diffusion)이라는 혁신적인 접근 방식을 통해 텍스트 생성 속도를 획기적으로 개선했습니다. 기존의 거대 언어 모델(LLM)들이 단어를 하나씩 순차적으로 생성하는 자동회귀(Autoregressive) 방식인 것과 달리, DiffusionGemma는 텍스트 블록 전체를 동시에 생성하고 다듬어 나갑니다. 이 모델은 특히 속도가 중요한 상호작용형 로컬 워크플로우를 위해 설계되었으며, Apache 2.0 라이선스로 제공됩니다.

## 기술 특징
DiffusionGemma의 핵심은 26B 파라미터 규모의 Mixture of Experts(MoE) 구조(3.8B 활성 파라미터)와 특수하게 설계된 확산 헤드(Diffusion head)의 결합입니다. 이미지 생성 AI가 무작위 노이즈에서 점진적으로 그림을 그려내는 것과 유사하게, 이 모델은 캔버스 위의 무작위 토큰들을 여러 번의 패스를 거쳐 고품질의 텍스트로 수렴시킵니다. 이러한 비순차적 생성 방식은 양방향 어텐션을 가능하게 하여, 모델이 텍스트 블록 전체의 문맥을 동시에 파악하고 스스로 수정(Self-correction)할 수 있게 합니다. 그 결과 전용 GPU(NVIDIA H100, RTX 5090 등) 환경에서 기존 모델 대비 최대 4배 빠른 토큰 생성 속도를 달성했습니다.

## 사용 사례
이 모델은 로컬 환경에서의 인라인 편집(In-line editing), 실시간 코드 보완, 수학 그래프 생성 등 비순차적인 텍스트 구조가 중요한 작업에 강점을 보입니다. 양방향 어텐션 덕분에 뒤에 올 내용을 고려해야 하는 스도쿠(Sudoku) 풀이와 같은 작업에서도 뛰어난 성능을 발휘합니다. 또한 지연 시간이 극도로 낮아야 하는 실시간 대화형 애플리케이션이나 빠른 반복 실험이 필요한 연구 분야에서 유용하게 사용될 수 있습니다. 현재 vLLM, MLX, Hugging Face Transformers 등 주요 프레임워크를 통해 활용 가능합니다.

## 한계
DiffusionGemma는 속도와 병렬 생성에 최적화된 실험적 모델이므로, 전반적인 출력 품질은 표준 Gemma 4 자동회귀 모델에 비해 다소 낮을 수 있습니다. 따라서 높은 지능과 정밀한 답변이 요구되는 프로덕션 환경에서는 표준 Gemma 4 모델을 사용하는 것이 권장됩니다. 또한 확산 방식의 속도 이점은 낮은 동시성(Low-concurrency)의 로컬 추론 환경에서 가장 크게 나타나며, 수천 개의 요청을 한꺼번에 처리하는 클라우드 환경에서는 효율성이 상대적으로 떨어질 수 있습니다.
