---
date: 2026-10-23
agent: collect-llm
status: completed
summary: "국가별 LLM(Solar, EXAONE) 누락 메타데이터(contextWindow, parameterSize) 보강 완료"
---

## Todo
- [x] 저널 파일 생성
- [x] solar-10.7b-instruct contextWindow 보강
- [x] solar-pro-preview-instruct contextWindow 보강
- [x] exaone-3-5-7-8b-instruct parameterSize 및 contextWindow 보강

## 조사 내역
- 19:45  solar-10.7b-instruct Context Window 4,096 확인  ← https://huggingface.co/Upstage/SOLAR-10.7B-Instruct-v1.0
- 19:46  solar-pro-preview-instruct Context Window 4,096 확인  ← https://huggingface.co/upstage/solar-pro-preview-instruct
- 19:47  exaone-3-5-7-8b-instruct Context Length 32,768, non-embed 파라미터 6.98B 확인  ← https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-7.8B-Instruct

## 수행한 작업
- [x] `solar-10.7b-instruct` contextWindow 4096 보강  ← https://huggingface.co/Upstage/SOLAR-10.7B-Instruct-v1.0
- [x] `solar-pro-preview-instruct` contextWindow 4096 보강  ← https://huggingface.co/upstage/solar-pro-preview-instruct
- [x] `exaone-3-5-7-8b-instruct` parameterSize "7.8B (6.98B non-embed)" 및 contextWindow 32768 보강  ← https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-7.8B-Instruct

## 판단 / 고민
- missions/llm.md 지침에 따라 한국 국가별 LLM(Solar, EXAONE)의 누락된 null 필드(contextWindow, parameterSize)를 공식 HuggingFace 카드 명세에서 교차 검증하여 보강함.
- 출처가 명확히 확인된 정보만 업데이트하였으며, 불확실한 가격 정보 등은 null로 유지함.

## 이슈 제기
- (없음)
