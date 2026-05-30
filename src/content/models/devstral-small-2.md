---
modelId: devstral-small-2
domain: llm
status: published
updated: 2026-05-30
sources:
  - https://mistral.ai/news/devstral-2-vibe-cli
  - https://docs.mistral.ai/models/model-cards/devstral-small-2-25-12
  - https://legal.mistral.ai/ai-governance/models/devstral-small-2
features:
  toolUse: true
  vision: false
  fineTuning: true
highlights:
  - "소프트웨어 엔지니어링 에이전트 및 코드 분석 최적화"
  - "12B 파라미터 밀집(Dense) 모델"
  - "256k 토큰의 확장된 컨텍스트 윈도우 지원"
relatedOrganization: mistral-ai
---

# Devstral Small 2 소개

## 개요
Devstral Small 2는 Mistral AI가 2025년 12월에 공개한 개발자 특화 오픈소스 모델입니다. 소프트웨어 엔지니어링 에이전트를 위해 설계된 이 모델은 코드베이스 탐색, 다중 파일 편집, 도구 사용(Tool Use) 능력에 최적화되어 있습니다. 기존의 범용 모델보다 코드 이해 및 생성 능력이 뛰어나며, 특히 엔지니어링 워크플로우에서 발생하는 복잡한 논리 구조를 처리하는 데 중점을 두었습니다.

## 기술 특징
Devstral Small 2는 120억 개의 파라미터(12B)를 가진 밀집형 모델로, 256,000(256k) 토큰의 넓은 컨텍스트 윈도우를 지원합니다. 이를 통해 방대한 양의 소스 코드를 한 번에 맥락으로 이해할 수 있습니다. 특히 FIM(Fill-In-the-Middle) 기능과 함수 호출(Function Calling) 성능이 강화되어 IDE 확장 기능이나 자동화된 코드 리뷰 도구에 매우 적합합니다. 라이선스는 'Modified MIT'를 따르며, 상업적 이용과 로컬 배포가 가능하도록 설계되었습니다.

## 사용 사례
이 모델은 현대적인 소프트웨어 개발의 다양한 단계에서 활용될 수 있습니다. 대규모 코드베이스에서의 버그 추적 및 수정 제안, 복잡한 지시사항을 바탕으로 한 새로운 기능 구현, 단위 테스트 자동 생성 등이 대표적입니다. 특히 Mistral Vibe와 같은 에이전트 프레임워크와 결합하여 터미널과 IDE를 오가는 고도의 개발 에이전트를 구축하는 핵심 엔진으로 사용됩니다.

## 한계
Devstral Small 2는 코드와 공학적 추론에 특화되어 있어, 창의적인 글쓰기나 일반적인 인문학적 상식에 기반한 대화 성능은 범용 모델에 비해 낮을 수 있습니다. 또한 12B라는 모델 크기는 아주 복잡한 아키텍처 설계나 전사적 수준의 대규모 시스템 통합 로직을 구상하는 데 있어 대형 모델(Devstral 2 등)에 비해 한계가 존재할 수 있습니다. 본 모델은 2026년 2월 27일에 서비스 중단이 예정되어 있으며, 이후에는 상위 모델인 Devstral 2로의 전환이 권장됩니다.
