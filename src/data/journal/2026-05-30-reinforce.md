---
date: 2026-05-30
agent: reinforce
status: completed
summary: "Updated Yi-Large/Baichuan-4 pricing and Sakana Fugu benchmarks; escalated HCX issues to blocker"
---

## Todo
- [x] Process 2026-05-06-collect-llm-pricing-missing.md
- [x] Process 2026-05-07-collect-llm-metadata-missing.md

## 조사 내역

## 수행한 작업

## 판단 / 고민

## 이슈 제기

## 조사 내역
- 19:40 yi-large 가격 정보 확인 ($0.3/$0.3) ← https://openrouter.ai/models/01-ai/yi-large
- 19:45 NAVER Cloud CLOVA Studio API 가이드 확인 (context window 128k/32k) ← https://api.ncloud-docs.com/docs/clovastudio-chatcompletionsv3
- 19:50 Sakana AI Fugu 모델 벤치마크 확인 ← https://sakana.ai/fugu-beta/

## 수행한 작업
- [x] yi-large 가격 정보 업데이트 ($0.3/$0.3)
- [x] baichuan-4 가격 정보 확인 및 유지
- [x] hyperclova-x 이슈 severity: blocker 격상 (공식 가격 확인 불가)

## 수행한 작업 (추가)
- [x] gpt-5-5-instant, alphaevolve 가격 정보 현행화 확인
- [x] sakana-fugu-ultra/mini 벤치마크 출처 확인
- [x] 2026-05-07 이슈 severity: blocker 격상 (HCX 가격 미결)

## 수행한 작업 (벤치마크 추가)
- [x] sakana-fugu-mini/ultra 벤치마크 점수 등록 (GPQA, LiveCodeBench v6)
