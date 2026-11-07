---
modelId: deepseek-llm-67b-chat
domain: llm
status: published
updated: 2026-11-07
sources:
  - https://github.com/deepseek-ai/DeepSeek-LLM
  - https://arxiv.org/abs/2401.02954
  - https://huggingface.co/deepseek-ai/deepseek-llm-67b-chat
features:
  toolUse: false
  vision: false
highlights:
  - "영어와 중국어 2조(2T) 토큰으로 스크래치부터 사전 학습된 67B 파운데이션 모델"
  - "Grouped-Query Attention (GQA) 도입을 통한 추론 시 KV 캐시 메모리 최적화"
  - "수학(GSM8K 84.1), 코딩(HumanEval 73.8), 추론에서 LLaMA-2 70B를 상회하는 벤치마크 기록"
  - "DPO(Direct Preference Optimization)와 정밀한 필터링 파이프라인(cc_cleaner) 적용"
---

# DeepSeek LLM 67B Chat 소개

## 개요
DeepSeek LLM 67B Chat은 DeepSeek(深度求索)가 2023년 11월에 발표한 대형 언어 모델입니다. 오픈소스 LLM 생태계의 장기적 발전을 목표로 스크래치부터 학습되었으며, 고품질 영어 및 중국어 텍스트 2조(2T) 토큰으로 사전 학습된 `deepseek-llm-67b-base`를 기반으로 지도 미세 조정(SFT)과 직접 선호 최적화(Direct Preference Optimization, DPO)를 거쳐 완성되었습니다.

발표 당시 널리 사용되던 대표적 오픈소스 모델인 LLaMA-2 70B를 추론, 수학, 코딩 등 광범위한 영역에서 능가했을 뿐만 아니라, 개방형 평가에서 GPT-3.5 수준에 필적하거나 중국어 영역에서는 이를 넘어서는 대화 능력을 보여주어 DeepSeek 연구진의 독자적 파운데이션 모델 역량을 입증했습니다.

## 기술 특징
DeepSeek LLM 67B는 LLaMA와 유사한 자동회귀 디코더(Auto-regressive Transformer Decoder) 아키텍처를 기반으로 설계되었습니다. 특히 67B 모델은 7B 모델의 Multi-Head Attention(MHA)과 달리 **Grouped-Query Attention (GQA)** 을 채택하여 대형 모델 추론 시 KV 캐시의 메모리 사용량을 대폭 절감하고 처리량을 끌어올렸습니다.

사전 학습 데이터 파이프라인에는 자체 구축한 대규모 분산 체크포인팅 시스템인 `cc_cleaner`가 적용되었습니다. MinhashLSH 기반의 철저한 중복 제거 및 엄격한 품질 필터링 휴리스틱을 통해 2조 토큰에 달하는 고품질 데이터를 선별했습니다. 또한, 4096 시퀀스 길이에 맞춰 2000 스텝의 웜업과 다단계 학습률 스케줄(Multi-step Learning Rate Schedule)을 정밀하게 제어하며 안정적인 손실 수렴을 달성했습니다.

## 사용 사례
DeepSeek LLM 67B Chat은 복합 논리 추론과 알고리즘 및 프로그래밍 문제 해결에서 강점을 드러냅니다. 주요 벤치마크 평가에서 HumanEval Pass@1 73.8, GSM8K 84.1(0-shot), TriviaQA 81.5, MMLU 71.1을 달성했으며, 유출되지 않은 신규 시험 세트인 헝가리 고등학교 전국 수학 시험(Hungarian National High School Exam) 평가에서도 뛰어난 성과를 기록했습니다.

공식 웹 대화 플랫폼(chat.deepseek.com)을 통한 상호작용뿐만 아니라 모델 가중치가 오픈소스로 배포되어 Hugging Face Transformers 및 vLLM 프레임워크를 통해 로컬 서버에 간편하게 배포할 수 있습니다. 상업적 이용이 허용되는 라이선스(DeepSeek Model License) 하에 다국어 고객 응대 챗봇, 사내 코드 작성 도우미, 수학 및 문서 추론 분석기 등으로 널리 채택되었습니다.

## 한계
이 모델은 4096 토큰의 기본 시퀀스 길이를 가지고 있어, 이후 세대 모델들이 지원하는 32K~128K 이상의 초장문 문서 분석이나 대용량 레포지토리 전체 분석에는 제약이 따릅니다. 또한 67B Dense 구조 특성상 토큰당 연산량이 일정하여 MoE 아키텍처(DeepSeek-V2/V3 등)에 비해 추론 비용과 지연 시간이 상대적으로 큽니다.

FP16/BF16 원본 가중치 서빙 시 최소 4장 이상의 40GB/80GB GPU가 필요하며, vLLM 기준 4-way 텐서 병렬화(Tensor Parallelism)가 권장됩니다. 아울러 토크나이저 특성상 프롬프트에 불필요한 시스템 프롬프트를 과도하게 포함할 경우 모델의 지시 이행 일관성이 떨어질 수 있으므로 공식 가이드에 따른 사용자-응답 포맷 준수가 필요합니다.
