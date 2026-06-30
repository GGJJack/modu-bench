---
date: 2026-06-30
agent: collect-benchmark
status: completed
summary: "신규 모델 Sakana Fugu 및 MiniMax M3 관련 벤치마크 점수 매칭 시도, 추출 가능 텍스트 점수 없음"
---

## Todo
- [x] 신규 등록된 LLM(sakana-fugu-ultra, sakana-fugu-mini, minimax-m3) 모델의 벤치마크 점수 매칭 시도

## 조사 내역
- 01:30 Sakana AI Fugu-release 페이지 확인 (텍스트 기반 점수 없음, 이미지로만 제공) ← https://sakana.ai/fugu-release/
- 01:35 Sakana AI Fugu Technical Report PDF 확인 ( pdftotext 로 점수 추출 시도하였으나 점수 텍스트 확인 안 됨) ← https://github.com/SakanaAI/fugu/blob/main/Fugu_technical_report.pdf
- 01:40 MiniMax M3 등 추가 조사하였으나 벤치마크 매칭 가능한 새로운 점수 소스 찾지 못함.

## 수행한 작업
- [x] 텍스트 기반 벤치마크 추출 가능한 점수 부재로 인한 점수 등록 없음.

## 판단 / 고민
- Sakana Fugu 모델의 점수들이 이미지 형태로만 제공되고 텍스트 추출이 불가능하여 점수를 등록하지 않음 (수동 전사 및 추측 금지 룰 적용).

## 이슈 제기
- (없음)
