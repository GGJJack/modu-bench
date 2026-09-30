---
date: 2026-09-30
agent: collect-llm
status: completed
summary: "LLM 도메인 신규 Qwen3Guard 시리즈 수집 및 Qwen-MT-Turbo 가격 메타데이터 보강"
---

## Todo
- [x] 신규 LLM 모델 발견 및 필수 필드 등록 (Qwen3Guard 시리즈)
- [x] 기존 LLM 모델 정보 보강 (Qwen-MT-Turbo)

## 조사 내역
- 01:05 Qwen3Guard 모델 라인업(0.6B/4B/8B Gen/Stream) 수집 내역 확인 ← https://qwenlm.github.io/blog/qwen3guard/
- 01:08 Qwen-MT-Turbo API pricing 정보($0.5/1M output tokens) 확인 ← https://qwenlm.github.io/blog/qwen-mt/

## 수행한 작업
- [x] 신규 모델 qwen3guard-gen-0.6b 등록 ← https://qwenlm.github.io/blog/qwen3guard/
- [x] 신규 모델 qwen3guard-gen-8b 등록 ← https://qwenlm.github.io/blog/qwen3guard/
- [x] 신규 모델 qwen3guard-stream-0.6b 등록 ← https://qwenlm.github.io/blog/qwen3guard/
- [x] 신규 모델 qwen3guard-stream-8b 등록 ← https://qwenlm.github.io/blog/qwen3guard/
- [x] 기존 모델 qwen-mt-turbo output pricing 메타데이터 보강 ← https://qwenlm.github.io/blog/qwen-mt/

## 판단 / 고민
- Qwen3Guard 4B 버전(Gen/Stream)은 기존에 수집되어 있었으므로, 잔여 0.6B 및 8B 라인업 4종을 신규 수집 완료.

## 이슈 제기
- (없음)
