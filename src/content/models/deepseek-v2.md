---
modelId: deepseek-v2
domain: llm
status: published
updated: 2026-11-07
sources:
  - https://github.com/deepseek-ai/DeepSeek-V2
  - https://arxiv.org/abs/2405.04434
  - https://huggingface.co/deepseek-ai/DeepSeek-V2
features:
  toolUse: true
  vision: false
highlights:
  - "총 236B 파라미터 중 토큰당 21B 활성화되는 혁신적 MoE 아키텍처"
  - "Multi-head Latent Attention (MLA) 도입으로 KV 캐시 메모리 93.3% 절감"
  - "DeepSeek 67B 대비 학습 비용 42.5% 절감 및 생성 처리량 최대 5.76배 향상"
  - "Needle In A Haystack (NIAH) 전 구간에서 우수한 성능을 검증한 128K 컨텍스트 지원"
---

# DeepSeek-V2 소개

## 개요
DeepSeek-V2는 DeepSeek(深度求索)가 2024년 5월에 발표한 혁신적인 Mixture-of-Experts (MoE) 오픈소스 대형 언어 모델입니다. 총 236B개의 파라미터를 갖추고 있으면서도 추론 시에는 토큰당 21B개의 파라미터만 활성화하여 경제적인 학습 비용과 압도적인 추론 효율성을 동시에 달성했습니다. 고품질 다국어 코퍼스 8.1조(8.1T) 토큰으로 사전 학습되었으며, 이후 지도 미세 조정(SFT)과 강화학습(RL)을 거쳐 뛰어난 대화 및 추론 성능을 확보했습니다.

이전 세대 단일 밀집(Dense) 모델인 DeepSeek 67B와 비교해 성능을 대폭 끌어올림과 동시에 학습 비용을 42.5% 절감했고, 최대 생성 처리량을 5.76배까지 끌어올려 대규모 언어 모델의 가성비 혁신을 이끌어냈습니다.

## 기술 특징
DeepSeek-V2의 기술적 핵심은 **Multi-head Latent Attention (MLA)** 과 **DeepSeekMoE** 아키텍처의 결합입니다.

MLA는 기존 Multi-Head Attention이나 Grouped-Query Attention이 겪던 추론 시점의 KV 캐시 병목 현상을 해결하기 위해 저차원 잠재 벡터(Low-rank Key-Value compression) 압축 방식을 채택했습니다. 이를 통해 기존 대비 KV 캐시 메모리 소모를 무려 93.3% 절감하여 초대형 배치 및 긴 시퀀스 추론을 실현했습니다.

Feed-Forward Network(FFN)에는 세분화된 전문가 분할(Fine-Grained Expert Segmentation)과 공유 전문가(Shared Experts) 구조를 갖춘 DeepSeekMoE를 적용했습니다. 총 236B 파라미터 규모에서 전문가들을 정밀하게 분기시켜 각 도메인별 지식을 전문화하면서도 공통 지식을 효과적으로 유지하도록 설계되었습니다. 또한 RoPE 기법을 확장하여 최대 128K 토큰에 달하는 긴 컨텍스트 윈도우를 안정적으로 처리하며, Needle In A Haystack(NIAH) 테스트 전 구간에서 안정적인 검색 능력을 입증했습니다.

## 사용 사례
DeepSeek-V2는 표준 벤치마크(MMLU 78.5, GSM8K 79.2, HumanEval 48.8)뿐만 아니라 C-Eval(81.7), CMMLU(84.0) 등 중국어 및 다국어 환경에서 오픈소스 최상위권의 성적을 기록했습니다. 특히 채팅 모델인 DeepSeek-V2-Chat은 HumanEval Pass@1 81.1, GSM8K 92.2를 달성하고, 라이브 코딩 벤치마크(LiveCodeBench)에서도 독보적인 코딩 및 알고리즘 구현 능력을 보였습니다.

DeepSeek 공식 플랫폼(platform.deepseek.com) 및 웹 인터페이스(chat.deepseek.com)를 통한 서비스 외에도 가중치가 공개되어 있어 vLLM 및 SGLang과 같은 고성능 서빙 프레임워크를 통해 기업 및 연구 기관에서 사내 인프라에 직접 배포하여 대규모 코딩 보조, 복합 질의응답 시스템, 문서 요약 엔진 등으로 널리 활용되고 있습니다.

## 한계
총 파라미터가 236B에 달하므로 토큰당 활성 파라미터가 21B로 작음에도 불구하고 전체 모델 가중치를 VRAM에 로드해야 합니다. BF16 정밀도 기준 로컬 추론을 원활하게 실행하려면 최소 80GB VRAM을 갖춘 GPU 8장(총 640GB 이상)이 요구됩니다. 비록 vLLM이나 SGLang 등 전용 파이프라인과 양자화(AWQ, GPTQ, GGUF)를 통해 필요 사양을 낮출 수 있으나, 단일 소비자용 GPU 환경에서는 로드가 어렵습니다.

또한 MLA 구조 특성상 표준 Hugging Face Transformers 기본 구현체에서는 최적화된 내부 구현 대비 추론 속도가 저하될 수 있어 전용 vLLM 플러그인 또는 최적화 커널 사용이 권장됩니다.
