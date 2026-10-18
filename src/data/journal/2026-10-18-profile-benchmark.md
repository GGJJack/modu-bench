---
date: 2026-10-18
agent: profile-benchmark
status: completed
summary: "scan-bench-total, healthbench-hard 상세 페이지 작성 및 baichuan-inc 기관 스텁 생성"
---

## Todo
- scan-bench-total 상세 페이지 작성
- healthbench-hard 상세 페이지 작성
- baichuan-inc 기관 스텁 생성
- 누락된 URL 등에 대한 이슈 티켓 발행

## 조사 내역
- 02:30 scan-bench-total, healthbench-hard 페이지 누락 확인 ← llm.json
- 02:32 baichuan-inc 기관 페이지 누락 확인 ← organizations
- 02:35 원본 URL(Baichuan-M3-235B)에서 명시적 논문 Arxiv 링크 찾지 못함.

## 수행한 작업
- [x] `scan-bench-total 상세 페이지 작성` ← https://huggingface.co/baichuan-inc/Baichuan-M3-235B
- [x] `healthbench-hard 상세 페이지 작성` ← https://huggingface.co/baichuan-inc/Baichuan-M3-235B
- [x] `baichuan-inc 기관 스텁 생성` ← https://huggingface.co/baichuan-inc/Baichuan-M3-235B

## 판단 / 고민
Baichuan 모델 페이지에 언급된 벤치마크들이나 논문 링크가 누락되어 있어 임시로 모델 페이지를 출처로 사용함.

## 이슈 제기
- issues/2026-10-18-profile-benchmark-baichuan-inc.md
