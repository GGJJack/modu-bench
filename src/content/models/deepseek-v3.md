---
modelId: deepseek-v3
domain: llm
status: published
updated: 2026-05-06
sources:
  - https://github.com/deepseek-ai/DeepSeek-V3
  - https://arxiv.org/abs/2412.19437
  - https://huggingface.co/deepseek-ai/DeepSeek-V3
features:
  toolUse: true
  vision: false
highlights:
  - "총 671B 파라미터, 토큰당 37B 활성화되는 MoE 아키텍처"
  - "Multi-head Latent Attention (MLA) 및 DeepSeekMoE 도입"
  - "FP8 혼합 정밀도 훈련을 통한 극단적인 학습 효율성 달성"
relatedOrganization: deepseek
---

# DeepSeek-V3 소개

## 개요
DeepSeek-V3는 DeepSeek(深度求索)가 2024년 12월에 발표한 강력한 Mixture-of-Experts (MoE) 언어 모델입니다. 총 671B개의 파라미터를 보유하고 있으며, 추론 시에는 토큰당 37B개의 파라미터만 활성화하여 효율성을 극대화했습니다. 14.8조 개의 방대한 토큰을 학습한 이 모델은 오픈소스 모델 중 최상위권의 성능을 자랑하며, GPT-4o나 Claude 3.5 Sonnet과 같은 최정상급 폐쇄형 모델들과 대등한 수준의 능력을 보여주는 것을 목표로 설계되었습니다.

## 기술 특징
이 모델은 DeepSeek-V2에서 검증된 Multi-head Latent Attention (MLA) 아키텍처를 계승하여 추론 시 KV 캐시 소모량을 크게 줄였습니다. 또한, 보조 손실(Auxiliary Loss) 없는 부하 분산 전략을 도입하여 로드 밸런싱 과정에서의 성능 저하를 최소화했습니다. 특히 주목할 만한 점은 FP8 혼합 정밀도 훈련 프레임워크를 대규모 모델에 성공적으로 적용하여, 약 2.788M H800 GPU 시간이라는 매우 경제적인 비용으로 학습을 완료했다는 것입니다. 이는 기존 대형 모델들의 학습 비용과 비교했을 때 압도적인 효율성을 증명한 사례로 평가받습니다.

## 사용 사례
DeepSeek-V3는 특히 수학적 추론과 코딩 영역에서 독보적인 성능을 발휘합니다. AIME 2024, MATH-500 등 주요 벤치마크에서 글로벌 최고 수준의 성적을 기록했으며, LiveCodeBench와 같은 코딩 평가에서도 뛰어난 성과를 거두었습니다. 공식 웹사이트 및 API를 통해 서비스될 뿐만 아니라, 모델 가중치가 공개되어 있어 SGLang, vLLM, LMDeploy 등 다양한 오픈소스 프레임워크를 통해 로컬 환경이나 자체 인프라에 구축하여 연구 및 상업적 용도로 활용할 수 있습니다.

## 한계
거대한 모델 크기(전체 가중치 약 685GB)로 인해 원활한 추론을 위해서는 다수의 고성능 GPU(H800 등)와 고대역폭 네트워크 인프라가 필수적입니다. FP8 정밀도를 기본으로 채택하고 있어, 하드웨어 사양에 따라 양자화나 정밀도 변환 과정에서 미세한 성능 차이가 발생할 수 있습니다. 또한 DeepSeek-R1과 같은 추론 전문 모델로부터 지식을 증류(Distillation)하여 추론 능력을 강화했음에도 불구하고, 실시간 상호작용이나 극도의 저지연 응답이 필요한 서비스에서는 MoE 아키텍처 특유의 통신 오버헤드를 고려한 최적화가 요구됩니다.
