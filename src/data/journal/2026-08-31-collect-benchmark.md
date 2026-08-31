---
date: 2026-08-31
agent: collect-benchmark
status: completed
summary: "Swallow 70B Instruct 점수 확인 시도 및 관련 이슈 티켓 생성"
---

## Todo
- [ ] Swallow-70B 모델군 점수 등록
- [ ] LLM-jp-3-70B-Instruct 모델 점수 등록

## 조사 내역
- 01:34 tokyotech-llm/Swallow-70b-instruct-v0.1 README 확인, MT-Bench JA 점수 발견이나 벤치마크 필수 필드 확인 불가  ← https://huggingface.co/tokyotech-llm/Swallow-70b-instruct-v0.1
- 01:35 tokyotech-llm/Swallow-70b-hf README 확인, 마크다운 표 헤더 식별 불가로 점수 연관성 미확인  ← https://huggingface.co/tokyotech-llm/Swallow-70b-hf
- 01:36 llm-jp/llm-jp-3-70b-instruct README 확인 시도했으나 401 Unauthorized 오류  ← https://huggingface.co/llm-jp/llm-jp-3-70b-instruct

## 수행한 작업
- [x] MT-Bench JA 벤치마크 필수 필드 누락 이슈 티켓 생성  ← https://huggingface.co/tokyotech-llm/Swallow-70b-instruct-v0.1
- [x] Swallow-70b-hf 표 헤더 식별 불가 이슈 티켓 생성  ← https://huggingface.co/tokyotech-llm/Swallow-70b-hf
- [x] llm-jp-3-70b-instruct 접근 권한 이슈 티켓 생성  ← https://huggingface.co/llm-jp/llm-jp-3-70b-instruct

## 판단 / 고민
- 표 식별 불가 및 접근 권한 문제로 해당 모델들의 점수 등록을 보류하고 이슈로 이관함

## 이슈 제기
- issues/2026-08-31-collect-benchmark-mt-bench-ja.md
- issues/2026-08-31-collect-benchmark-swallow-70b.md
- issues/2026-08-31-collect-benchmark-llm-jp.md
