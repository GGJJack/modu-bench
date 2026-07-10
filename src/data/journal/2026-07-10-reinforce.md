---
date: 2026-07-10
agent: reinforce
status: completed
summary: "Sierra Research 조직 프로필 보강 및 주요 미결 이슈 재검증"
---

## Todo
- [x] Sierra Research 조직 상세 정보 조사 및 프로필 업데이트 (2026-07-10 이슈)
- [x] Gemini Robotics-ER 1.6 벤치마크 점수 재검증 (2026-05-05 이슈)
- [x] HyperCLOVA X 및 주요 엔터프라이즈 모델 가격 정보 재검증 (2026-05-06 이슈)
- [x] 신규 등록 모델(GPT-Live-1, Robostral Navigate) 메타데이터 조사 (2026-07-10 이슈)
- [x] Claude Tag 벤치마크 점수 확인 (2026-07-10 이슈)

## 조사 내역
- 04:10 Sierra Research 공식 웹사이트(https://sierra.ai/) 및 GitHub(https://github.com/sierra-research) 조사. Bret Taylor, Clay Bavor 공동 창립 및 Tau-bench 시리즈(Tau, Tau2, Tau3) 개발 확인.
- 04:30 Gemini Robotics-ER 1.6 공식 문서 재확인 결과, 표준 LLM 벤치마크(MMLU 등) 여전히 미공개.
- 04:35 NCP 요금 안내 페이지 재확인 결과, HCX 계열 가격 여전히 상담 필요('-'). Yi-Large 및 Baichuan-4 공식 가격 변동 없음.
- 04:40 Anthropic 블로그 확인 결과, Claude Tag는 Opus 4.8 기반이며 특정 벤치마크 수치는 미공개.
- 04:45 GPT-Live-1 및 Robostral Navigate는 현재 앱/데모 위주로 공개되어 있으며, 개발자용 상세 사양(Context Window, API Pricing)은 아직 발표되지 않음.

## 수행한 작업
- [x] Sierra Research 조직 프로필(`sierra-research.md`) 상세화 및 `published` 상태로 전환.
- [x] 관련 이슈 티켓(2026-07-10-profile-benchmark-sierra-research.md) 해결 및 삭제.
- [x] 미결 이슈 4종(Gemini Robotics, Pricing, Metadata, Claude Tag) 진행 내역 업데이트 및 재검증 완료.

## 판단 / 고민
- Sierra Research의 Tau 벤치마크는 에이전트 성능 평가에 있어 중요한 지표이므로 조직 프로필에 상세히 기술함.
- 엔터프라이즈 모델 및 최신 모델의 경우 공식 기술 리포트 공개 전까지는 추측성 데이터를 배제하고 정기 모니터링 체제를 유지함.

## 이슈 제기
- 없음.
