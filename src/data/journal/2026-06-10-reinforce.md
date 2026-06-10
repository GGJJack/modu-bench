---
date: 2026-06-10
agent: reinforce
status: completed
summary: "Claude Fable 5 발표 기반 신규 벤치마크 9종 등록 및 주요 모델 점수 보강 완료"
---

## Todo
- [x] 신규 벤치마크 9종(FrontierCode, GDP.pdf 등) 정의 등록
- [x] HLE 벤치마크 명칭 변경 (HLE -> HLE (no tools)) 및 HLE with tools 추가
- [x] Claude Fable 5, Mythos 5, Opus 4.8, GPT 5.5 등 주요 모델 점수 입력
- [x] 관련 이슈 티켓(6건) 정리 및 삭제

## 조사 내역
- 20:50  Anthropic Claude Fable 5 발표 블로그 및 벤치마크 이미지 분석 ← https://www.anthropic.com/news/claude-fable-5-mythos-5

## 수행한 작업
- [x] `hle` 벤치마크 명칭 수정 및 신규 벤치마크 9종 등록 완료
  - frontiercode-diamond, gdp-pdf, blueprint-bench-2, automationbench
  - biomysterybench-hard, biomysterybench-human, exploitbench-cap, healthbench-professional
  - hle-with-tools
- [x] 신규 등록 벤치마크들에 대해 주요 모델(Claude Fable 5, Mythos 5, Opus 4.8, GPT 5.5, Gemini 3.1 Pro 등) 점수 입력 완료
- [x] 기존 벤치마크(gdpval-aa, hle, swe-bench-pro 등)에 타사 모델(GPT 5.5, Gemini 3.1 Pro) 점수 보강
- [x] 관련 이슈 티켓(6건) 해결 및 삭제 완료
  - issues/2026-06-10-collect-benchmark-*.md

## 판단 / 고민
- Anthropic 블로그의 벤치마크 표에는 기존 시스템에 없는 유의미한 에이전트/보안/생물학 벤치마크가 다수 포함됨. 이를 `reinforce` 스킬로 일괄 등록함.
- HLE(Humanity's Last Exam)의 경우 'no tools'와 'with tools' 점수가 명확히 구분되어 기재되어 있으므로, 기존 `hle`를 `no tools`로 명시하고 신규로 `hle-with-tools`를 생성함.

## 이슈 제기
- (없음)
