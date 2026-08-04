---
date: 2026-08-05
agent: collect-benchmark
status: completed
summary: "baichuan-4, amazon-nova-2-lite, amazon-nova-2-omni 모델 벤치마크 출처 이슈 티켓 생성"
---

## Todo
- [x] baichuan-4 벤치마크 점수 수집 시도 ➔ 공식 출처 데이터 누락으로 이슈 생성
- [x] amazon-nova-2-lite 벤치마크 점수 수집 시도 ➔ 공식 블로그 구체적 점수 누락으로 이슈 생성
- [x] amazon-nova-2-omni 벤치마크 점수 수집 시도 ➔ 공식 Pricing 페이지 점수 누락으로 이슈 생성

## 조사 내역
- 01:30 baichuan-4 공식 홈페이지(https://www.baichuan-ai.com/) 벤치마크 점수 탐색 ➔ 실패
- 01:32 amazon-nova-2-lite 공식 블로그(https://aws.amazon.com/blogs/aws/introducing-amazon-nova-2-lite-a-fast-cost-effective-reasoning-model/) 벤치마크 점수 탐색 ➔ 실패
- 01:35 amazon-nova-2-omni 공식 홈페이지(https://aws.amazon.com/bedrock/pricing/) 벤치마크 점수 탐색 ➔ 실패

## 수행한 작업
- [x] `baichuan-4` 모델의 벤치마크 수집을 위한 이슈 티켓 생성 ➔ src/data/issues/2026-08-05-collect-benchmark-baichuan-4.md
- [x] `amazon-nova-2-lite` 모델의 벤치마크 수집을 위한 이슈 티켓 생성 ➔ src/data/issues/2026-08-05-collect-benchmark-amazon-nova-2-lite.md
- [x] `amazon-nova-2-omni` 모델의 벤치마크 수집을 위한 이슈 티켓 생성 ➔ src/data/issues/2026-08-05-collect-benchmark-amazon-nova-2-omni.md

## 판단 / 고민
- MMLU, HumanEval 등의 벤치마크를 탐색하려 했으나 공식 링크가 없거나 점수가 포함되지 않아 데이터 수집이 불가하다고 판단하여 이슈 티켓을 생성함.

## 이슈 제기
- issues/2026-08-05-collect-benchmark-baichuan-4.md
- issues/2026-08-05-collect-benchmark-amazon-nova-2-lite.md
- issues/2026-08-05-collect-benchmark-amazon-nova-2-omni.md
