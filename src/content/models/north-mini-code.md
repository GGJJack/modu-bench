---
modelId: north-mini-code
domain: llm
status: published
updated: 2026-06-16
sources:
  - https://cohere.com/blog/north-mini-code
  - https://huggingface.co/CohereLabs/North-Mini-Code-1.0
features:
  toolUse: true
  vision: false
highlights:
  - "30B MoE (3B active)"
  - "256k 컨텍스트 윈도우"
  - "Apache-2.0 라이선스"
relatedOrganization: cohere
---

# North Mini Code 소개

## 개요
North Mini Code는 Cohere가 개발자들을 위해 출시한 최초의 오픈소스 코딩 특화 모델입니다. 300억 개의 파라미터를 가진 전문가 혼합(Mixture-of-Experts, MoE) 아키텍처를 채택하고 있으며, 실행 시에는 30억 개의 파라미터만 활성화되어 효율적인 성능을 제공합니다. 이 모델은 에이전트 기반 코딩 능력을 갖추고 있으며, 주권적(sovereign) 개발 생태계를 지원하기 위해 Apache 2.0 라이선스로 공개되었습니다.

## 기술 특징
North Mini Code는 속도와 효율성에 최적화되어 설계되었습니다. 내부 테스트 결과, 동일한 하드웨어 환경에서 Devstral Small 2 대비 최대 2.8배 높은 출력 처리량(throughput)을 기록했습니다. 또한 256,000 토큰의 광범위한 컨텍스트 윈도우를 지원하여 대규모 코드베이스 이해와 복잡한 에이전틱 워크플로우 처리에 적합합니다. 아키텍처적으로는 MoE를 활용하여 낮은 하드웨어 요구사항으로도 강력한 소프트웨어 엔지니어링 성능을 발휘합니다.

## 사용 사례
이 모델은 단순한 코드 생성을 넘어 서브 에이전트 오케스트레이션, 시스템 아키텍처 매핑, 코드 리뷰 등 복잡한 에이전틱 코딩 워크플로우에 특화되어 있습니다. 개발자들은 이를 로컬 환경이나 온프레미스에 배포하여 벤더 종속성 없이 독립적인 코딩 에이전트 인프라를 구축할 수 있습니다.

## 한계
North Mini Code는 효율성에 초점을 맞춘 소형 모델로서, 수천억 개의 파라미터를 가진 거대 모델들에 비해 절대적인 추론 능력이나 지식의 양에서 한계가 있을 수 있습니다. 또한 에이전틱 작업과 코딩에 특화되어 있어 일반적인 자연어 대화나 멀티모달 작업에는 적합하지 않을 수 있습니다.
