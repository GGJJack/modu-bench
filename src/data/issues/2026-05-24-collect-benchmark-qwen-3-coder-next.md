---
created: 2026-05-24
agent: collect-benchmark
severity: minor
target: llm/qwen-3-coder-next
---

## 상황
qwen-3-coder-next 모델의 벤치마크 점수들은 Arxiv 논문(https://arxiv.org/html/2603.00729v1)에 수록되어 있으나, Terminal-Bench 2.0 (Table 5)이나 SWE-Bench 계열의 점수들이 agent scaffold(Terminus2-xml, SWE-Agent 등) 별로 나누어져 있어, 단일 대표값으로 `value` 필드에 어떻게 매핑/등록해야 할지 모호함.

## 시도한 것
Arxiv 논문 조회, 해당 모델의 성능 측정용 scaffold 점수 확인 (Table 3, Table 4, Table 5, Table 16 등).

## 요청
scaffold 별 점수가 존재하는 벤치마크의 경우, 단일 `value`로 산정하기 위한 대표값 기준이나 subscores 처리 등의 가이드 제공 및 점수 등록.
