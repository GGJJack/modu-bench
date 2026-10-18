---
modelId: sakana-namazu
domain: llm
status: published
updated: 2026-10-18
sources:
  - https://sakana.ai/namazu-api/
  - https://sakana.ai/namazu/
  - https://console.sakana.ai/pricing#sakana-namazu
features:
  toolUse: true
  vision: true
highlights:
  - "Moonshot AI의 Kimi K2.6 기반으로 개발된 일본어 및 일본 비즈니스 문맥 특화 LLM API"
  - "웹 검색, 코드 실행, Function Calling 등의 빌드인 에이전트 기능 지원 및 OpenAI 호환 API 제공"
  - "JFBench, FairPoliticsQA 등 일본어 지시 따르기 및 정치적 중립성 평가에서 탁월한 성과 입증"
relatedOrganization: sakana-ai
---

# Sakana Namazu 소개

## 개요
Sakana Namazu는 일본 도쿄의 AI 스타트업 Sakana AI가 2026년 8월에 공식 출시한 일본어 특화 대형 언어 모델(LLM) API입니다. 기존 Sakana Chat 서비스 내부에서 운영되던 Namazu 모델을 대폭 강화하여 외부 개발자 및 기업들이 API 형태로 직접 활용할 수 있도록 개방한 제품입니다. Moonshot AI의 오픈 모델인 Kimi K2.6을 기반으로 Sakana AI 자체 데이터를 결합하여, 일본어 응답 품질과 일본 고유의 비즈니스 및 사회적 문맥에 대한 이해도를 크게 향상시켰습니다.

## 기술 특징
Sakana Namazu는 복잡한 추론 능력과 우수한 에이전트 실행 역량을 동시에 보유하고 있습니다. 모델 내부에는 웹 검색(Web Search)과 코드 실행(Code Execution) 기능이 기본 탑재되어 있으며, OpenAI 호환 규격의 Function Calling 및 비전(Vision) 기술을 지원합니다. 이에 따라 기존 OpenAI API 기반 코드에서 `base_url`과 API 키 설정만 변경하면 손쉽게 연동할 수 있습니다. 벤치마크 평가에서는 Preferred Networks의 일본어 지시 따르기 벤치마크인 JFBench를 비롯하여, 수학적 추론(AIME26), 코딩(LiveCodeBench v6), 멀티태스킹 지식(MMLU-Pro) 등 다양한 영역에서 높은 수준의 성능을 증명하였습니다. 또한 중립성을 측정하는 FairPoliticsQA 평가에서 점수가 34.10%에서 56.30%로 크게 상승하는 등 편향성을 최소화하는 튜닝이 적용되었습니다.

## 사용 사례
Sakana Namazu는 일본어 환경에서의 자동화된 비즈니스 워크플로우에 최적화되어 있습니다. 주요 사용 사례로는 조사 계획 입안부터 웹 검색, 정보 검증, 보고서 작성까지 전 과정을 자율적으로 수행하는 시장 조사 리포트 자동 생성 시스템이 있습니다. 또한 낮은 단가와 뛰어난 엔드투엔드 처리 능력을 바탕으로 고객 지원(CS) 문의 응대부터 주문 데이터 집계 및 분석에 이르기까지 기업 내부 운영 비용을 효과적으로 절감하는 데 활용됩니다. 아울러 멀티모달 비전 역량과 에이전트 루프를 결합하여 실시간으로 수조의 상태를 관찰하고 지시를 내리는 창의적인 제어 시스템 구축에도 적합합니다.

## 한계
Sakana Namazu는 오픈 백본 모델을 기반으로 일본어와 일본 비즈니스 문맥에 집중하여 튜닝되었기 때문에, 일본어 이외의 특정 다국어 영역에서는 다국어 전용 프론티어 모델 대비 표현력이 제한될 수 있습니다. 또한 내장된 웹 검색 및 코드 실행 도구를 연속으로 활용하는 다단계 에이전트 워크플로우에서는 외부 검색 엔진 연동 상태 및 네트워크 상황에 따라 단일 텍스트 생성 응답보다 지연 시간(Latency)이 다소 발생할 수 있으므로 시스템 설계 시 비동기 처리 구조를 고려해야 합니다.
