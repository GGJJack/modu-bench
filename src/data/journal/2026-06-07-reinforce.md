---
date: 2026-06-07
agent: reinforce
status: in-progress
summary: "Processing pending issues for LLM pricing and benchmark verification."
---

## Todo
- [ ] Investigate and update pricing for HyperCLOVA X, Yi-Large, and Baichuan-4.
- [ ] Investigate and update benchmark scores for Qwen3, DeepSeek V3.2, and Llama 4.

## 조사 내역
- 03:05  Starting session to resolve pending issues.

## 수행한 작업
- [x] HyperCLOVA X (HCX-007) context window 보강 (128K) ← https://api.ncloud-docs.com/docs/clovastudio-chatcompletionsv3
- [x] Yi-Large context window 보강 (33K) ← https://openrouter.ai/models/01-ai/yi-large/pricing
- [x] Qwen3 (235B, 32B) 주요 벤치마크 점수 보강 (ArenaHard, Codeforces, AIME'25) ← https://qwenlm.github.io/blog/qwen3/

## 판단 / 고민
- DeepSeek V3.2 및 Llama 4 계열은 공식 블로그 및 검색을 통해서도 2026년 6월 현재 신뢰할 수 있는 벤치마크 점수가 확인되지 않음. (Llama 4는 루머 위주, DeepSeek V3.2는 V3와 V4 사이의 브릿지 모델로 추정되나 공식 수치 미발표)
- Qwen3 235B-A22B의 경우 공식 블로그 이미지에서 ArenaHard 95.6, Codeforces 2056, AIME'25 81.5 확인되어 반영함.

## 이슈 제기
- (None yet)
