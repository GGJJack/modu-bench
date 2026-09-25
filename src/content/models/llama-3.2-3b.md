---
modelId: llama-3.2-3b
domain: llm
status: published
updated: 2026-09-25
sources:
  - https://huggingface.co/meta-llama/Llama-3.2-3B
  - https://github.com/meta-llama/llama-models
  - https://ai.meta.com/blog/meta-llama-3/
features:
  toolUse: true
  vision: false
  fineTuning: true
highlights:
  - "온디바이스(On-device) 추론 최적화를 위해 30억 개 파라미터 규격으로 설계된 경량 모델"
  - "대형 Llama 3.1 모델로부터 지식 증류(Knowledge Distillation) 기법을 활용하여 추론 성능 극대화"
  - "최대 128K 컨텍스트 윈도우 및 도구 사용(Tool Use) 능력 내장"
relatedOrganization: meta
---

# Llama 3.2 3B 소개

## 개요
Llama 3.2 3B는 Meta가 2024년 9월 공개한 온디바이스(On-device) 및 엣지 컴퓨팅 환경 최적화 오픈 가중치(Open-weights) 언어 모델입니다 ([Hugging Face Llama-3.2-3B](https://huggingface.co/meta-llama/Llama-3.2-3B)). 스마트폰, 웨어러블 단말, 로컬 워크스테이션 등 가용 자원이 한정된 모바일 디바이스에서 지연 시간(Latency)을 최소화하면서 강력한 지 지시 이행 및 문맥 요약 능력을 제공하도록 설계되었습니다.

## 기술 특징
Llama 3.2 3B는 30억 개 파라미터 체급임에도 불구하고 대형 Llama 3.1 (8B 및 70B) 모델의 정수를 이식받기 위해 지식 증류(Knowledge Distillation) 기법을 적극 활용하였습니다 ([GitHub Meta Llama Models](https://github.com/meta-llama/llama-models)). 또한 128K(128,000) 토큰의 대용량 컨텍스트 윈도우를 지원하여 긴 대화 이력 및 장문 문서 분석을 로컬 단말 단에서 원활하게 수행합니다 ([Hugging Face Llama-3.2-3B](https://huggingface.co/meta-llama/Llama-3.2-3B)). GQA(Grouped-Query Attention) 적용으로 메모리 점유율을 대폭 낮췄으며, 외부 API 호출이나 에이전트 자동화를 위한 도구 사용(Tool Use) 역량이 내장되어 있습니다.

## 사용 사례 및 한계
이 모델은 모바일 앱 내 로컬 AI 비서, 이메일/메시지 요약, 개인화된 오프라인 지식 기반 Q&A, 그리고 프런트엔드 입력 필터링 에이전트 구축 등에 폭넓게 사용됩니다 ([GitHub Meta Llama Models](https://github.com/meta-llama/llama-models)). Llama 3.2 커뮤니티 라이선스를 따라 상용 환경에 배포 가능합니다. 다만, 3B 크기의 물리적 정전 용량 한계로 인해 전문 사법/의학 분야의 깊은 추론이나 초고난도 다단계 계산 문제에서는 초대형 플래그십 모델 대비 한계를 보일 수 있습니다.
