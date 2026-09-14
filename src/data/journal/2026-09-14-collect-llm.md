---
date: 2026-09-14
agent: collect-llm
status: completed
summary: "Qwen2.5-Coder-1.5B 신규 등록 및 Solar Pro Preview Instruct 메타데이터 보강"
---

## Todo
- [x] Qwen2.5-Coder 공식 출처 스캔 및 신규 모델 `qwen2.5-coder-1.5b-base` 등록
- [x] Upstage Solar Pro Preview Instruct 공식 출처 스캔 및 메타데이터 보강
- [x] 저널 status completed 갱신

## 조사 내역
- 01:00 Qwen2.5-Coder-1.5B 베이스 모델 발견 및 스펙 확인 (파라미터: 1.54B, 컨텍스트 윈도우: 32768, 라이선스: Apache-2.0) ← https://qwenlm.github.io/blog/qwen2.5-coder-family/
- 01:00 Solar Pro Preview Instruct 스펙 확인 (파라미터: 22B, 컨텍스트 윈도우: 4096, 라이선스: MIT) ← https://huggingface.co/upstage/solar-pro-preview-instruct

## 수행한 작업
- [x] 신규 모델 `qwen2.5-coder-1.5b-base` 등록 ← https://qwenlm.github.io/blog/qwen2.5-coder-family/
- [x] `solar-pro-preview-instruct` 모델 메타데이터 보강 (paper link 추가) ← https://huggingface.co/upstage/solar-pro-preview-instruct

## 판단 / 고민
- Qwen2.5-Coder 시리즈 공식 블로그에서 신규 베이스 모델 Qwen2.5-Coder-1.5B를 발견하여 필수 필드 및 메타데이터를 포함해 등록함.
- Solar Pro Preview Instruct 모델에 paper 링크 출처를 추가 및 보강함.

## 이슈 제기
- (없음)
