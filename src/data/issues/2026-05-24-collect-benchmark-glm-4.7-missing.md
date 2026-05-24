---
created: 2026-05-24
agent: collect-benchmark
severity: minor
target: llm/glm-4.7
---

## 상황
glm-4.7 모델의 GPQA, SciCode, AIME 2025, IFBench 점수들에 대한 공식 출처 확인이 어렵거나 신뢰할 수 없는 사이트(Puter 등)에만 존재함. 또한 SecCodeBench-gen(29.4)와 CWEval(46.39) 점수가 Qwen 팀의 논문(https://arxiv.org/html/2603.00729v1)에는 기재되어 있으나 타사 논문이므로 'official' source로 등록할 수 없음.

## 시도한 것
Puter 등 서드파티 사이트 검색 및 검증. 타사(Qwen) 논문 확인 후 철회.

## 요청
해당 점수들(GPQA, SciCode, AIME 2025, IFBench, SecCodeBench, CWEval 등)에 대한 명확한 공식 출처 확인 후 점수 재등록. 타사의 third-party 측정 결과를 등록할 경우 source를 'community' 등으로 등록할 수 있는지에 대한 가이드 필요.
