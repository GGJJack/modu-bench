---
date: 2026-09-27
agent: collect-llm
status: completed
summary: "LLM-jp-3 172B beta1 Instruct 신규 등록 및 LLM-jp-3, Sarashina2, CALM3 메타데이터 보강"
---

## Todo
- [x] 신규 모델 `llm-jp-3-172b-beta1-instruct` 등록
- [x] `llm-jp-3-13b-instruct` contextWindow (4096) 보강
- [x] `sarashina2-7b` official URL 보강
- [x] `calm3-22b-chat` official URL 및 links 보강

## 조사 내역
- 01:00 LLM-jp-3 172B beta1 Instruct 모델 카드 및 라이선스 확인 ← https://huggingface.co/llm-jp/llm-jp-3-172b-beta1-instruct
- 01:02 Sarashina2 7B 모델 카드 및 SB Intuitions 공식 사이트 확인 ← https://huggingface.co/sbintuitions/sarashina2-7b
- 01:04 CALM3 22B Chat 모델 카드 및 CyberAgent 공식 사이트 확인 ← https://huggingface.co/cyberagent/calm3-22b-chat
- 01:05 TinySwallow-1.5B-Instruct 논문 및 Sakana AI 블로그 확인 ← https://arxiv.org/abs/2501.16937

## 수행한 작업
- [x] `llm-jp-3-172b-beta1-instruct` 신규 등록 (172B, contextWindow 4096) ← https://huggingface.co/llm-jp/llm-jp-3-172b-beta1-instruct
- [x] `llm-jp-3-13b-instruct` contextWindow (2048 -> 4096) 수정 및 보강 ← https://huggingface.co/llm-jp/llm-jp-3-13b-instruct
- [x] `sarashina2-7b` official URL (`https://www.sbintuitions.co.jp/`) 보강 ← https://www.sbintuitions.co.jp/
- [x] `calm3-22b-chat` official URL (`https://www.cyberagent.co.jp/`) 보강 ← https://www.cyberagent.co.jp/

## 판단 / 고민
- 국가별 독자 LLM 수집 포커스(missions/llm.md)에 맞춰 일본 NII/GENIAC의 LLM-jp-3 172B 대형 모델을 발굴 및 등록함.
- 기존 등록되어 있던 일본 모델들(LLM-jp-3, Sarashina2, CALM3)의 공식 출처 URL 및 contextWindow 정보를 검증하여 보강함.

## 이슈 제기
- (없음)
