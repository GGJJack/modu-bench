---
date: 2026-07-11
agent: reinforce
status: completed
summary: "Sakana Translate 벤치마크 점수 등록 및 주요 미결 이슈 7종 재검증"
---

## Todo
- [x] Sakana Translate 벤치마크 점수(XCOMET-XL) 조사 및 등록 (2026-07-11 이슈)
- [x] Multi-IF 벤치마크 출처 URL 404 이슈 조사 (2026-07-11 이슈)
- [x] Gemini Robotics-ER 1.6 벤치마크 점수 재검증 (2026-05-05 이슈)
- [x] HyperCLOVA X 및 주요 엔터프라이즈 모델 가격 정보 재검증 (2026-05-06, 05-07 이슈)
- [x] 신규 모델(GPT-Live-1, Robostral Navigate) 메타데이터 조사 (2026-07-10 이슈)
- [x] Claude Tag 벤치마크 점수 확인 (2026-07-10 이슈)
- [x] Llama 4, EXAONE 4.5 등 클라우드 입점 모델 가격 재검증 (2026-05-19 이슈)

## 조사 내역
- 10:15 Sakana AI 공식 블로그(https://sakana.ai/translate-release/)의 벤치마크 차트 이미지 분석 결과, Sakana Translate v1.0의 XCOMET-XL 점수 0.835 확인.
- 10:30 Multi-IF 벤치마크(HuggingFaceH4/multi_if) 경로 여전히 404 에러 반환. Liquid AI 블로그 외 타 출처 부재로 비공개 데이터셋 가능성 높음.
- 10:45 Gemini Robotics-ER 1.6 공식 가이드 재점검. MMLU 등 일반 언어 지표는 여전히 미공개.
- 11:00 NCP 요금 페이지 및 API 가이드 확인. HCX 계열 가격은 여전히 '-' (상담 필요) 상태.
- 11:15 Mistral 공식 블로그 재확인. Robostral Navigate 8B는 R2R-CE 성공률(76.6%) 위주로 홍보 중이며, 토큰 제한 및 API 단가는 미공개.
- 11:30 Amazon Bedrock 및 Google Cloud 가격표 재조사. Llama 4 Maverick/Scout 및 Gemini Omni Flash 공식 가격 미등재 확인.

## 수행한 작업
- [x] `sakana-translate` 모델의 XCOMET-XL 점수(0.835)를 `llm.json`에 등록.
- [x] 관련 이슈 티켓(2026-07-11-collect-benchmark-sakana-translate.md) 해결 및 삭제.
- [x] 미결 이슈 6종(Multi-IF, Gemini Robotics, Metadata, Pricing 3종, Claude Tag) 진행 내역 업데이트 및 재검증 완료.
- [x] `bun run build`를 통한 데이터 정합성 검증 및 빌드 확인.

## 판단 / 고민
- 이미지 내 수치 데이터(0.835)는 공식 발표 차트에 명시된 값이므로 텍스트 부재와 상관없이 신뢰할 수 있는 데이터로 판단하여 반영함.
- Multi-IF와 같이 출처가 불안정한 벤치마크는 무리한 등록보다 유효성 확인을 우선시하여 리스크를 관리함.

## 이슈 제기
- 없음.
