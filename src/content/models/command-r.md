---
modelId: command-r
domain: llm
status: published
updated: 2026-11-03
sources:
  - https://cohere.com/blog/command-r
  - https://docs.cohere.com/docs/command-r
  - https://huggingface.co/CohereLabs/c4ai-command-r-v01
features:
  toolUse: true
  vision: false
highlights:
  - "35B 파라미터 기반의 엔터프라이즈 특화 확장형 LLM"
  - "128k 토큰 컨텍스트 윈도우 및 정확한 출처 인용(Grounded Generation) 지원"
  - "한국어를 포함한 10개 핵심 다국어 최적화 및 단일 단계 도구 사용(Function Calling) 지원"
relatedOrganization: cohere
---

# Command R 소개

## 개요
Command R은 2024년 3월 11일 코히어(Cohere)와 코히어 랩스(Cohere Labs)가 연구 및 엔터프라이즈 환경을 위해 공개한 350억(35B) 파라미터 규모의 오픈 웨이트 대규모 언어 모델입니다. 기업들이 PoC(개념 증명) 단계를 넘어 실제 프로덕션 환경에서 대규모로 AI를 활용할 수 있도록 높은 정확도와 비용 효율성, 빠른 처리 속도 간의 최적의 균형을 제공하도록 설계되었습니다.

Command R은 특히 검색 증강 생성(RAG)과 도구 사용(Tool Use) 워크플로우에 특화되어 있으며, 긴 문맥(Long-context) 처리와 다국어 작업에서 뛰어난 성능을 발휘합니다.

## 기술 특징
Command R은 최적화된 트랜스포머 아키텍처를 기반으로 하는 자기회귀(Auto-regressive) 언어 모델로, 사전 훈련(Pre-training) 후 지도 미세조정(SFT)과 인간 선호도 정렬(Preference Training)을 거쳤습니다.

주요 기술적 특징은 다음과 같습니다:
- **근거 기반 생성(Grounded Generation) 및 RAG**: 모델이 제공된 검색 문서 스니펫들을 분석하여 어떤 문서가 관련이 있고 인용되어야 하는지 먼저 판단한 후 답변을 생성하며, 인용한 문장 구간(Grounding spans)을 명시적으로 표시하여 환각(Hallucination)을 줄입니다.
- **128k 긴 컨텍스트 지원**: 128,000 토큰에 달하는 넓은 문맥 길이를 기본 지원하여 방대한 분량의 기업 내부 문서, 코드베이스, 장기 대화 이력을 손실 없이 처리할 수 있습니다.
- **도구 사용 및 함수 호출(Function Calling)**: 단일 단계 도구 사용(Single-step Tool Use) 템플릿이 모델에 내장되어 있어 API 호출, 웹 검색, 데이터베이스 쿼리 등 외부 시스템 연동을 정교한 JSON 액션으로 수행할 수 있으며, 도구 호출이 필요 없는 경우 자발적으로 일반 응답(`directly_answer`)으로 전환할 수 있습니다.
- **다국어 최적화**: 한국어를 포함하여 영어, 프랑스어, 스페인어, 이탈리아어, 독일어, 포르투갈어, 일본어, 중국어(간체), 아랍어 등 10개 핵심 언어에 대해 고성능 생성을 보장하며, 추가로 13개 언어가 사전 학습에 포함되어 있습니다.

## 사용 사례
Command R은 엔터프라이즈 지식 베이스 기반 질의응답 봇, 대량의 사내 문서 요약 및 보고서 생성, 고객 지원 자동화 시스템, 그리고 API 연동 자동화 에이전트 구축에 널리 활용됩니다. 특히 공식 API 요금(1M 토큰당 입력 $0.50, 출력 $1.50)이 매우 경제적이어서 대규모 트래픽을 처리해야 하는 서비스 파이프라인에 적합합니다.

## 한계
Command R은 텍스트 전용 언어 모델로 이미지 입력이나 멀티모달 처리를 지원하지 않습니다. 또한 코드 자동 완성을 전문으로 하는 모델과 비교했을 때 단순 코드 완성 성능보다는 코드 설명, 질의응답, 리팩토링 요청에 최적화되어 있습니다. 오픈 웨이트는 연구 목적(CC-BY-NC-4.0)으로 공개되어 있어 비상업적 목적 외의 완전한 자체 상업 서빙에는 코히어의 라이선스 계약이 필요하며, 상용 서비스를 위해서는 코히어 공식 API나 클라우드 파트너 배포를 이용해야 합니다.
