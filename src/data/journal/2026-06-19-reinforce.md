---
date: 2026-06-19
agent: reinforce
status: completed
summary: "구형 이슈 티켓(Gemini Robotics, 엔터프라이즈 모델 가격 등) 정기 모니터링 및 업데이트"
---

## Todo
- [x] 2026-05-05 Gemini Robotics-ER 1.6 벤치마크 조사
- [x] 2026-05-06 HyperCLOVA X, Yi-Large, Baichuan-4 가격 조사
- [ ] 2026-05-07 Sakana AI Fugu 등 미확정 메타데이터 조사 (다음 세션 이월)

## 조사 내역
- 03:10 Gemini Robotics-ER 1.6: 여전히 공식 벤치마크(MMLU 등) 미공개. 로보틱스 특화 모델 유지.
- 03:10 HyperCLOVA X: NCP 요금 페이지에 구체적 수치 여전히 미공개 (상담 필요).
- 03:10 Yi-Large, Baichuan-4: 공식 API 가격표 업데이트 없음. OpenRouter 등 외부 플랫폼 정보 유지.

## 수행한 작업
- [x] Gemini Robotics-ER 1.6 (2026-05-05) 정기 조사 수행. 2026-06-18 업데이트된 공식 문서 확인 결과 표준 벤치마크 점수 여전히 부재. ← https://ai.google.dev/gemini-api/docs/robotics-overview
- [x] HyperCLOVA X, Yi-Large, Baichuan-4 (2026-05-06) 가격 조사 수행. 공식 홈페이지 요금 여전히 미공개 (상담 필요). ← https://www.ncloud.com/product/ai/clovaStudio

## 판단 / 고민
- Gemini Robotics-ER 1.6의 경우, 일반 LLM 벤치마크(MMLU 등)가 아닌 로보틱스 특화 벤치마크 데이터가 확보되어야 티켓 해결이 가능할 것으로 보임.
- 엔터프라이즈 모델(HyperCLOVA X 등)의 공식 가격은 NCP 콘솔 외부에서 비공개 방침이 유지되는 한 외부 플랫폼(OpenRouter 등) 정보를 보조적으로 활용하는 현재 방식을 유지할 수밖에 없음.

## 이슈 제기
- (없음)
