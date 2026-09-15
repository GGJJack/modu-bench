---
date: 2026-09-15
agent: collect-llm
status: completed
summary: "Qwen2.5-Coder 및 Yi-Coder 시리즈 신규 모델 등록 및 Baichuan/Qwen 모델 메타데이터 보강"
---

## Todo
- [x] Yi-Coder-1.5B-Instruct, Qwen2.5-Coder-7B, Qwen2.5-Coder-0.5B 신규 등록
- [x] Qwen2.5-Coder-1.5B, Baichuan-13B-Base, Baichuan-13B-Chat 메타데이터 보강
- [x] 저널 status completed 갱신

## 조사 내역
- 01:00 Yi-Coder 공식 GitHub 스캔 및 Yi-Coder-1.5B-Instruct 스펙 확인 (파라미터: 1.5B, 컨텍스트 윈도우: 131072, 라이선스: Apache-2.0) ← https://github.com/01-ai/Yi-Coder
- 01:00 Qwen2.5-Coder 공식 블로그 스캔 및 Qwen2.5-Coder-7B, Qwen2.5-Coder-0.5B 베이스 모델 확인 (파라미터: 7.61B/0.49B, 컨텍스트 윈도우: 32768, 라이선스: Apache-2.0) ← https://qwenlm.github.io/blog/qwen2.5-coder-family/
- 01:00 Baichuan 공식 논문 및 HF 스캔하여 Baichuan-13B 모델 논문 링크 확인 ← https://arxiv.org/abs/2309.10305

## 수행한 작업
- [x] 신규 모델 `yi-coder-1.5b-instruct` 등록 ← https://github.com/01-ai/Yi-Coder
- [x] 신규 모델 `qwen2.5-coder-7b-base` 등록 ← https://qwenlm.github.io/blog/qwen2.5-coder-family/
- [x] 신규 모델 `qwen2.5-coder-0.5b-base` 등록 ← https://qwenlm.github.io/blog/qwen2.5-coder-family/
- [x] `qwen2.5-coder-1.5b-base` 모델 메타데이터 보강 (paper, github 링크 추가) ← https://qwenlm.github.io/blog/qwen2.5-coder-family/
- [x] `baichuan-13b-base` 모델 메타데이터 보강 (paper 링크 추가) ← https://arxiv.org/abs/2309.10305
- [x] `baichuan-13b-chat` 모델 메타데이터 보강 (paper 링크 추가) ← https://arxiv.org/abs/2309.10305

## 판단 / 고민
- Yi-Coder 및 Qwen2.5-Coder 시리즈의 미등록 코드 생성 특화 모델들을 공식 출처를 기반으로 검증 후 등록함.
- 기존 등록되어 있던 Baichuan-13B 베이스/챗 모델 및 Qwen2.5-Coder-1.5B 모델에 누락된 논문 및 깃허브 링크를 보강함.

## 이슈 제기
- (없음)
