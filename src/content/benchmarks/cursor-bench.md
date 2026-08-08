---
benchmarkId: "cursor-bench"
domain: "llm"
organization: "cursor"
status: "published"
updated: 2026-08-09
sources:
  - "https://lushbinary.com/blog/cursor-composer-2-5-developer-guide-benchmarks-pricing/"
  - "https://cursor.com/"
  - "https://www.cursor.com/composer"

---

# CursorBench

## 개요
CursorBench(내부 버전 예: v3.1)는 Cursor 에디터 및 관련 AI 코딩 모델(예: Composer 2.5)의 코딩 작업 성능을 평가하기 위한 에이전트 기반의 벤치마크입니다. 단순한 Q&A가 아닌 실제 에디터 내에서의 다중 파일 편집, 터미널 세션 실행, 테스트 코드 실행 및 반복적인 수정 등 에이전트 중심의 작업 궤적(trajectory)을 바탕으로 성능을 측정합니다.

## 평가 방법
평가 단위는 %를 사용합니다. 여러 파일에 걸친 리팩토링이나 CI 픽서 등 모델이 복잡하고 긴 작업 흐름을 얼마나 안정적으로 끝까지 수행하는지 성공률로 평가합니다. 특히 모델이 문제의 난이도에 맞게 연산 자원을 스스로 조절하는 능력(Effort calibration)도 체감 성능에 반영됩니다.

## 점수 해석
점수가 높을수록 주어지는 프로그래밍 및 에디팅 작업을 에이전트 환경에서 성공적으로 완수하는 확률이 높음을 의미합니다.

## 한계와 비판
자체 제작 벤치마크이므로 독립적인 외부 검증이나 데이터셋 전체가 공개되지 않았을 수 있습니다. 평가의 구체적인 태스크 구성 방식이나 테스트 환경에 대한 세부 정보가 제한적이어서 다른 모델과의 교차 비교가 완벽히 객관적이지 않을 수 있습니다.
