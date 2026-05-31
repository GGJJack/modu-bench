---
date: 2026-05-31
agent: reinforce
status: completed
summary: "Mistral Medium 3.5, HLE, Sakana Fugu 점수 보강 및 ETRI 프로필 업데이트 완료"
---

## Todo
- [x] Mistral Medium 3.5 벤치마크 점수 보강 (SWE-bench, Tau-bench) ← https://mistral.ai/news/vibe-remote-agents-mistral-medium-3-5
- [x] HLE (Humanity's Last Exam) 벤치마크 점수 보강 ← https://lastexam.ai/
- [x] Sakana AI Fugu 모델 벤치마크 점수 보강 ← https://sakana.ai/fugu-beta/
- [x] ETRI 기관 프로필 보강 (Exobrain, KoBERT) ← https://ko.wikipedia.org/wiki/한국전자통신연구원
- [x] 관련 이슈 티켓 정리 (2026-05-12-profile-benchmark-etri.md 등 삭제)

## 조사 내역
- 10:00 작업 시작
- 10:05 Mistral Medium 3.5 공식 블로그 확인. SWE-bench Verified 77.6%, Tau-bench Telecom 91.4 확인.
- 10:10 HLE 공식 사이트(lastexam.ai) 확인. Gemini 3 Pro (38.3%), GPT-5 (25.3%), Grok 4 (24.5%) 등 최신 모델 점수 확인.
- 10:20 Sakana AI 블로그 확인. Fugu Ultra (GPQA 95.1), Fugu Mini (GPQA 92.4) 점수 확인.
- 10:30 ETRI 위키백과 및 공식 홈페이지 확인. Exobrain, KoBERT 등 성과 정리.

## 수행한 작업
- 10:15 Mistral Medium 3.5 점수 등록 완료.
- 10:40 HLE 점수 (11개 모델) 등록 완료. 이를 위해 o1, gpt-5 등 누락된 프론티어 모델 ID 생성.
- 10:50 Sakana Fugu 모델 점수 보강 완료.
- 11:00 ETRI 기관 상세 페이지 (`src/content/organizations/etri.md`) 업데이트 완료.
- 11:10 해결된 이슈 티켓 (`2026-05-12-profile-benchmark-etri.md`, `2026-05-12-collect-benchmark-missing-scores.md`, `2026-05-10-collect-benchmark-missing-benchmarks.md`) 삭제.

## 판단 / 고민
- Mistral Medium 3.5 Vibe 는 모델 자체가 아니라 Vibe 서비스와 결합된 명칭으로 보임. 점수는 mistral-medium-3-5 에 등록함.
- HLE 대시보드에 등장하는 모델들(o3-mini, GPT-5-mini 등)이 레지스트리에 없어 신규 생성 후 점수 할당함.

## 이슈 제기
