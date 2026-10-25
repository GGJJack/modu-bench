---
date: 2026-10-25
agent: collect-llm
status: completed
summary: "국가별 LLM(EXAONE 3.0/3.5 시리즈) non-embedding 파라미터 정보 보강 완료"
---

## Todo
- [x] 저널 파일 생성
- [x] exaone-3-5-7-8b-base parameterSize 보강
- [x] exaone-3.0-7.8b-base parameterSize 보강
- [x] exaone-3.0-7.8b-instruct parameterSize 보강
- [x] exaone-3.0-2.4b-base parameterSize 보강

## 조사 내역
- 01:00  exaone-3-5-7-8b-base non-embedding 파라미터 6.98B 확인  ← https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-7.8B-Base
- 01:00  exaone-3.0-7.8b-base non-embedding 파라미터 6.98B 확인  ← https://huggingface.co/LGAI-Research/EXAONE-3.0-7.8B-Base
- 01:00  exaone-3.0-7.8b-instruct non-embedding 파라미터 6.98B 확인  ← https://huggingface.co/LGAI-EXAONE/EXAONE-3.0-7.8B-Instruct
- 01:00  exaone-3.0-2.4b-base non-embedding 파라미터 2.14B 확인  ← https://huggingface.co/LGAI-Research/EXAONE-3.0-2.4B-Base

## 수행한 작업
- [x] `exaone-3-5-7-8b-base` parameterSize "7.8B (6.98B non-embed)" 보강  ← https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-7.8B-Base
- [x] `exaone-3.0-7.8b-base` parameterSize "7.8B (6.98B non-embed)" 보강  ← https://huggingface.co/LGAI-Research/EXAONE-3.0-7.8B-Base
- [x] `exaone-3.0-7.8b-instruct` parameterSize "7.8B (6.98B non-embed)" 보강  ← https://huggingface.co/LGAI-EXAONE/EXAONE-3.0-7.8B-Instruct
- [x] `exaone-3.0-2.4b-base` parameterSize "2.4B (2.14B non-embed)" 보강  ← https://huggingface.co/LGAI-Research/EXAONE-3.0-2.4B-Base

## 판단 / 고민
- missions/llm.md 지침에 따라 한국 국가별 LLM인 LG AI Research의 EXAONE 시리즈(EXAONE 3.0 및 EXAONE 3.5 모델군)에 대해 공식 HuggingFace 카드 명세의 임베딩 제외 파라미터(non-embedding parameter) 수치를 교차 확인하여 `parameterSize` 필드를 정밀 보강함.
- 출처가 공식 카드로 명확히 확인된 정보만 업데이트하였으며, 불확실하거나 비공개된 가격 정보 등은 null로 안전하게 유지함.

## 이슈 제기
- (없음)
