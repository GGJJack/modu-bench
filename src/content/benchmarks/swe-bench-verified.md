---
benchmarkId: swe-bench-verified
domain: llm
status: published
updated: 2026-04-30
sources:
  - https://www.swebench.com/verified.html
  - https://arxiv.org/abs/2310.06770
paperUrl: https://arxiv.org/abs/2310.06770
highlights:
  - "SWE-bench의 500개 인스턴스로 구성된 인간 검증(human-validated) 하위 집합"
  - "OpenAI와의 협력으로 구축"
  - "문제 설명의 명확성, 테스트 패치의 정확성, 해결 가능성 등을 검증"
---

# SWE-bench Verified

## 개요
SWE-bench Verified는 소프트웨어 엔지니어링 벤치마크인 SWE-bench의 하위 집합(subset)으로, 코딩 에이전트 및 언어 모델의 신뢰성 있는 평가를 위해 500개의 인스턴스로 구성되어 있습니다. 이 벤치마크는 OpenAI와의 협력을 통해 만들어졌습니다. [1]

## 평가 방법
SWE-bench Verified는 원래의 SWE-bench 데이터셋에서 추출되었으며, 인간 검증자(human annotators)들이 각 인스턴스를 직접 검토했습니다. 이 과정에서 문제 설명(problem descriptions)이 명확한지, 테스트 패치(test patches)가 정확한지, 그리고 주어진 정보만으로 작업을 해결할 수 있는지(solvable) 등을 확인했습니다. 모델은 이러한 실제 GitHub 이슈들을 해결하는 패치를 작성해야 하며, 해결된 인스턴스의 비율(%)로 성능이 평가됩니다. [1]

## Bash Only 평가
다양한 시스템(RAG, 복수 롤아웃 등)을 평가하는 전체 리더보드 외에도, 언어 모델 자체의 성능을 공정하게 비교하기 위한 'Bash Only' 환경도 제공합니다. 이 환경에서는 `mini-SWE-agent`를 활용하여 복잡한 도구나 특수한 구조 없이 순수한 bash 셸 환경 내에서의 문제 해결 능력을 측정합니다. [1]

---
출처:
[1] https://www.swebench.com/verified.html
