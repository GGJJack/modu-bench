---
benchmarkId: bigcodebench
domain: llm
status: published
updated: 2026-09-20
sources:
  - https://arxiv.org/abs/2406.15877
  - https://github.com/bigcode-project/bigcodebench
  - https://huggingface.co/spaces/bigcode/bigcodebench-leaderboard
organization: bigcode
paperUrl: https://arxiv.org/abs/2406.15877
highlights:
  - "Task automation has been greatly empowered by the recent advances in Large Language Models (LLMs) via Python code"
  - "Challenges LLMs to invoke multiple function calls as tools from 139 libraries and 7 domains for 1,140 fine-grained tasks"
---

# BigCodeBench

## 개요
BigCodeBench는 소프트웨어 엔지니어링 개발부터 범용 추론에 이르기까지 Python 코드를 통한 실제적이고 복잡한 작업 자동화에서 대형 언어 모델(LLM)의 능력을 평가하기 위한 벤치마크입니다. 기존 벤치마크들이 짧고 독립적인 알고리즘 작업에 국한된 것과 달리, 데이터 분석이나 웹 개발 등 실용적인 작업을 수행하기 위해 다양한 함수 호출(Function Calling)을 도구로 활용하는 능력을 집중적으로 측정합니다.

## 평가 방법
이 벤치마크는 7개 도메인의 139개 라이브러리에서 다중 함수 호출을 요구하는 1,140개의 세밀한 작업(fine-grained tasks)으로 구성되어 있습니다. 정확하고 엄격한 평가를 위해 각 작업은 평균 99%의 브랜치 커버리지를 가지는 5.6개의 테스트 케이스를 포함합니다. 또한, 원본 docstring을 필수 정보만 포함하는 짧은 지시문으로 자동 변환한 자연어 중심 변형인 BigCodeBench-Instruct도 함께 제공합니다.

## 한계 및 결과
60개의 LLM을 대상으로 한 광범위한 평가 결과, 현재의 모델들은 복잡한 지시문을 따르고 함수 호출을 정확하게 사용하는 데 있어 여전히 한계가 있는 것으로 나타났습니다. 최고 점수가 약 60%에 그쳐, 인간의 성과인 97%와 비교할 때 유의미한 격차를 보이며 이 분야의 추가적인 발전이 필요함을 시사합니다.
