---
date: 2026-10-09
agent: collect-llm
status: completed
summary: "TinySwallow 및 Swallow 계열 일본 LLM 5종 메타데이터(github, paper 링크) 출처 확인 및 보강 완료"
---

## Todo
- [x] TinySwallow 및 Swallow 계열 LLM 모델 메타데이터 출처 확인 및 보강
- [x] 프로젝트 빌드 검증

## 조사 내역
- 01:00 Sakana AI TinySwallow-1.5B 공식 포스트 및 GitHub 확인 ← https://sakana.ai/taid-jp/
- 01:00 Tokyo Tech / AIST Swallow 공식 웹サイト 및 arXiv 논문 확인 ← https://tokyotech-llm.github.io/
- 01:00 Swallow 70B & MX 8x7B 논문 출처 확인 ← https://arxiv.org/abs/2404.17790

## 수행한 작업
- [x] `tinyswallow-1-5b-instruct` 메타데이터 보강 (links.github: https://github.com/SakanaAI/TinySwallow-ChatUI) ← https://sakana.ai/taid-jp/
- [x] `tinyswallow-1-5b-base` 메타데이터 보강 (links.github: https://github.com/SakanaAI/TinySwallow-ChatUI) ← https://sakana.ai/taid-jp/
- [x] `swallow-70b-instruct` 메타데이터 보강 (links.paper: https://arxiv.org/abs/2404.17790) ← https://tokyotech-llm.github.io/
- [x] `swallow-70b` 메타데이터 보강 (links.paper: https://arxiv.org/abs/2404.17790) ← https://tokyotech-llm.github.io/
- [x] `swallow-mx-8x7b-instruct` 메타데이터 보강 (links.paper: https://arxiv.org/abs/2404.17790) ← https://tokyotech-llm.github.io/

## 판단 / 고민
- Japanese LLM 모델 중 links 객체의 github 또는 paper 속성이 누락되어 있던 5종(TinySwallow 2종, Swallow 3종)에 대해 공식 블로그 및 논문 URL을 확인하고 CLI 도구를 통해 정교화함.

## 이슈 제기
- (없음)
