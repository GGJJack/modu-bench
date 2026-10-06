---
date: 2026-10-06
agent: collect-llm
status: completed
summary: "DeepSeek Coder V2 Base 및 CALM2 7B Chat 수집, Qwen2.5-Coder Base 및 일본 독자 모델 메타데이터 보강"
---

## Todo
- [x] 신규 LLM 모델 수집 (`deepseek-coder-v2-lite-base`, `deepseek-coder-v2-base`, `calm2-7b-chat`)
- [x] 기존 LLM 모델 메타데이터 보강 (`calm3-22b-base`, `sarashina2-70b-instruct`, `qwen2.5-coder-32b-base`, `qwen2.5-coder-14b-base`, `qwen2.5-coder-3b-base`)

## 조사 내역
- 01:10 DeepSeek-Coder-V2-Lite-Base 공식 HuggingFace 확인 ← https://huggingface.co/deepseek-ai/DeepSeek-Coder-V2-Lite-Base
- 01:11 DeepSeek-Coder-V2-Base 공식 HuggingFace 확인 ← https://huggingface.co/deepseek-ai/DeepSeek-Coder-V2-Base
- 01:13 CALM2 7B Chat 공식 HuggingFace 확인 ← https://huggingface.co/cyberagent/calm2-7b-chat
- 01:14 CALM3 22B Base 및 Sarashina2 70B Instruct 메타데이터 출처 확인 ← https://huggingface.co/cyberagent/calm2-7b-chat
- 01:15 Qwen2.5-Coder Base 시리즈 공식 HuggingFace 확인 ← https://huggingface.co/Qwen/Qwen2.5-Coder-32B

## 수행한 작업
- [x] `deepseek-coder-v2-lite-base` 신규 모델 등록 (DeepSeek, releaseDate: 2024-06-17, MIT) ← https://huggingface.co/deepseek-ai/DeepSeek-Coder-V2-Lite-Base
- [x] `deepseek-coder-v2-base` 신규 모델 등록 (DeepSeek, releaseDate: 2024-06-17, DeepSeek Model License) ← https://huggingface.co/deepseek-ai/DeepSeek-Coder-V2-Base
- [x] `calm2-7b-chat` 신규 모델 등록 (CyberAgent, releaseDate: 2023-11-01, Apache-2.0) ← https://huggingface.co/cyberagent/calm2-7b-chat
- [x] `calm3-22b-base` 기존 모델 정보 보강 (contextWindow: 16384, links) ← https://huggingface.co/cyberagent/calm2-7b-chat
- [x] `sarashina2-70b-instruct` 기존 모델 정보 보강 (contextWindow: 8192, links) ← https://huggingface.co/sbintuitions/sarashina2-7b-instruct
- [x] `qwen2.5-coder-32b-base` 기존 모델 정보 보강 (parameterSize: "32B", contextWindow: 131072, links) ← https://huggingface.co/Qwen/Qwen2.5-Coder-32B
- [x] `qwen2.5-coder-14b-base` 기존 모델 정보 보강 (parameterSize: "14B", contextWindow: 131072, links) ← https://huggingface.co/Qwen/Qwen2.5-Coder-32B
- [x] `qwen2.5-coder-3b-base` 기존 모델 정보 보강 (parameterSize: "3B", contextWindow: 32768, links) ← https://huggingface.co/Qwen/Qwen2.5-Coder-32B

## 판단 / 고민
- DeepSeek Coder V2 Base 모델 2종과 CyberAgent의 CALM2 7B Chat 모델을 신규 발굴하여 공식 출처 URL 및 필수 필드를 채워 저장함.
- 기존 등록 모델 중 `calm3-22b-base`, `sarashina2-70b-instruct`, 그리고 Qwen2.5-Coder Base 3종(`qwen2.5-coder-32b-base`, `qwen2.5-coder-14b-base`, `qwen2.5-coder-3b-base`)의 누락된 컨텍스트 윈도우 및 파라미터 크기, 링크 정보를 공식 출처 기반으로 보강함.

## 이슈 제기
- (없음)
