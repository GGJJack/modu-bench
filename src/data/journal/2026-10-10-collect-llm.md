---
date: 2026-10-10
agent: collect-llm
status: completed
summary: "동아시아 독자 LLM 신규 4종(Sarashina2, CALM2, EXAONE 3.0 32B Base, Swallow MS) 등록 및 기존 4종 메타데이터 보강 완료"
---

## Todo
- [x] 신규 동아시아 독자 LLM 모델 등록 (4종)
- [x] 기존 LLM 모델 메타데이터 출처 확인 및 보강 (4종)
- [x] 프로젝트 빌드 검증

## 조사 내역
- 01:00 SB Intuitions Sarashina2 공식 포스트 및 Hugging Face 확인 ← https://huggingface.co/sbintuitions/sarashina2-7b-instruct
- 01:00 CyberAgent CALM2 7B Base 공식 포스트 및 Hugging Face 확인 ← https://huggingface.co/cyberagent/calm2-7b-base
- 01:00 LG AI Research EXAONE 3.0 32B Base 모델 확인 ← https://huggingface.co/LGAI-Research/EXAONE-3.0-32B
- 01:00 Tokyo Tech / AIST Swallow MS 7B 모델 확인 ← https://huggingface.co/tokyotech-llm/Swallow-MS-7b-v0.1
- 01:00 Sakana AI EvoLLM-JP v1 7B 논문 출처 확인 ← https://arxiv.org/abs/2403.13187

## 수행한 작업
- [x] `sarashina2-7b-instruct` 신규 등록 ← https://huggingface.co/sbintuitions/sarashina2-7b-instruct
- [x] `calm2-7b-base` 신규 등록 ← https://huggingface.co/cyberagent/calm2-7b-base
- [x] `exaone-3.0-32b-base` 신규 등록 ← https://huggingface.co/LGAI-Research/EXAONE-3.0-32B
- [x] `swallow-ms-7b` 신규 등록 ← https://huggingface.co/tokyotech-llm/Swallow-MS-7b-v0.1
- [x] `evollm-jp-7b` 메타데이터 보강 (contextWindow: 4096) ← https://arxiv.org/abs/2403.13187
- [x] `swallow-ms-7b-instruct` 메타데이터 보강 (links.paper) ← https://tokyotech-llm.github.io/
- [x] `sarashina2-7b` 메타데이터 보강 (links.github) ← https://www.sbintuitions.co.jp/
- [x] `calm3-22b-chat` 메타데이터 보강 (links.github) ← https://huggingface.co/cyberagent/calm3-22b-chat

## 판단 / 고민
- 일본 및 한국 독자 LLM 모델(Sarashina, CALM, EXAONE, Swallow, EvoLLM)을 대상으로 검증된 공식 출처(Hugging Face, arXiv, 공식 웹사이트) 기반으로 신규 모델 등록 및 missing links/contextWindow 메타데이터 보강을 완료함.

## 이슈 제기
- (없음)
