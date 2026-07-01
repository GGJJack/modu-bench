---
modelId: gemini-3.5-flash-computer-use
domain: llm
status: published
updated: 2026-07-01
sources:
  - https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-computer-use-gemini-3-5-flash/
  - https://ai.google.dev/gemini-api/docs/computer-use
features:
  toolUse: true
  vision: true
highlights:
  - "메인 Gemini 3.5 Flash 모델에 네이티브 통합된 Computer Use 기능"
  - "브라우저, 모바일, 데스크톱 환경을 아우르는 에이전트 구축 지원"
  - "간접 프롬프트 주입 대응을 위한 적대적 훈련 및 엔터프라이즈 보호 시스템 적용"
relatedOrganization: google
---

# Gemini 3.5 Flash (Computer Use) 소개

## 개요
Gemini 3.5 Flash (Computer Use)는 구글의 경량 모델인 Gemini 3.5 Flash에 컴퓨터 조작 기능이 기본 도구(Built-in tool)로 통합된 모델입니다. 2026년 6월 24일에 발표된 이 모델은 기존에 별도의 독립된 모델로 제공되던 'Gemini 2.5 computer use' 기능을 메인 Flash 라인업에 내재화하여, 성능과 편의성을 대폭 개선했습니다. 개발자는 이 모델을 통해 화면을 보고(Vision), 추론하며, 다양한 환경에서 직접 행동을 취하는 에이전트를 구축할 수 있습니다.

## 기술 특징
이 모델은 단순한 텍스트 기반 에이전트를 넘어, 브라우저뿐만 아니라 모바일 및 데스크톱 운영 체제 전반에서 복합적인 작업을 수행할 수 있는 능력을 갖추고 있습니다.

*   **네이티브 도구 통합**: 함수 호출(Function Calling)이나 검색(Search), 지도(Maps) 연동과 같은 기존 Gemini의 강점 위에 컴퓨터 조작 기능이 직접 통합되어 동작합니다.
*   **긴 호흡의 작업 최적화**: 지속적인 소프트웨어 테스팅이나 전문적인 애플리케이션을 활용한 지식 작업 등 장기적인(Long-horizon) 자동화 작업에 최적화된 성능을 제공합니다.
*   **안전 및 보안 인프라**: 라이브 환경에서 발생할 수 있는 프롬프트 주입(Prompt Injection) 리스크를 줄이기 위해 특화된 적대적 훈련(Adversarial Training)이 적용되었습니다. 또한, 민감한 작업에 대한 사용자 명시적 승인 기능과 간접 프롬프트 주입 탐지 시 작업을 자동 중단하는 엔터프라이즈 세이프가드 시스템을 제공합니다.

## 사용 사례
*   **엔터프라이즈 자동화**: UIPath와 같은 플랫폼과 연동하여 복잡한 비즈니스 프로세스 자동화 및 UI 기반 워크플로우를 실행합니다.
*   **접근성 및 접근성 감사**: 자체 문서나 웹 애플리케이션의 접근성 이슈를 자동으로 감사하고 리포트를 생성합니다.
*   **소프트웨어 품질 보증(QA)**: 실제 사용자 환경과 유사한 브라우저 및 데스크톱 환경에서 지속적인 소프트웨어 테스팅을 수행합니다.

## 한계
Gemini 3.5 Flash (Computer Use)는 에이전트가 실제 환경에서 직접 행동을 취하므로, 샌드박스(Sandboxing) 환경에서의 실행과 사람의 개입(Human-in-the-loop) 검증이 강력히 권장됩니다. 또한, 매우 높은 정밀도가 요구되는 일부 시각적 조작 작업에서는 여전히 모델의 비전 성능에 따른 제약이 발생할 수 있습니다.
