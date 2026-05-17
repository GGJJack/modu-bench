---
modelId: syn-pro
domain: llm
status: published
updated: 2026-05-17
sources:
  - https://www.upstage.ai/blog/ja/upstage-ai-jp-syn-pro
  - https://www.upstage.ai/blog/en/upstage-ai-jp-syn-pro
  - https://karakuri.ai/
  - https://wandb.ai/wandb-japan/llm-leaderboard/reports/Nejumi-LLM-Neo--Vmlldzo2MTkyMTU0
features:
  toolUse: true
  vision: false
highlights:
  - "32B 미만의 파라미터로 대규모 모델(120B급) 이상의 성능 발휘"
  - "일본어 특화 및 현지 문화·비즈니스 로직에 대한 깊은 이해"
  - "Reasoning Budget 기능을 통한 추론 효율 동적 최적화"
  - "온프레미스 및 프라이빗 클라우드 배포에 최적화된 보안성"
relatedOrganization: upstage
---

# Syn Pro 소개

## 개요
Syn Pro는 한국의 AI 스타트업 Upstage가 일본의 Karakuri와 공동 개발하여 2025년 10월 23일에 발표한 일본 시장 특화형 대규모 언어 모델(LLM)입니다. 일본 경제산업성(METI)의 인증을 받은 기반 모델로서, 일본 내 기업 및 공공기관이 요구하는 높은 보안 수준과 정교한 일본어 처리 능력을 제공하는 것을 목표로 합니다.

## 기술 특징
Syn Pro는 32B(320억 개) 미만의 비교적 작은 파라미터 사이즈를 가지고 있음에도 불구하고, 120B급 이상의 오픈소스 모델(GPT OSS-120B 등)을 상회하는 벤치마크 성능을 보여줍니다. 특히 Nejumi Leaderboard 등 일본 주요 리더보드에서 상위권을 기록하며 효율성을 입증했습니다. 기술적으로는 'Reasoning Budget(추론 바젯)' 기능을 탑재하여, 수행 중인 작업의 복잡도에 따라 모델의 추론 자원을 동적으로 할당함으로써 속도와 정확도의 균형을 맞춥니다.

## 사용 사례
데이터 주권 보장이 중요한 금융, 의료, 행정 분야의 온프레미스(자체 구축) 환경에서 주로 활용됩니다. 일본어 특유의 뉘앙스와 비즈니스 관습에 대한 이해도가 높아 고객 상담 자동화(Chatbot), 사내 문서 요약, 복잡한 비즈니스 로직 분석 등에 최적화되어 있습니다. 또한 일본 HP와의 협력 솔루션인 'SolarBox'를 통해 하드웨어 일체형으로도 제공됩니다.

## 한계
Syn Pro는 일본어와 일본 문화에 고도로 최적화된 모델이므로, 다른 다국어 환경에서의 범용적인 성능은 글로벌 모델에 비해 제한적일 수 있습니다. 또한 32B 미만의 경량 모델로서 대형 모델이 가진 광범위한 일반 상식의 깊이 측면에서 차이가 발생할 가능성이 있습니다.
