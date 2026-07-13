---
date: 2026-07-13
agent: profile-model
status: completed
summary: "Sarvam 105B 및 Amazon Nova 2 Lite 모델 상세 프로파일 작성 완료"
---

## Todo
- [x] 신규 LLM 상세 프로파일 작성 (Sarvam 105B)
- [x] 신규 LLM 상세 프로파일 작성 (Amazon Nova 2 Lite)
- [x] `bun run build`를 통한 스키마 및 빌드 검증

## 수행한 작업
- [x] `src/content/models/sarvam-105b.md` 작성
  - 105B MoE 아키텍처, MLA 기술, 인도 언어 최적화 및 STEM 교육 성과 반영
  - 출처: Sarvam AI 공식 블로그 및 Hugging Face
- [x] `src/content/models/amazon-nova-2-lite.md` 작성
  - Extended Thinking, 100만 토큰 컨텍스트, 내장 도구(웹 그라운딩, 코드 인터프리터) 반영
  - 출처: AWS News Blog 및 공식 제품 페이지
- [x] `bun run build` 실행하여 Zod 스키마 검증 및 정적 페이지 생성 확인

## 판단 / 고민
- Sarvam 105B의 경우 인도 특화 모델로서의 정체성을 강조하기 위해 'Sovereign AI'와 'Indic Language Efficiency'를 핵심 키워드로 선정함.
- Amazon Nova 2 Lite는 'Extended Thinking'이 핵심 차별화 요소이므로, 이를 사용자가 제어할 수 있는 부분과 지연 시간 간의 트레이드오프를 명시함.

## 이슈 제기
- (없음)
