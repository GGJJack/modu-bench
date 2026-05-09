---
modelId: gemini-deep-research
domain: llm
status: published
updated: 2026-05-09
sources:
  - https://ai.google.dev/gemini-api/docs/deep-research
  - https://ai.google.dev/gemini-api/docs/interactions/overview
features:
  toolUse: true
  vision: true
  audioInput: false
  audioOutput: false
  extendedThinking: true
highlights:
  - "Google의 자율적인 다단계 리서치 수행 에이전트"
  - "협업 기획(Collaborative Planning)을 통한 리서치 방향 제어"
  - "MCP 서버 지원 및 시각화 데이터(차트, 그래프) 생성 능력"
relatedOrganization: google
---

# Gemini Deep Research 소개

## 개요
Gemini Deep Research는 Google이 2026년 5월에 발표한 자율형 리서치 에이전트로, 단순한 대화형 AI를 넘어 복잡한 리서치 과업을 스스로 계획하고 수행하며 결과를 종합하는 '분석가형(Analyst-in-a-box)' 서비스를 지향합니다. 사용자가 리서치 주제를 던지면, 에이전트는 정보를 탐색하고 분석하여 인용구가 포함된 상세 보고서를 작성합니다. 특히 2026년 5월 업데이트를 통해 협업 기획, 시각화 기능, MCP(Model Context Protocol) 지원 등 강력한 에이전트 기능들이 추가되며 더욱 정교한 작업이 가능해졌습니다.

## 기술 특징
Gemini Deep Research의 핵심은 '자율적인 다단계 수행 능력'입니다. 이 에이전트는 한 번의 호출로 끝나는 것이 아니라, 계획 수립(Planning), 검색(Searching), 읽기(Reading), 반복(Iterating), 출력(Output)으로 이어지는 루프를 스스로 수행합니다. 기술적으로는 Google Search, URL Context, Code Execution 도구를 기본적으로 활용하며, 외부 MCP 서버를 통해 사용자 정의 도구와 연결할 수 있습니다. 또한 '협업 기획(Collaborative Planning)' 기능을 통해 에이전트가 리서치를 시작하기 전 수립한 계획을 사용자가 검토하고 수정할 수 있는 제어권을 제공합니다.

## 사용 사례
이 에이전트는 저지연 채팅보다는 심도 있는 분석이 필요한 업무에 최적화되어 있습니다. 시장 조사(Market Analysis), 기업 실사(Due Diligence), 문헌 검토(Literature Reviews), 경쟁 환경 분석(Competitive Landscaping) 등이 대표적입니다. 예를 들어 "글로벌 반도체 시장 트렌드를 분석하고 시장 점유율 변화 차트를 포함하라"는 지시를 내리면, 에이전트는 수십 개의 검색 쿼리를 실행하고 수십만 개의 토큰을 처리하여 차트와 그래프가 포함된 종합 보고서를 생성합니다.

## 한계
Gemini Deep Research는 에이전트 워크플로우 특성상 응답 속도가 분 단위(최대 60분)로 소요되므로 실시간 채팅에는 적합하지 않습니다. 또한 현재 프리뷰(Preview) 단계로 제공되며, 구조화된 출력(Structured Output)을 지원하지 않는 등 기능적 제약이 존재합니다. 자율적으로 웹을 탐색하고 코드를 실행하는 과정에서 상당한 컴퓨팅 자원과 비용이 발생할 수 있으며, 외부 웹 콘텐츠의 품질이나 보안 위험(프롬프트 인젝션 등)에 노출될 수 있어 제공된 인용구와 소스를 검증하는 과정이 필수적입니다.
