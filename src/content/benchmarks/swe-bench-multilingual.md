---
benchmarkId: swe-bench-multilingual
domain: llm
status: published
updated: 2026-06-04
sources:
  - https://www.swebench.com/multilingual-leaderboard.html
  - https://arxiv.org/abs/2310.06770
paperUrl: https://arxiv.org/abs/2310.06770
highlights:
  - "C, C++, Go, Java, JavaScript/TypeScript, PHP, Ruby, Rust 등 9개 프로그래밍 언어 평가"
  - "42개 실제 GitHub 리포지토리에서 추출된 300개의 과제"
  - "잘 정의된 문제와 명확한 테스트 기준을 갖춘 과제로만 엄선"
---

# SWE-bench Multilingual

## 개요
SWE-bench Multilingual은 소프트웨어 엔지니어링 벤치마크인 SWE-bench를 확장하여 다양한 프로그래밍 언어로 작성된 코드베이스에서 대형 언어 모델의 문제 해결 능력을 평가하기 위해 고안되었습니다. 기존 SWE-bench가 주로 Python에 집중했다면, 이 벤치마크는 C, C++, Go, Java, JavaScript/TypeScript, PHP, Ruby, Rust 등 총 9개의 주요 프로그래밍 언어를 포괄합니다.

## 평가 방법
이 벤치마크는 42개의 실제 오픈 소스 리포지토리(웹 프레임워크, 데이터 처리 도구, 코어 유틸리티 등)에서 추출한 300개의 큐레이션된 과제(Tasks)로 구성됩니다. 모델은 각 과제에 대해 주어진 이슈 설명을 바탕으로 문제를 해결하는 패치(Patch)를 생성해야 하며, 생성된 패치가 문제의 명확한 테스트 기준을 통과하는지 여부로 평가됩니다. 평가 단위는 %를 사용합니다.

## 점수 해석
점수는 전체 300개 과제 중 성공적으로 해결된(Resolved) 인스턴스의 비율(%)로 보고됩니다.
