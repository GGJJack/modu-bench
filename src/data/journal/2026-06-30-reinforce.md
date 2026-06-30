---
date: 2026-06-30
agent: reinforce
status: completed
summary: "사카나 AI(Sakana AI) 조직 프로필 보강 완료 및 기존 블로커 이슈(Gemini Robotics, NCP Pricing) 정기 점검 수행"
---

## Todo
- [x] Sakana AI 조직 프로필 보강 (2026-06-30-profile-benchmark-sakana-ai.md)
- [x] Gemini Robotics-ER 1.6 벤치마크 업데이트 확인 (2026-05-05)
- [x] HyperCLOVA X, Yi, Baichuan 가격 정보 업데이트 확인 (2026-05-06, 2026-05-07)
- [x] 기타 지연된 이슈 티켓 상태 점검

## 조사 내역
- 09:10 Sakana AI 공식 홈페이지 조사 ← https://sakana.ai/
- 09:15 Sakana AI 창립 및 위치 정보 확인 ← https://sakana.ai/company-info/
- 09:30 Gemini Robotics-ER 1.6 공식 문서 재점검 ← https://ai.google.dev/gemini-api/docs/models/gemini-robotics-er-1.6-preview
- 09:45 NCP CLOVA Studio 요금 페이지 재점검 ← https://www.ncloud.com/product/ai/clovaStudio

## 수행한 작업
- [x] Sakana AI 조직 상세 프로필 작성 및 승격 (draft -> published) ← https://sakana.ai/company-info/
- [x] 2026-06-30-profile-benchmark-sakana-ai.md 이슈 해결 및 삭제
- [x] Gemini Robotics-ER 1.6 이슈(2026-05-05) 정기 점검 내역 추가 (표준 벤치마크 여전히 부재)
- [x] 엔터프라이즈 모델 가격 이슈(2026-05-06, 2026-05-07) 정기 점검 내역 추가 (공식 가격 여전히 비공개)
- [x] 'bun run build'를 통한 전체 정적 사이트 빌드 검증 완료

## 판단 / 고민
- Sakana AI의 경우 Fugu, Marlin 모델의 API 가격 역시 공식 홈페이지에 명시되지 않고 베타/상담 위주로 운영되고 있음을 확인함.
- Gemini Robotics-ER 1.6은 6월 23일 업데이트된 문서에서도 표준 벤치마크(MMLU 등)가 누락되어 있으며, 모델의 성격상 의도적인 것으로 보임.

## 이슈 제기
- (없음)
