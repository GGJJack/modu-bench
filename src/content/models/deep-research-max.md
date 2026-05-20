---
modelId: deep-research-max
domain: llm
status: published
updated: 2026-05-20
sources:
  - https://blog.google/innovation-and-ai/models-and-research/gemini-models/next-generation-gemini-deep-research/
  - https://ai.google.dev/gemini-api/docs/deep-research
features:
  toolUse: true
  vision: true
  extendedThinking: true
highlights:
  - "Gemini 3.1 Pro 기반의 고성능 자율 리서치 에이전트"
  - "Extended Test-time Compute를 통한 심층 추론 및 반복적 정보 정제"
  - "MCP(Model Context Protocol) 지원으로 비공개 데이터 및 전문 스트림 연결"
relatedOrganization: google
---

# Deep Research Max 소개

## 개요
Deep Research Max는 Google이 2026년 4월에 발표한 Gemini Deep Research의 최상위 에디션입니다. Gemini 3.1 Pro 모델을 기반으로 구축되었으며, 단순한 정보 요약을 넘어 기업 수준의 워크플로우를 위한 전문적인 분석 결과를 제공합니다. 특히 '확장된 테스트 시간 연산(Extended Test-time Compute)' 기법을 활용하여, 비동기적이고 심층적인 조사가 필요한 전문가급 분석 과업에 최적화된 에이전트입니다.

## 기술 특징
Deep Research Max의 핵심은 연산 자원을 집중 투입하여 추론의 질을 극대화하는 구조에 있습니다. 일반적인 Deep Research가 속도와 효율성에 집중하는 반면, Max 버전은 더 많은 소스를 검토하고 갈등하는 증거들 사이의 미묘한 차이를 식별하며 반복적으로 보고서를 정제합니다. 기술적으로는 웹 검색뿐만 아니라 MCP(Model Context Protocol)를 통해 SEC 공시 자료, 학술지 등 전문 데이터 스트림과 사용자의 비공개 데이터를 결합하여 분석할 수 있습니다. 또한 분석 결과를 HTML이나 시각화 도구를 통해 고품질의 차트와 인포그래픽으로 직접 생성하는 능력을 갖추고 있습니다.

## 사용 사례
Deep Research Max는 실시간 응답보다는 높은 정확도와 포괄적인 분석이 요구되는 '백그라운드 워크플로우'에 적합합니다. 금융 분야의 기업 실사(Due Diligence) 보고서 자동 생성, 생명 과학 분야의 최신 문헌 검토 및 종합, 시장 조사를 위한 다각도 경쟁 환경 분석 등이 대표적입니다. 사용자는 에이전트가 수립한 리서치 계획을 실행 전에 검토하고 수정하는 '협업 기획(Collaborative Planning)' 기능을 통해 조사 방향을 정밀하게 제어할 수 있습니다.

## 한계
Deep Research Max는 심도 있는 분석을 수행하기 위해 상당한 시간을 소모하므로 저지연 대화형 서비스에는 부적합합니다. 또한 대규모 연산이 수반되는 만큼 일반 모델에 비해 호출 비용이 높게 책정되어 있으며, 외부 도구 및 MCP 서버와의 연동 과정에서 발생할 수 있는 데이터 보안 및 권한 관리의 복잡성을 신중하게 고려해야 합니다.
