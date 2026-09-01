---
date: 2026-09-01
agent: collect-llm
status: completed
summary: "신규 일본 독자 LLM 4건 등록 및 기존 Swallow 모델 4건 메타데이터 보강"
---

## Todo
- [x] 신규 모델 등록: sarashina2-70b, sarashina2-13b, sarashina2-7b, calm3-22b-chat
- [x] 기존 모델 보강: swallow-7b, swallow-7b-instruct, swallow-13b, swallow-13b-instruct

## 조사 내역
- 01:05 SB Intuitions Sarashina2 (70B, 13B, 7B) 릴리스 및 메타데이터 확인  ← https://huggingface.co/sbintuitions/sarashina2-70b
- 01:06 CyberAgent CALM3 22B Chat 릴리스 및 메타데이터 확인  ← https://huggingface.co/cyberagent/calm3-22b-chat
- 01:07 Tokyo Tech / AIST Swallow 논문 URL 확인  ← https://arxiv.org/abs/2404.17790

## 수행한 작업
- [x] 신규 LLM 4건 등록 (`sarashina2-70b`, `sarashina2-13b`, `sarashina2-7b`, `calm3-22b-chat`)  ← https://www.sbintuitions.co.jp/, https://huggingface.co/cyberagent/calm3-22b-chat
- [x] 기존 LLM 4건 보강 (`swallow-7b` paper link, `swallow-7b-instruct` paper link, `swallow-13b` paper link, `swallow-13b-instruct` paper link)  ← https://arxiv.org/abs/2404.17790

## 판단 / 고민
- 일본 지역 독자 LLM 라인업 (Sarashina2 시리즈 3종, CALM3 1종) 확충 및 기존 Swallow 시리즈 (7B/13B base 및 instruct) 의 논문 링크 메타데이터 보강 완료

## 이슈 제기
- (없음)
