---
benchmarkId: bfcl-v4
domain: llm
status: published
updated: 2026-07-08
organization: uc-berkeley
sources:
  - https://gorilla.cs.berkeley.edu/leaderboard.html
  - https://gorilla.cs.berkeley.edu/blogs/8_berkeley_function_calling_leaderboard.html
highlights:
  - "다양한 프로그래밍 언어 지원 (Python, Java, JavaScript 등)"
  - "다중 및 병렬 함수 호출 평가 포함"
  - "오류 대응 (함수 연관성 감지) 평가"
---

# BFCLv4 (버클리 함수 호출 리더보드 v4)

## 개요
BFCL(Berkeley Function Calling Leaderboard)은 대규모 언어 모델(LLM)이 외부 함수나 도구를 얼마나 정확하고 적절하게 호출할 수 있는지를 체계적으로 평가하기 위해 UC Berkeley에서 개발한 벤치마크 리더보드입니다. 최신 v4 버전은 단순한 도구 사용을 넘어서는 에이전트(Agentic) 능력을 평가하는 데 초점을 맞추고 있으며, 단일 호출뿐만 아니라 복잡한 환경에서의 모델의 대응 능력을 검증합니다.

## 평가 방법
수천 개의 질문-함수-답변 쌍으로 구성된 데이터셋을 통해 평가가 진행됩니다. 파이썬(Python), 자바(Java), 자바스크립트(JavaScript) 및 REST API 등 다양한 환경에서의 함수 호출 능력을 측정합니다. 평가 항목에는 단일 함수 호출뿐만 아니라, 여러 함수 중 적절한 것을 선택하는 '다중 호출(Multiple)', 여러 함수를 동시에 실행해야 하는 '병렬 호출(Parallel)', 그리고 주어진 상황에 맞는 함수가 없을 때 에러 메시지를 반환하거나 실행을 거부하는 '함수 연관성 감지(Relevance Detection)' 능력이 포함됩니다.

## 점수 해석
리더보드의 점수는 전체 평가 시나리오에서 모델이 함수를 올바르게 호출하고 예상된 결과를 반환한 비율(%)을 나타냅니다. 점수가 높을수록 복잡한 워크플로우나 에이전트 기반 시스템에서 모델이 도구를 활용하여 사용자의 의도를 더 안정적으로 수행할 수 있음을 의미합니다.
