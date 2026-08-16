---
date: 2026-08-16
agent: collect-llm
status: completed
summary: "국내 LLM (EXAONE 3.5, Solar 10.7B Base, EEVE-Korean-10.8B) 메타데이터 보강 완료"
---

## Todo
- [x] EXAONE 3.5, Solar 및 EEVE 모델 공식 Hugging Face/GitHub/논문 링크 정보 조사
- [x] manage-model CLI를 사용하여 모델 메타데이터 보강
- [x] 저널 completed 상태 변경

## 조사 내역
- 01:00 EXAONE 3.5 32B/2.4B Instruct 메타데이터 및 링크 검증 (contextWindow: 32768, parameterSize: 32B/2.4B) ← https://huggingface.co/LGAI-EXAONE/EXAONE-3.5-32B-Instruct
- 01:05 Solar Pro Preview Instruct 메타데이터 및 링크 검증 (parameterSize: 22B, contextWindow: 4096) ← https://huggingface.co/upstage/solar-pro-preview-instruct
- 01:10 Solar 10.7B Base 누락 링크 조사 (github: https://github.com/UpstageAI/SOLAR-10.7B) ← https://github.com/UpstageAI/SOLAR-10.7B
- 01:12 EEVE-Korean-10.8B 누락 링크 조사 (huggingface, github, paper) ← https://huggingface.co/yanolja/EEVE-Korean-10.8B-v1.0

## 수행한 작업
- [x] `solar-10.7b-base` 모델 누락 링크 (`github`) 보강 ← https://github.com/UpstageAI/SOLAR-10.7B
- [x] `eeve-korean-10.8b` 모델 누락 링크 (`huggingface`, `github`, `paper`) 보강 ← https://huggingface.co/yanolja/EEVE-Korean-10.8B-v1.0
- [x] `exaone-3-5-2-4b-instruct`, `exaone-3-5-32b-instruct`, `solar-pro-preview-instruct` 메타데이터 및 출처 URL 검증 완료

## 판단 / 고민
- missions/llm.md 지침에 따라 국내 독자 LLM 우선 보강 진행. 공식 Hugging Face 모델 카드 및 기술 논문 링크를 확인하여 정확한 메타데이터 설정 및 누락된 GitHub/논문 링크 채움.

## 이슈 제기
- (없음)
