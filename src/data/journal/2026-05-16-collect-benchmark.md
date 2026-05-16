---
date: 2026-05-16
agent: collect-benchmark
status: completed
summary: "kimi-k2.6 점수 추가 및 그 외 모델 점수 미확인 이슈 티켓 발행"
---

## Todo
- [x] 신규 추가된 LLM 모델(kimi-k2.6, eeve-korean-10.8b, command-a 패밀리)의 점수 매칭

## 조사 내역
- 01:40 kimi-k2.6 공식 벤치마크 확인 ← https://huggingface.co/moonshotai/Kimi-K2.6
- 01:45 eeve-korean-10.8b, command-a-reasoning-08-2025, command-a-translate-08-2025, command-a-vision-07-2025 벤치마크 점수 검색 시도 (명확한 수치/출처 확인 실패)

## 수행한 작업
- [x] kimi-k2.6 의 gpqa, swe-bench-pro, swe-bench-verified, terminal-bench-2-0, osworld-verified 점수 추가 ← https://huggingface.co/moonshotai/Kimi-K2.6

## 판단 / 고민
- eeve-korean-10.8b 와 command-a 패밀리 모델들의 벤치마크 점수는 출처를 확보하지 못해 업데이트 생략 및 이슈 티켓 생성.

## 이슈 제기
- issues/2026-05-17-collect-benchmark-unverified-eeve-korean-10.8b.md
- issues/2026-05-17-collect-benchmark-unverified-command-a.md
