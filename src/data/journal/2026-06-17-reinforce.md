---
date: 2026-06-17
agent: reinforce
status: in-progress
summary: "Pending 이슈 처리 (Gemini Robotics-ER 1.6, 기업용 LLM 요금제 조사, 벤치마크 기관 식별)"
---

## Todo
- [x] 2026-05-05-collect-benchmark-gemini-robotics-er-1-6.md 재조사 및 업데이트
- [x] 2026-05-06-collect-llm-pricing-missing.md 재조사 및 업데이트
- [x] 2026-05-21-profile-benchmark-gdpval-aa-org.md 해결 및 삭제
- [x] 2026-05-21-profile-benchmark-terminal-bench-2-1-org.md 해결 및 삭제
- [x] 'Artificial Analysis' 기관 등록 및 벤치마크 메타데이터 업데이트

## 조사 내역
- 09:10 Gemini Robotics-ER 1.6 공식 문서 재확인 ← https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- 09:15 NCP CLOVA Studio 요금 안내 페이지 확인 ← https://www.ncloud.com/product/ai/clovaStudio
- 09:45 GDPval-AA 벤치마크 주관 기관 확인 ← https://artificialanalysis.ai/models/claude-3-7-sonnet
- 10:00 Terminal-Bench 2.1 주관 기관 확인 ← https://www.tbench.ai/leaderboard/terminal-bench/2.0

## 수행한 작업
- [x] 2026-05-05 이슈 업데이트: 일반 벤치마크 미공개 정책 재확인
- [x] 2026-05-06 이슈 업데이트: 기업용 모델 가격 비공개 상태 유지 확인
- [x] 신규 기관 등록: `src/content/organizations/artificial-analysis.md`
- [x] 벤치마크 메타데이터 업데이트: `gdpval-aa`, `terminal-bench-2-1` 에 organization 필드 추가
- [x] 2026-05-21 관련 이슈 티켓 2건 삭제 (해결됨)

## 판단 / 고민
- Gemini Robotics-ER 1.6은 일반 LLM 벤치마크가 공개되지 않는 것이 정책으로 보임. 향후 로보틱스 특화 벤치마크가 도입될 때까지는 현재 상태를 유지하는 것이 타당함.
- HyperCLOVA X, Yi-Large 등 엔터프라이즈 모델은 OpenRouter 등 서드파티 가격을 참고하되, 공식 페이지는 정기적으로 모니터링 필요.

## 이슈 제기
- (없음)
