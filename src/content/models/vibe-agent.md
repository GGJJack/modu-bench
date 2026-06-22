---
modelId: vibe-agent
domain: llm
status: published
updated: 2026-06-22
sources:
  - https://mistral.ai/news/vibe-agent/
  - https://mistral.ai/products/vibe/
  - https://mistral.ai/news/vibe-remote-agents-mistral-medium-3-5/
features:
  toolUse: true
  vision: true
highlights:
  - "장기적(Long-horizon) 다단계 작업 수행을 위한 자율 에이전트"
  - "Work 모드와 Code 모드를 통한 업무 및 개발 자동화"
  - "100개 이상의 도구 연결 및 MCP(Model Context Protocol) 지원"
relatedOrganization: mistral-ai
---

# Vibe Agent 소개

## 개요
Vibe Agent는 Mistral AI가 기존의 대화형 서비스인 'Le Chat'을 전면 개편하여 출시한 자율형 AI 에이전트입니다. 단순한 질의응답을 넘어 사용자의 지식, 앱, 도구에 능숙하게 접근하여 복잡한 다단계 작업을 스스로 수행하는 것을 목표로 합니다. 2026년 5월에 발표되었으며, 이메일 요약, 일정 관리, 심층 리서치부터 코드 수정 및 배포에 이르기까지 폭넓은 작업 범위를 다룹니다.

## 기술 특징
Vibe Agent는 추론, 에이전트 작업, 도구 호출 및 코딩에 최적화된 Mistral의 플래그십 모델들을 기반으로 구동됩니다. 사용자가 결과를 설명하면 에이전트가 실행 계획을 수립하고 승인을 받은 뒤 작업을 시작하는 구조를 갖추고 있습니다. 특히 MCP(Model Context Protocol) 및 오픈 표준을 지원하여 100개 이상의 외부 도구(Google Workspace, Slack, GitHub, Jira 등)와 통합될 수 있으며, 모든 실행 단계와 추론 체인은 사용자가 투명하게 검토하고 개입할 수 있도록 설계되었습니다.

## 사용 사례
Vibe Agent는 크게 두 가지 모드로 운영됩니다. 'Work 모드'에서는 기업 내 지식 검색, 구조화된 데이터 분석, 보고서 작성, 반복적인 워크플로우 자동화 등을 수행합니다. 예를 들어, 읽지 않은 이메일을 요약하고 응답 초안을 작성하거나, 데이터베이스를 연결하여 대시보드를 렌더링할 수 있습니다. 'Code 모드'에서는 원격 샌드박스 환경에서 코드를 작성하고, 테스트를 실행하며, 최종적으로 풀 리퀘스트(Pull Request)를 생성하는 등 개발 전체 주기를 지원합니다. VS Code 확장 프로그램을 통해 IDE 내부에서도 동일한 에이전트 기능을 사용할 수 있습니다.

## 한계
자율적인 실행 능력을 갖추고 있으나, 복잡한 프로젝트 환경에서 에이전트가 수립한 계획이 항상 최적은 아닐 수 있으므로 실행 전후의 사용자 검토가 권장됩니다. 또한, 외부 서비스와의 연동 시 해당 서비스의 API 권한 및 보안 설정에 따라 작업 범위가 제한될 수 있습니다. 현재 유료 플랜(Pro, Team, Enterprise)에 따라 제공되는 추론 능력과 작업 세션의 지속성 등에 차등이 있습니다.
