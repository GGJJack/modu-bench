---
benchmarkId: mcp-atlas
domain: llm
status: draft
updated: 2026-05-21
sources:
  - https://arxiv.org/abs/2602.00933
  - https://scale.com/leaderboard/mcp_atlas
  - https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-5/
organization: scale-ai
paperUrl: https://arxiv.org/abs/2602.00933
highlights:
  - "36개 MCP 서버 및 220개 도구 활용 평가"
  - "1,000개의 다단계 현실 워크플로우 태스크"
  - "도구 식별, 호출, 구문 검증, 오류 복구 등 포괄적 측정"
---

# MCP Atlas

## 개요
MCP Atlas는 언어 모델이 Model Context Protocol (MCP)를 통해 외부 도구를 발견하고 호출하는 역량을 평가하는 대규모 벤치마크입니다. 36개의 실제 MCP 서버와 220개의 도구를 기반으로 현실적이고 다단계인 워크플로우 시나리오를 구성합니다.

## 평가 방법
단순한 도구 호출이 아닌 올바른 도구를 찾고 매개변수를 조정하며, 에러를 복구하고 결과를 종합하는 능력을 측정합니다. 총 1,000개의 태스크(공개 500개, 비공개 500개)가 제공되며, 태스크 당 3~6회의 도구 호출이 요구됩니다. 평가는 최종 답변의 사실적 만족도(claims-based rubric)를 기준으로 이루어집니다.

## 한계와 비판
모델이 도구를 효과적으로 사용하지 못하거나 태스크의 의도를 제대로 파악하지 못할 경우 낮은 통과율을 기록할 수 있으며, 이는 모델의 논리적 추론 능력이 뛰어나더라도 실질적인 도구 기반 에이전트 능력에서는 약점을 보일 수 있음을 시사합니다.
