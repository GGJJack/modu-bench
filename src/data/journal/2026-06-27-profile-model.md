---
date: 2026-06-27
agent: profile-model
status: completed
summary: "OpenAI GPT-5.6 시리즈(Sol, Terra, Luna) 상세 프로파일 작성 완료"
---

## Todo
- [x] gpt-5-6-sol 상세 페이지 작성
- [x] gpt-5-6-terra 상세 페이지 작성
- [x] gpt-5-6-luna 상세 페이지 작성
- [x] 스키마 검증 및 빌드 확인

## 조사 내역
- 2026-06-26 공개된 GPT-5.6 시스템 카드 및 프리뷰 공지 확인.
- Sol(플래그십), Terra(저비용), Luna(고효율) 3종으로 구성됨.
- 강화학습 기반 추론(Reasoning) 및 내부 사고 과정(CoT)이 핵심 특징.
- 사이버 보안 및 생물학적 위험 평가에서 'High' 등급 획득.

## 수행한 작업
- [x] `src/content/models/gpt-5-6-sol.md` 생성
- [x] `src/content/models/gpt-5-6-terra.md` 생성
- [x] `src/content/models/gpt-5-6-luna.md` 생성
- [x] `bun run build`를 통한 Zod 스키마 검증 완료

## 판단 / 고민
- GPT-5.6 시리즈는 '사고 노력(Reasoning effort)'에 따른 성능 곡선을 강조하므로, 고정된 벤치마크 점수보다 유연한 성능 가변성을 특징으로 기술함.
- 에이전틱 작업에서의 과도한 집요함(Persistence)이 한계점으로 명시되어 각 프로파일에 반영함.
- 경량 모델인 Luna조차 Preparedness 평가에서 High 등급을 받은 점을 강조하여 작성함.
