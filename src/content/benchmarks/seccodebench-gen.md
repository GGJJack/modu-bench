---
benchmarkId: seccodebench-gen
domain: llm
status: published
updated: 2026-05-29
sources:
  - https://github.com/alibaba/sec-code-bench
  - https://arxiv.org/abs/2602.15485
organization: alibaba
paperUrl: https://arxiv.org/abs/2602.15485
highlights:
  - "Secure code generation evaluation"
  - "Based on historical vulnerabilities"
  - "Focuses on Agentic Coding Tools"
---

# SecCodeBench (Generation)

## 개요
SecCodeBench는 AI가 생성한 코드의 보안을 평가하기 위한 벤치마크 제품군으로, 특히 최신 Agentic Coding Tool을 위해 설계되었습니다. 알리바바 그룹(Alibaba Group)이 칭화대, 저장대, 푸단대, 베이징대와 협력하여 개발했습니다. 대부분의 테스트 케이스는 알리바바 내부의 익명화된 실제 역사적 취약점을 기반으로 하며, 단순한 코드 스니펫이 아닌 완전하고 실행 가능한 프로젝트 형태로 제공됩니다. 현재 5개 프로그래밍 언어(Java, C/C++, Python, Go, Node.js)에 걸쳐 98개의 테스트 케이스를 포함하고 있으며, 22개의 CWE 유형을 다룹니다.

## 평가 방법
평가 단위는 pass@1을 사용합니다. '기능 우선(Functionality-First)' 원칙에 따라, 생성된 코드는 보안 평가를 받기 전에 먼저 모든 기능 테스트를 통과해야 합니다. 보안 평가는 Proof-of-Concept (PoC) 익스플로잇을 사용한 동적 실행 기반 검증을 우선시합니다. 동적 실행으로 커버할 수 없는 복잡한 시나리오의 경우, 도메인 특화 보안 지식이 주입된 LLM-as-a-Judge를 도입합니다.

## 점수 해석
점수가 높을수록 모델이 더 안전한 코드를 생성할 수 있음을 의미합니다. 최종 점수는 pass@1 결과의 가중합으로 계산되며, 테스트 시나리오(네이티브 vs. 보안 인식 모드 비율 4:1)와 취약점의 빈도 및 심각도를 종합적으로 고려합니다.
