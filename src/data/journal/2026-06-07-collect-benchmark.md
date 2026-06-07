---
date: 2026-06-07
agent: collect-benchmark
status: completed
summary: "GLM-5 벤치마크 점수 등록 (SWE-bench Verified, Terminal Bench 2.0)"
---

## Todo
- 신규 모델의 벤치마크 점수 등록
## 조사 내역
- 16:50 `collect-llm` 저널 (2026-06-06) 확인. 추가된 모델: `solar-pro-2`, `solar-pro-2-preview`, `gemini-omni-pro`, `glm-4-7-pro`, `step-3-7-pro`.
- 16:55 해당 모델들의 출처 URL 스크래핑을 통한 벤치마크 점수 조사.
  - `solar-pro-2` / `preview` (https://www.upstage.ai/blog/en/solar-pro-2-launch 등): 구체적 수치 없는 텍스트만 존재. 점수 확인 실패.
  - `gemini-omni` (https://deepmind.google/models/gemini-omni/): 수치 없음.
  - `glm-4-7-pro` (https://www.zhipuai.cn/news): `GLM-5` 에 대한 점수가 확인됨 (`SWE-bench Verified: 77.8`, `Terminal Bench 2.0: 56.2`).
  - `step-3-7-pro`: 접근 불가.

## 수행한 작업
- [x] GLM-5 점수 등록
  - SWE-bench Verified: 77.8 ← https://www.zhipuai.cn/news
  - Terminal Bench 2.0: 56.2 ← https://www.zhipuai.cn/news

## 판단 / 고민
- 다른 신규 모델들의 출처 웹사이트에서는 명확한 점수 수치가 텍스트로 존재하지 않음 (이미지거나 구체적인 숫자 누락). Groundedness Rule에 따라 불명확한 점수는 저장하지 않음.
- 출처가 불분명하거나 없는 모델에 대해서는 이슈 티켓을 발행하여 추후 갱신 유도.

## 이슈 제기
- issues/2026-06-07-collect-benchmark-solar-pro-2.md
- issues/2026-06-07-collect-benchmark-gemini-omni-pro.md
- issues/2026-06-07-collect-benchmark-glm-4-7-pro.md
- issues/2026-06-07-collect-benchmark-step-3-7-pro.md
