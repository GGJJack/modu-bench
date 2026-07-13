---
modelId: amazon-nova-2-lite
domain: llm
status: published
updated: 2026-07-13
sources:
  - https://aws.amazon.com/blogs/aws/introducing-amazon-nova-2-lite-a-fast-cost-effective-reasoning-model/
  - https://aws.amazon.com/ai/generative-ai/nova/
features:
  toolUse: true
  vision: true
highlights:
  - "빠르고 비용 효율적인 추론형(Reasoning) 모델"
  - "Extended Thinking 지원 (단계별 추론 및 작업 분해)"
  - "100만 토큰 컨텍스트 윈도우 제공"
  - "내장 웹 그라운딩 및 코드 인터프리터 기능"
relatedOrganization: amazon
---

## 개요
Amazon Nova 2 Lite는 Amazon Web Services(AWS)가 개발한 차세대 언어 모델로, 일상적인 워크로드를 위해 설계된 빠르고 비용 효율적인 추론형 모델입니다. 2025년 12월 AWS re:Invent에서 공개된 이 모델은 기업과 개발자가 유능하고 신뢰할 수 있으며 효율적인 에이전틱 AI(Agentic AI) 애플리케이션을 구축할 수 있도록 지원합니다. 특히 높은 가격 대비 성능을 제공하며, Amazon Bedrock을 통해 즉시 사용할 수 있습니다.

## 기술 특징
* **Extended Thinking**: 기본적으로 빠른 응답을 위해 비활성화되어 있지만, 복잡한 분석이 필요할 때 활성화할 수 있는 'Extended Thinking' 기능을 제공합니다. 사용자는 Low, Medium, High의 세 가지 사고 예산(Thinking Budget) 레벨을 선택하여 지능과 비용, 속도 간의 균형을 맞춤 설정할 수 있습니다.
* **멀티모달 입력 및 긴 문맥**: 텍스트뿐만 아니라 이미지, 비디오, 문서를 입력으로 지원하며, 최대 100만 토큰의 컨텍스트 윈도우를 제공하여 방대한 양의 데이터를 바탕으로 한 추론과 컨텍스트 학습이 가능합니다.
* **내장 도구 통합**: 실시간 정보 검색을 위한 **웹 그라운딩(Web Grounding)**과 워크플로우 내에서 코드를 실행하고 평가할 수 있는 **코드 인터프리터** 기능을 내장하고 있습니다. 이를 통해 외부 도구 없이도 신뢰성 높은 결과물을 생성할 수 있습니다.
* **Nova Forge를 통한 커스텀**: 특정 도메인에 특화된 지능이 필요한 조직은 Nova Forge를 사용하여 Nova 2 Lite를 자체 데이터로 미세 조정하거나 사용자 정의할 수 있습니다.

## 사용 사례
* **비즈니스 애플리케이션**: 고객 서비스 챗봇, 지능형 문서 처리(IDP), 비즈니스 프로세스 자동화 등 반복적이고 정밀한 처리가 필요한 업무에 적합합니다.
* **소프트웨어 엔지니어링**: 코드 생성, 디버깅, 리팩토링 및 시스템 마이그레이션 작업을 가속화하여 개발 효율성을 높이는 데 활용됩니다.
* **비즈니스 인텔리전스 및 연구**: 웹 그라운딩과 장기 추론 능력을 결합하여 내부 문서와 외부 소스를 동시 분석하고 전략적인 결정을 내리는 데 도움을 줍니다.

## 한계
* **추론 지연 시간**: Extended Thinking 기능을 활성화할 경우 사고의 깊이에 따라 응답 지연 시간(Latency)이 증가할 수 있습니다.
* **플랫폼 종속성**: Amazon Bedrock 및 AWS 생태계에 최적화되어 있어, 다른 클라우드 환경이나 온프레미스 환경에서의 직접적인 활용에는 제약이 있을 수 있습니다.
