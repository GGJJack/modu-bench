---
modelId: mistral-7b
domain: llm
status: published
updated: 2026-11-04
sources:
  - https://mistral.ai/news/announcing-mistral-7b/
  - https://arxiv.org/abs/2310.06825
  - https://huggingface.co/mistralai/Mistral-7B-v0.1
features:
  toolUse: false
  vision: false
  fineTuning: true
highlights:
  - "7.3B 소형 파라미터로 Llama 2 13B 전 벤치마크 능가"
  - "그룹 쿼리 어텐션(GQA) 및 슬라이딩 윈도우 어텐션(SWA) 도입"
  - "Apache 2.0 완전 오픈소스 라이선스 배포"
relatedOrganization: mistralai
---

# Mistral 7B 소개

## 개요
Mistral 7B는 Mistral AI가 2023년 9월 27일 발표한 73억(7.3B) 파라미터 규모의 오픈소스 기반 거대 언어 모델(LLM)이다. 동일 체급 내에서 가장 뛰어난 연산 효율성과 성능을 목표로 설계되었으며, Llama 2 13B를 모든 평가 벤치마크에서 능가하고 Llama 1 34B와 대등하거나 우수한 추론 및 코딩 성과를 입증하였다. 누구나 제약 없이 상업적 및 연구 목적으로 활용할 수 있도록 Apache 2.0 라이선스로 전면 공개되어 글로벌 오픈 웨이트 AI 생태계에 큰 반향을 일으켰다.

## 기술 특징
Mistral 7B는 효율적인 추론과 긴 문맥 처리를 위해 다음과 같은 핵심 아키텍처 혁신을 적용하였다.
- **그룹 쿼리 어텐션 (Grouped-Query Attention, GQA)**: 표준 멀티 헤드 어텐션 대비 키-값(KV) 캐시 메모리 사용량을 대폭 줄여 추론 처리량과 디코딩 속도를 극대화하였다.
- **슬라이딩 윈도우 어텐션 (Sliding Window Attention, SWA)**: 각 레이어가 이전 4,096개의 숨겨진 상태(hidden states)에만 어텐션을 수행하도록 제한하여 연산 복잡도를 선형 비용으로 축소하였다. 레이어가 누적됨에 따라 실제 수용장(receptive field)은 확장되어 최대 8k 이상의 시퀀스 길이를 메모리 낭비 없이 안정적으로 처리한다.
- **순환 버퍼 캐시 (Rolling Buffer Cache)**: 고정된 윈도우 크기를 활용하여 KV 캐시 크기를 4,096 토큰 분량으로 제한함으로써 8,192 길이 시퀀스 추론 시 캐시 메모리를 절반으로 절감하였다.

## 사용 사례
Mistral 7B는 경량성과 뛰어난 성능 덕분에 단일 컨슈머 GPU 환경이나 엣지 디바이스, 클라우드 vLLM 배포 환경에 최적화되어 있다. 베이스 모델 자체의 코딩 및 논리적 추론 능력이 뛰어나 도메인 특화 미세 조정(Fine-tuning)을 위한 이상적인 파운데이션 모델로 널리 채택되었다. 또한 대화형 인스트럭션 튜닝 버전(Mistral 7B Instruct)을 통해 가상 비서, 챗봇, 텍스트 요약 및 분석 자동화 등에 널리 활용된다.

## 한계
Mistral 7B 베이스 모델(v0.1)은 순수 사전 훈련된 파운데이션 모델로서 내장된 자체 안전 가드레일이나 모더레이션(출력 검열) 메커니즘을 포함하지 않는다. 따라서 서비스 배포 시 프롬프트 엔지니어링이나 추가 안전 필터링 계층이 필요하다. 또한 7B 규모의 파라미터 한계로 인해 수백억 파라미터급 대형 모델에 비해 심층적인 세계 지식(World Knowledge) 암기량이나 고난도 멀티스텝 추론에서 한계를 보일 수 있다.
