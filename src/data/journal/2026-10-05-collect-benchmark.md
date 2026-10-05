---
date: 2026-10-05
agent: collect-benchmark
status: completed
summary: "신규 수집된 LLM 모델(SOLAR-10.7B 등)의 벤치마크 점수 등록 및 미등록 모델 이슈 생성"
---

## Todo
- [x] 신규 LLM 모델(calm3-22b-base, sarashina2-70b-instruct, solar-10.7b-v1.0, glm-4-airx, hyperclova-x-seed, baichuan-3) 벤치마크 점수 매칭

## 조사 내역
- 01:30 solar-10.7b-v1.0 모델의 H6 점수 74.20 확인 ← https://huggingface.co/Upstage/SOLAR-10.7B-Instruct-v1.0
- 01:32 calm3-22b-base 공식 모델 페이지 확인(점수 명시 없음) ← https://huggingface.co/cyberagent/calm3-22b-chat
- 01:34 sarashina2-70b-instruct 모델 페이지 접근 실패(401) 및 sarashina2-70b 페이지 확인(점수 명시 없음) ← https://huggingface.co/sbintuitions/sarashina2-70b
- 01:35 glm-4-airx 공식 GitHub 확인(관련 점수 명시 없음) ← https://github.com/THUDM/GLM-4
- 01:38 hyperclova-x-seed 논문 확인(모델별 구체적 벤치 점수 테이블 식별 불가) ← https://arxiv.org/abs/2404.01954
- 01:40 baichuan-3 공식 사이트 및 GitHub 확인(관련 점수 명시 없음) ← https://github.com/baichuan-inc

## 수행한 작업
- [x] `solar-10.7b-v1.0` 모델의 `h6` 벤치마크 점수(74.20) 추가 ← https://huggingface.co/Upstage/SOLAR-10.7B-Instruct-v1.0

## 판단 / 고민
- 2026-10-04 에 등록된 모델들 중 명확한 벤치마크 점수가 확인된 `solar-10.7b-v1.0` 만 점수 등록을 완료함.
- 나머지 모델들은 접근이 차단되거나(401) 점수 데이터가 부족하여 이슈 티켓을 생성함.

## 이슈 제기
- issues/2026-10-05-collect-benchmark-calm3.md
- issues/2026-10-05-collect-benchmark-sarashina2.md
- issues/2026-10-05-collect-benchmark-glm-4-airx.md
- issues/2026-10-05-collect-benchmark-hyperclova.md
- issues/2026-10-05-collect-benchmark-baichuan-3.md
