---
modelId: grok-4-3
domain: llm
status: published
updated: 2026-05-16
sources:
  - https://docs.x.ai/developers/models
  - https://docs.x.ai/developers/release-notes
  - https://docs.x.ai/developers/model-capabilities/text/reasoning
  - https://docs.x.ai/developers/model-capabilities/text/structured-outputs
features:
  toolUse: true
  vision: true
  extendedThinking: true
highlights:
  - "조절 가능한 추론 단계(Reasoning Effort) 도입"
  - "에이전트 도구 호출 능력 및 낮은 환각률"
  - "100만 토큰의 광활한 컨텍스트 윈도우 지원"
relatedOrganization: x-ai
---

# Grok 4.3 소개

## 개요
Grok 4.3은 2026년 5월 12일 xAI가 발표한 최신 플래그십 인공지능 모델입니다. xAI 역사상 가장 지능적이고 빠른 모델로 평가받으며, 특히 환각(Hallucination) 발생률을 획기적으로 낮추고 에이전트 도구 사용 능력을 극대화한 것이 특징입니다. 100만 토큰의 방대한 컨텍스트 윈도우를 통해 대규모 데이터를 한 번에 처리할 수 있으며, 텍스트와 이미지 멀티모달 입력을 지원합니다.

## 기술 특징
Grok 4.3의 핵심 기술적 진보는 '조절 가능한 추론(Configurable Reasoning)' 기능의 도입입니다. 사용자는 `reasoning_effort` 파라미터를 통해 'none', 'low', 'medium', 'high' 중 하나를 선택하여 모델이 응답 전 생각하는 깊이를 제어할 수 있습니다. 이를 통해 간단한 작업은 빠르게, 복잡한 수학이나 논리 문제는 깊은 추론을 거쳐 해결하도록 최적화가 가능합니다. 또한 구조화된 출력(Structured Outputs) 기능을 통해 사용자가 정의한 JSON 스키마에 엄격히 부합하는 결과를 보장하며, 웹 검색, X(구 트위터) 검색, 코드 실행 등 서버 측 도구를 자율적으로 활용하는 강력한 에이전트 성능을 발휘합니다.

## 사용 사례
강화된 추론 능력을 바탕으로 복잡한 수학 증명, 다단계 논리 퍼즐, 그리고 고도의 프로그래밍 작업에 최적화되어 있습니다. 또한 실시간 X 데이터 및 웹 검색 통합 기능을 활용하여 최신 트렌드 분석이나 실시간 시장 조사에 강력한 성능을 보여줍니다. 구조화된 출력 기능은 문서 파싱, 개체명 인식(Entity Extraction), 보고서 자동 생성 등 엄격한 포맷이 필요한 기업용 워크플로우에 유용하게 활용될 수 있습니다.

## 한계
Grok 4.3의 기본 지식 컷오프는 2024년 11월입니다. 따라서 실시간 검색 도구를 사용하지 않을 경우 그 이후의 최신 사건에 대한 지식은 제한적일 수 있습니다. 또한 추론 단계를 높게 설정할수록 응답 시간이 길어지고 처리 비용(토큰 소비)이 증가할 수 있다는 점을 유의해야 합니다. 현재 오디오 직접 입력 및 실시간 음성 대화 기능은 전용 Voice API를 통해서만 제공되며 기본 텍스트 모델에서는 지원하지 않습니다.
