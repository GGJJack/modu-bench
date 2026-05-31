---
benchmarkId: livecodebench-v6
domain: llm
status: published
updated: 2026-05-31
sources:
  - "https://arxiv.org/abs/2403.07974"
  - "https://livecodebench.github.io/"
paperUrl: "https://arxiv.org/abs/2403.07974"
highlights:
  - "시간의 흐름에 따른 성능 평가 (Contamination 방지)"
  - "코드 생성, 자가 복구(Self-repair), 테스트 코드 실행 등을 포함한 총체적 평가"
---

# LiveCodeBench v6

## 개요
LiveCodeBench는 대규모 언어 모델(LLM)의 코드 작성 및 문제 해결 능력을 종합적으로 평가하기 위해 고안된 벤치마크입니다. 특히, 평가 데이터가 모델 학습 과정에 포함되는 오염(Data Contamination) 문제를 방지하기 위해 르트코드(LeetCode), AtCoder, Codeforces 등의 플랫폼에서 지속적으로 업데이트되는 최신 문제를 수집하여 시간 흐름 기반의 평가를 수행합니다.

## 평가 방법
LiveCodeBench는 단순한 코드 생성을 넘어 다양한 코드 관련 시나리오를 평가합니다:
- **코드 생성 (Code Generation)**: 주어진 문제 설명을 바탕으로 올바른 솔루션 코드를 작성합니다.
- **자가 복구 (Self-Repair)**: 오답 코드와 오류 메시지가 주어졌을 때 이를 수정하여 정답 코드를 도출합니다.
- **코드 실행 (Code Execution)**: 코드를 실행했을 때의 출력을 예측합니다.
- **테스트 생성 (Test Generation)**: 솔루션 코드의 올바름을 검증할 수 있는 테스트 케이스를 생성합니다.

평가 문제는 LeetCode, AtCoder, Codeforces 등에서 수집된 실제 프로그래밍 대회 문제들로 구성되며, 난이도별 분류와 함께 숨겨진 테스트 케이스를 사용한 엄격한 평가가 이루어집니다.

## 점수 해석
- `pass@1` 지표를 주로 사용하며, 모델이 한 번의 시도만으로 정확한 정답을 출력하는지 평가합니다.
- 높은 점수일수록 모델이 최신 프로그래밍 문제에 대한 적응력과 복잡한 문제 해결 능력이 우수함을 의미합니다.

## 한계와 비판
- 지속적인 문제 업데이트가 필요하며, 수집된 문제의 난이도 분포가 시기에 따라 일정하지 않을 수 있습니다.
- 특정 프로그래밍 대회 플랫폼의 문제 형식에 편향될 가능성이 존재합니다.
