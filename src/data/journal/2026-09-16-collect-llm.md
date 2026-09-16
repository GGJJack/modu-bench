---
date: 2026-09-16
agent: collect-llm
status: completed
summary: "TinySwallow-1.5B 및 Yi-Coder Base 시리즈 신규 등록, GLM-4V-9B 메타데이터 보강"
---

## Todo
- [x] TinySwallow-1.5B (Base) 신규 등록
- [x] Yi-Coder-1.5B (Base), Yi-Coder-9B (Base) 신규 등록
- [x] GLM-4V-9B 메타데이터 보강 (GitHub 링크 추가)
- [x] 저널 status completed 갱신

## 조사 내역
- 01:00 Sakana AI 공식 블로그 및 Hugging Face 스캔, TinySwallow-1.5B 베이스 모델 및 관련 논문 정보 확인 (파라미터: 1.5B, 컨텍스트 윈도우: 32768, 라이선스: Apache-2.0) ← https://sakana.ai/taid-jp/
- 01:00 01.AI 공식 Hugging Face 및 GitHub 스캔, Yi-Coder-1.5B 및 Yi-Coder-9B 베이스 모델 정보 확인 (파라미터: 1.5B/8.9B, 컨텍스트 윈도우: 131072, 라이선스: Apache-2.0) ← https://github.com/01-ai/Yi-Coder
- 01:00 Zhipu AI GLM-4 공식 GitHub 스캔, GLM-4V-9B 리포지토리 링크 확인 ← https://github.com/THUDM/GLM-4

## 수행한 작업
- [x] 신규 모델 `tinyswallow-1-5b-base` 등록 ← https://sakana.ai/taid-jp/
- [x] 신규 모델 `yi-coder-1.5b-base` 등록 ← https://github.com/01-ai/Yi-Coder
- [x] 신규 모델 `yi-coder-9b-base` 등록 ← https://github.com/01-ai/Yi-Coder
- [x] `glm-4v-9b` 모델 메타데이터 보강 (github 링크 추가) ← https://github.com/THUDM/GLM-4

## 판단 / 고민
- Japanese 특화 소형 모델 TinySwallow-1.5B의 Instruct 버전 외 베이스 모델을 추가 수집함.
- Yi-Coder 시리즈 중 Instruct 버전만 존재했던 1.5B 및 9B의 베이스 모델을 공식 GitHub 및 Hugging Face 정보를 통해 신규 수집함.
- GLM-4V-9B 모델에 누락된 GitHub 링크를 추가하여 링크 메타데이터를 보강함.

## 이슈 제기
- (없음)
