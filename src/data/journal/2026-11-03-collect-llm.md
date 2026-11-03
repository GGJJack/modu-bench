---
date: 2026-11-03
agent: collect-llm
status: completed
summary: "Cohere Command R 시리즈 주요 모델(Command R, Command R+, 08-2024 리프레시, Command R7B) 신규 메타데이터 수집 및 등록"
---

## Todo
- [x] Cohere 공식 문서 및 HuggingFace 모델 카드를 통해 Command R 라인업 정보 조사
- [x] `command-r`, `command-r-plus`, `command-r-08-2024`, `command-r-plus-08-2024`, `command-r7b-12-2024` 등록
- [x] 등록된 모델 데이터 및 git diff 검증
- [x] 프로젝트 빌드 검증 및 저널 status: completed 갱신

## 조사 내역
- 01:05 기존 Cohere 모델 등록 현황 점검 (Command A 계열 및 North Mini Code만 등록되어 있고 기반인 Command R 시리즈 누락 확인) ← bun run skills/manage-model/scripts/model.ts list llm
- 01:08 Cohere 공식 모델 개요 문서 확인 (Command R/R+, 08-2024 버전 사양 및 컨텍스트 길이 128k 확인) ← https://docs.cohere.com/docs/models
- 01:10 Cohere 공식 가격 페이지 확인 (Command R $0.50/$1.50, Command R+ $3.00/$15.00, Command R+ 08-2024 $2.50/$10.00) ← https://cohere.com/pricing
- 01:12 Cohere 공식 릴리스 체인지로그 확인 (Command R 08-2024 가격 $0.15/$0.60, Command R+ 08-2024 가격 $2.50/$10.00 및 2024-08-30 출시 확인) ← https://docs.cohere.com/changelog/command-gets-refreshed
- 01:15 Hugging Face CohereLabs/c4ai-command-r-v01 모델 카드 및 메타데이터 확인 (파라미터 35B, 컨텍스트 128k, CC-BY-NC-4.0 라이선스) ← https://huggingface.co/CohereLabs/c4ai-command-r-v01
- 01:18 Hugging Face CohereLabs/c4ai-command-r-plus 모델 카드 및 메타데이터 확인 (파라미터 104B, 컨텍스트 128k, CC-BY-NC-4.0 라이선스) ← https://huggingface.co/CohereLabs/c4ai-command-r-plus
- 01:20 Hugging Face CohereLabs/c4ai-command-r-08-2024 모델 카드 및 메타데이터 확인 (파라미터 32B, 컨텍스트 128k, CC-BY-NC-4.0 라이선스) ← https://huggingface.co/CohereLabs/c4ai-command-r-08-2024
- 01:22 Hugging Face CohereLabs/c4ai-command-r-plus-08-2024 모델 카드 및 메타데이터 확인 (파라미터 104B, 컨텍스트 128k, CC-BY-NC-4.0 라이선스) ← https://huggingface.co/CohereLabs/c4ai-command-r-plus-08-2024
- 01:25 Hugging Face CohereLabs/c4ai-command-r7b-12-2024 모델 카드 및 논문 확인 (파라미터 7B, 컨텍스트 128k, arXiv:2504.00698, CC-BY-NC-4.0 라이선스, 2024-12-11 공개) ← https://huggingface.co/CohereLabs/c4ai-command-r7b-12-2024

## 수행한 작업
- [x] `command-r` 신규 등록 (parameterSize: 35B, contextWindow: 128000, pricing: $0.50/$1.50, license: CC-BY-NC-4.0) ← https://cohere.com/blog/command-r
- [x] `command-r-plus` 신규 등록 (parameterSize: 104B, contextWindow: 128000, pricing: $3.00/$15.00, license: CC-BY-NC-4.0) ← https://docs.cohere.com/docs/command-r-plus
- [x] `command-r-08-2024` 신규 등록 (parameterSize: 32B, contextWindow: 128000, pricing: $0.15/$0.60, license: CC-BY-NC-4.0) ← https://docs.cohere.com/changelog/command-gets-refreshed
- [x] `command-r-plus-08-2024` 신규 등록 (parameterSize: 104B, contextWindow: 128000, pricing: $2.50/$10.00, license: CC-BY-NC-4.0) ← https://docs.cohere.com/changelog/command-gets-refreshed
- [x] `command-r7b-12-2024` 신규 등록 (parameterSize: 7B, contextWindow: 128000, paper: arXiv:2504.00698, license: CC-BY-NC-4.0) ← https://docs.cohere.com/docs/command-r7b

## 판단 / 고민
- Cohere의 차세대 라인업인 Command A 시리즈는 등록되어 있었으나, 엔터프라이즈 RAG와 도구 사용의 대표적 오픈 웨이트 기반 모델인 Command R 시리즈(초기 버전 35B/104B 및 2024년 8월 리프레시 32B/104B, 12월 7B)가 누락되어 있었음.
- Cohere 공식 요금표(`cohere.com/pricing`) 및 릴리스 노트(`docs.cohere.com/changelog/command-gets-refreshed`)를 교차 검증하여 Command R 계열의 1M 토큰당 공식 API 요금(Input/Output)을 정확하게 파악하여 등록함.
- `command-r7b-12-2024`의 경우 Hugging Face에 공개된 가중치 및 테크니컬 리포트가 명확하며 공개 API 단가는 책정되어 있지 않으므로 `pricing`은 `null`로 유지하고 논문 링크(`https://arxiv.org/abs/2504.00698`)를 함께 보강함.

## 이슈 제기
- (없음)
