---
date: 2026-11-08
agent: collect-llm
status: completed
summary: "Qwen2 오픈소스 핵심 모델 라인업(72B-Instruct, 57B-A14B-Instruct, 7B-Instruct, 0.5B-Instruct) 신규 등록 및 Qwen2.5-Coder 메타데이터 링크 보강"
---

## Todo
- [x] Qwen2 공식 블로그 및 Hugging Face 모델 카드, arXiv 기술 보고서 조사
- [x] 신규 모델 4종(`qwen2-72b-instruct`, `qwen2-57b-a14b-instruct`, `qwen2-7b-instruct`, `qwen2-0.5b-instruct`) 등록
- [x] 기존 Qwen2.5-Coder 모델(`qwen-2.5-coder-7b-instruct`, `qwen-2.5-coder-14b-instruct`, `qwen-2.5-coder-32b-instruct`) 공식 패밀리 블로그 링크 보강
- [x] 등록 및 수정 데이터 CLI 및 git diff 검증
- [x] 프로젝트 빌드 검증 및 저널 작성 완료

## 조사 내역
- 01:05 missions/llm.md 확인: 글로벌 메이저 및 국가별 독자 LLM(중국 Qwen/DeepSeek/Baichuan 등) 조사 지침 확인
- 01:08 기존 등록 LLM 점검: Qwen2.5 및 Qwen3 계열은 등록되어 있으나 Qwen 오픈소스 생태계 도약의 핵심 분기점이었던 Qwen2(2024-06-07 릴리스) 주력 모델들이 누락되어 있음을 확인
- 01:10 Qwen2 공식 블로그 확인 (0.5B, 1.5B, 7B, 57B-A14B, 72B 라인업, Apache 2.0 및 Tongyi Qianwen 라이선스, 32K~128K context) ← https://qwenlm.github.io/blog/qwen2/
- 01:12 Qwen2 기술 보고서 확인 (arXiv:2407.10671) ← https://arxiv.org/abs/2407.10671
- 01:15 Hugging Face Qwen/Qwen2-72B-Instruct 모델 카드 및 config.json 확인 (72.7B, 131072 context, Tongyi Qianwen License, 2024-06-07) ← https://huggingface.co/Qwen/Qwen2-72B-Instruct
- 01:17 Hugging Face Qwen/Qwen2-57B-A14B-Instruct 모델 카드 및 config.json 확인 (57.4B total / 14B active MoE, 65536 context, Apache-2.0, 2024-06-07) ← https://huggingface.co/Qwen/Qwen2-57B-A14B-Instruct
- 01:19 Hugging Face Qwen/Qwen2-7B-Instruct 모델 카드 및 config.json 확인 (7.07B, 131072 context, Apache-2.0, 2024-06-07) ← https://huggingface.co/Qwen/Qwen2-7B-Instruct
- 01:21 Hugging Face Qwen/Qwen2-0.5B-Instruct 모델 카드 및 config.json 확인 (0.49B, 32768 context, Apache-2.0, 2024-06-07) ← https://huggingface.co/Qwen/Qwen2-0.5B-Instruct
- 01:23 Qwen2.5-Coder Family 공식 블로그 확인 (0.5B~32B 전체 라인업 발표) ← https://qwenlm.github.io/blog/qwen2.5-coder-family/

## 수행한 작업
- [x] `qwen2-72b-instruct` 신규 등록 (parameterSize: 72.7B, contextWindow: 131072, license: Tongyi Qianwen Research License, paper: arXiv:2407.10671) ← https://huggingface.co/Qwen/Qwen2-72B-Instruct
- [x] `qwen2-57b-a14b-instruct` 신규 등록 (parameterSize: 57.4B (14B active) MoE, contextWindow: 65536, license: Apache-2.0, paper: arXiv:2407.10671) ← https://huggingface.co/Qwen/Qwen2-57B-A14B-Instruct
- [x] `qwen2-7b-instruct` 신규 등록 (parameterSize: 7.07B, contextWindow: 131072, license: Apache-2.0, paper: arXiv:2407.10671) ← https://huggingface.co/Qwen/Qwen2-7B-Instruct
- [x] `qwen2-0.5b-instruct` 신규 등록 (parameterSize: 0.49B, contextWindow: 32768, license: Apache-2.0, paper: arXiv:2407.10671) ← https://huggingface.co/Qwen/Qwen2-0.5B-Instruct
- [x] `qwen-2.5-coder-7b-instruct` 링크 보강 (공식 패밀리 블로그 링크 반영) ← https://qwenlm.github.io/blog/qwen2.5-coder-family/
- [x] `qwen-2.5-coder-14b-instruct` 링크 보강 (공식 패밀리 블로그 링크 반영) ← https://qwenlm.github.io/blog/qwen2.5-coder-family/
- [x] `qwen-2.5-coder-32b-instruct` 링크 보강 (공식 패밀리 블로그 링크 반영) ← https://qwenlm.github.io/blog/qwen2.5-coder-family/

## 판단 / 고민
- Qwen 시리즈는 글로벌 오픈소스 LLM 생태계에서 Llama와 함께 가장 널리 활용되고 있는 플래그십 모델 계열임.
- 저장소 내 DB에 Qwen2.5 및 가상의 미래 릴리스(Qwen3 계열)는 다수 등록되어 있으나, Qwen2.5의 기반이자 대규모 다국어(한국어, 일본어 등 포함) 및 MoE 확장을 처음 이뤄낸 분기점인 Qwen2의 Instruct 대표 모델들이 누락되어 있었음.
- 공식 블로그 및 Hugging Face 공식 모델 카드, config.json, arXiv 기술 보고서(arXiv:2407.10671)를 확인하여 플래그십인 72B-Instruct, MoE 대표작인 57B-A14B-Instruct, 대중적인 7B-Instruct, 온디바이스/경량 0.5B-Instruct 등 4종을 신규 등록함.
- 기존 등록된 Qwen2.5-Coder 계열 중 초기 블로그나 일반 링크로 등록되어 있던 Instruct 모델 3종(7B, 14B, 32B)의 공식 링크를 전체 라인업을 상세 소개한 공식 포스트(qwen2.5-coder-family)로 업데이트함.
- 불확실한 가격 정보는 추정하지 않고 null로 유지하였으며, 확인된 공식 출처 URL을 모두 기록함.

## 이슈 제기
- (없음)
