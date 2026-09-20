---
date: 2026-09-20
agent: collect-llm
status: completed
summary: "LLM 신규 모델 수집 및 기존 모델 메타데이터 보강"
---

## Todo
- [x] 신규 LLM 모델 발견 및 수집 (codegeex4-all-9b, qwen-2.5-math-1.5b-instruct, glm-4-air)
- [x] 기존 LLM 모델 메타데이터 보강 (swallow-70b-instruct, swallow-70b, calm3-22b-chat)

## 조사 내역
- 01:05  CodeGeeX4-ALL-9B (Zhipu AI) 정보 확인  ← https://huggingface.co/THUDM/codegeex4-all-9b
- 01:07  Qwen2.5-Math-1.5B-Instruct (Alibaba Cloud) 정보 확인  ← https://huggingface.co/Qwen/Qwen2.5-Math-1.5B-Instruct
- 01:10  GLM-4-Air (Zhipu AI) 공식 소개 확인  ← https://bigmodel.cn/dev/how-to-use/model-introduction#glm-4-air
- 01:12  Swallow 70B Series (Tokyo Tech / AIST) 정보 확인  ← https://tokyotech-llm.github.io/
- 01:15  CALM3 22B Chat (CyberAgent) 허깅페이스 페이지 확인  ← https://huggingface.co/cyberagent/calm3-22b-chat

## 수행한 작업
- [x] `codegeex4-all-9b` 신규 모델 생성  ← https://huggingface.co/THUDM/codegeex4-all-9b
- [x] `qwen-2.5-math-1.5b-instruct` 신규 모델 생성  ← https://qwenlm.github.io/blog/qwen2.5-math/
- [x] `glm-4-air` 신규 모델 생성  ← https://bigmodel.cn/dev/how-to-use/model-introduction#glm-4-air
- [x] `swallow-70b-instruct` 메타데이터 보강  ← https://tokyotech-llm.github.io/
- [x] `swallow-70b` 메타데이터 보강  ← https://tokyotech-llm.github.io/
- [x] `calm3-22b-chat` 메타데이터 보강  ← https://huggingface.co/cyberagent/calm3-22b-chat

## 판단 / 고민
- regional LLM 및 글로벌 주요 LLM 수집 집중 (중국 Zhipu AI / Alibaba Cloud, 일본 Tokyo Tech / CyberAgent).
- 오피셜 링크가 명확한 메타데이터만 추가하고 pricing 등 불확실한 항목은 null 유지.

## 이슈 제기
- (없음)
