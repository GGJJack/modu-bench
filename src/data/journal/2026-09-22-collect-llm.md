---
date: 2026-09-22
agent: collect-llm
status: completed
summary: "신규 LLM 수집(4종) 및 기존 모델 메타데이터 보강 완료"
---

## Todo
- [x] 신규 LLM 4종 등록 (DeepSeek-V4.1-Flash, TinySolar-187m-4k, TinySolar-111m-4k, gpt-oss-120b-sft-aimo3-fishmath)
- [x] 기존 LLM 메타데이터 보강 (yi-1-5-34b-chat, solar-10.7b)

## 조사 내역
- 01:05  DeepSeek-V4.1-Flash 모델 정보 확인 (552B, 1M context, MIT)  ← https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash
- 01:10  Upstage TinySolar-187m-4k 및 TinySolar-111m-4k 모델 정보 확인 (0.2B / 0.1B, 4096 context, Apache-2.0)  ← https://huggingface.co/upstage/TinySolar-187m-4k
- 01:20  Sakana AI gpt-oss-120b-sft-aimo3-fishmath 모델 정보 확인 (117B, Apache-2.0)  ← https://huggingface.co/SakanaAI/gpt-oss-120b-sft-aimo3-fishmath
- 01:25  01.AI Yi-1.5-34B-Chat 및 Upstage Solar 10.7B 메타데이터 및 출처 URL 재확인  ← https://huggingface.co/01-ai/Yi-1.5-34B-Chat

## 수행한 작업
- [x] `DeepSeek-V4.1-Flash 신규 등록`  ← https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash
- [x] `TinySolar-187m-4k 신규 등록`  ← https://huggingface.co/upstage/TinySolar-187m-4k
- [x] `TinySolar-111m-4k 신규 등록`  ← https://huggingface.co/upstage/TinySolar-111m-4k
- [x] `gpt-oss-120b-sft-aimo3-fishmath 신규 등록`  ← https://huggingface.co/SakanaAI/gpt-oss-120b-sft-aimo3-fishmath
- [x] `Yi-1.5-34B-Chat official 링크 보강`  ← https://www.01.ai/
- [x] `Solar 10.7B Instruct contextWindow 및 official 링크 보강`  ← https://upstage.ai

## 판단 / 고민
- 국가별 독자 LLM 수집 미션(missions/llm.md)에 따라 한국(Upstage), 일본(Sakana AI), 중국(DeepSeek, 01.AI) 주요 최신 및 오픈소스 LLM을 선별하여 신규 등록 및 메타데이터를 보강함.

## 이슈 제기
- (없음)
