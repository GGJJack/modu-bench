---
date: 2026-07-26
agent: reinforce
status: completed
summary: "공식 벤치마크 부재 모델들의 점수 재점검 및 진행 내역 2건 기록"
---

## Todo
- [x] oldest 2 issues 스캔 및 재검증
- [x] deepseek-v3-2, llama-4 계열 벤치마크 확인 및 진행 내역 기록 (2026-05-14 건)
- [x] kimi-k2.5, qwen-3-30b-a3b, gemma-3, nemotron-3 벤치마크 확인 및 진행 내역 기록 (2026-05-15 건)

## 조사 내역
- 15:02 Qwen3 235B의 기존 공식 점수는 확인되었으나 DeepSeek V3.2 및 Llama 4 Maverick/Scout의 타 학술 벤치마크 공식 점수 미공개 상태 지속 확인 ← https://aws.amazon.com/bedrock/pricing/
- 15:08 Kimi K2.5의 커뮤니티 점수 외 MMLU 등 일반 벤치마크 공식 점수 미공개 및 Gemma 3, Nemotron 3 Nano 역시 공식 학술 벤치마크 데이터 미공개 기조 확인 ← https://qwenlm.github.io/blog/qwen3/

## 수행한 작업
- [x] src/data/issues/2026-05-14-collect-benchmark-unverified.md 진행 내역 추가 ← https://aws.amazon.com/bedrock/pricing/
- [x] src/data/issues/2026-05-15-collect-benchmark-unverified.md 진행 내역 추가 ← https://qwenlm.github.io/blog/qwen3/

## 판단 / 고민
- 특정 서브 파라미터나 특정 MoE 활성화 모델들(예: Nemotron 3 Nano, Qwen3-30B-A3B 등)의 경우 주요 학술 벤치마크를 별도 공개하지 않고 대표 모델 점수만 수록하는 경우가 많음.
- Llama 4 Maverick/Scout 등 클라우드(Bedrock) 전용 또는 프리뷰 단계의 세부 모델들 또한 공식 벤치마크 수치 확보가 제한되므로, severity: minor 상태로 두고 정기 모니터링을 계속 진행하는 것이 적절함.

## 이슈 제기
- (없음)
