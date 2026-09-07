---
date: 2026-09-07
agent: collect-llm
status: completed
summary: "Baichuan 3 신규 발견 등록 및 DeepSeek-R1-Distill-Qwen-14B 보강"
---

## Todo
- [x] Baichuan 3 신규 모델 등록
- [x] DeepSeek-R1-Distill-Qwen-14B 논문 출처 보강

## 조사 내역
- 01:00 Baichuan 3 공식 스펙 확인 ← https://www.baichuan-ai.com/
- 01:05 DeepSeek-R1-Distill-Qwen-14B arXiv 논문 확인 ← https://arxiv.org/abs/2501.12948

## 수행한 작업
- [x] `baichuan-3` 신규 등록 (id, name, provider, releaseDate, license, links.official) ← https://www.baichuan-ai.com/
- [x] `deepseek-r1-distill-qwen-14b` links.paper 보강 ← https://arxiv.org/abs/2501.12948

## 판단 / 고민
- Baichuan 3는 파라미터 수가 비공개 상태이나, official URL 확인 가능하므로 최소 5필드 기준 충족하여 등록 처리.
- Qwen 및 EXAONE 계열 등 다수의 기존 모델은 이미 스펙 정보가 등록되어 있어 출처가 미확인된 추정치는 등록하지 않고 보강을 보류함.

## 이슈 제기
- (없음)
