---
benchmarkId: gdpval-aa
domain: llm
status: published
updated: 2026-06-17
sources:
  - https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/
  - https://artificialanalysis.ai/models/claude-3-7-sonnet
organization: artificial-analysis
highlights:
  - "44개 직업군 및 9개 주요 산업에 걸친 실제 지식 노동 측정"
  - "다양한 형태(문서, 슬라이드, 스프레드시트 등)의 실제 업무 산출물 생성 평가"
  - "Elo 기반 순위 시스템 활용"
---

# GDPval-AA

## 개요
GDPval-AA는 44개 직업군 및 9개 주요 산업에 걸쳐 에이전트의 실제 태스크 해결 능력을 측정하는 벤치마크입니다.

## 평가 방법
모델은 에이전트 루프 내에서 웹 브라우징과 셸 접근 권한을 받아 문서 작성, 재무 제표 분석 등과 같은 업무를 수행하게 되며, 쌍대 비교(pairwise comparisons)를 통해 도출된 Elo 점수로 평가됩니다.

## 한계 및 참고
해당 평가는 Artificial Analysis 등의 서드파티 평가 기관을 통해 이루어지며, 모델의 실질적인 워크플로우 수행 능력을 평가합니다.

## 점수 해석
Elo 점수 체계를 사용하여 모델 간의 상대적인 성능을 측정합니다. 높은 Elo 점수는 해당 모델이 다른 모델들에 비해 실제 에이전트 태스크 환경에서 더 우수한 성능을 보임을 나타냅니다.
