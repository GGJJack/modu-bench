---
benchmarkId: bfcl-v3
domain: llm
status: published
updated: 2026-07-13
organization: uc-berkeley
sources:
  - https://gorilla.cs.berkeley.edu/blogs/13_bfcl_v3_multi_turn.html
highlights:
  - "멀티 턴 및 멀티 스텝 함수 호출 능력을 평가하는 벤치마크"
  - "파일 시스템이나 예약 시스템 등 API 시스템의 실제 상태를 확인하여 모델의 응답을 평가"
---

# Berkeley Function Calling Leaderboard v3

## 개요
BFCL(Berkeley Function-Calling Leaderboard) V3는 멀티 턴(multi-turn) 및 멀티 스텝(multi-step) 함수 호출 능력을 도입하여 에이전트 성능을 평가하는 벤치마크입니다. AI가 계획을 수립하고 정보를 수집하며 여러 작업을 연결해야 하는 실제 상황을 모방합니다.

## 평가 방법
단일 턴, 단일 스텝 함수 호출을 넘어, 모델이 사용자 질문과 상호 작용하며 (멀티 턴), 응답을 더 작은 부분으로 나누어 처리 (멀티 스텝) 할 수 있는지 평가합니다. 평가 방법 또한 기존의 AST(Abstract Syntax Tree)를 이용한 함수 매개변수 분석에서 벗어나, 모델이 함수를 실행한 후 파일 시스템이나 예약 시스템과 같은 API 시스템의 실제 상태를 확인하여 검증하는 방식으로 개선되었습니다.

## 점수 해석
% 단위로 평가됩니다. 높은 점수는 모델이 복잡한 멀티 턴 및 멀티 스텝 함수 호출 시나리오에서 API를 정확하게 활용하고 의도한 상태 변경을 성공적으로 수행했음을 의미합니다.

## 한계와 비판
모델의 응답을 평가하기 위해 실제 API 시스템의 상태를 확인해야 하므로, 평가 환경 구성이 복잡해질 수 있습니다.
