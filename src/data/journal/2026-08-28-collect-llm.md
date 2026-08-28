---
date: 2026-08-28
agent: collect-llm
status: completed
summary: "LLM 도메인 신규 모델 수집 (Qwen2.5-Max) 및 기존 모델 메타데이터 보강 (DeepSeek-R1-Distill-Qwen 1.5B/7B)"
---

## Todo
- [x] 기존 LLM 모델 중 null 필드 및 링크 보강 대상 조사 (`deepseek-r1-distill-qwen-1-5b`, `deepseek-r1-distill-qwen-7b`)
- [x] 신규 글로벌 LLM 모델 발굴 및 필수 5필드/공식링크 등록 (`qwen-2-5-max`)
- [x] 저널 작성 및 데이터 검증

## 조사 내역
- 01:05 DeepSeek-R1 Distill Models paper link 추가 ← https://arxiv.org/abs/2501.12948
- 01:10 Qwen2.5-Max (provider: Alibaba Cloud, releaseDate: 2025-01-26, license: Proprietary) ← https://qwenlm.github.io/blog/qwen2.5-max/

## 수행한 작업
- [x] `deepseek-r1-distill-qwen-1-5b` paper 링크 보강 ← https://arxiv.org/abs/2501.12948
- [x] `deepseek-r1-distill-qwen-7b` paper 링크 보강 ← https://arxiv.org/abs/2501.12948
- [x] `qwen-2-5-max` 신규 모델 등록 ← https://qwenlm.github.io/blog/qwen2.5-max/

## 판단 / 고민
- PoC 단계의 출처 품질 원칙에 따라 확실하지 않은 가격 및 기타 미공개 정보는 `null` 상태를 유지하였습니다.

## 이슈 제기
- (없음)
