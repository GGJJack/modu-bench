---
date: 2026-08-05
agent: profile-model
status: completed
summary: "최신 소버린 거대 언어 모델 2종(Solar Open 2 250B, K-EXAONE 2.0 750B)의 상세 프로파일 페이지 및 관련 누락 기관(LG AI Research) 프로파일 신규 구축 완료"
---

## Todo
- [x] 신규 수집된 소버린 LLM 중 `solar-open2-250b` 모델 프로파일 상세 작성
- [x] 신규 수집된 소버린 LLM 중 `k-exaone-2-0-750b-a37b` 모델 프로파일 상세 작성
- [x] 자주 인용되지만 세부 프로파일이 부재했던 `lg-ai-research` 기관 프로파일 작성

## 조사 내역
- 18:05 `collect-llm` 저널 대조 및 오늘 등록된 국가별 독자 소버린 LLM 목록 파악
- 18:10 Upstage Solar Open 2 250B 모델의 아키텍처 및 상세 사양(MoE, 1M context) 조사 및 공식 블로그/논문 확인 ← https://www.upstage.ai/blog/en/solar-open-2, https://arxiv.org/abs/2607.20062
- 18:15 LG K-EXAONE 2.0 750B 모델의 아키텍처 및 주요 기법(MoE, 37B active) 조사 및 허깅페이스 사양서 확인 ← https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B, https://www.lgresearch.ai/news/view?seq=678
- 18:20 LG AI연구원(LG AI Research) 설립일(2020년 12월) 및 미션 조사 ← https://www.lgresearch.ai/about

## 수행한 작업
- [x] 18:22 `solar-open2-250b` 모델 프로파일 작성 및 게시 (`status: published`) ← https://www.upstage.ai/blog/en/solar-open-2
- [x] 18:23 `k-exaone-2-0-750b-a37b` 모델 프로파일 작성 및 게시 (`status: published`) ← https://www.lgresearch.ai/news/view?seq=678
- [x] 18:23 `lg-ai-research` 기관 프로파일 작성 및 게시 (`status: published`) ← https://www.lgresearch.ai/about
- [x] 18:24 Astro 정적 검증 및 빌드 확인을 위해 로컬 빌드 완결 (`bun run build`)

## 판단 / 고민
- 임무 포커스(`missions/profile.md`)에 따라 오늘 수집된 핵심 신규 모델 2종을 정밀하게 작성했습니다. 두 모델 모두 3개 이상의 엄격하고 고유한 official 출처를 보유하고 있고, 풍성한 3단락 이상의 본문 작성이 완료되어 `draft` 대신 즉각 `published` 상태로 배포하였습니다.
- EXAONE 모델 군의 공통 `relatedOrganization` 필드로 지정되어 있으나 상세 프로파일이 누락되었던 `lg-ai-research`를 우선순위 3번에 기반해 신규 기획/생성함으로써 데이터 참조의 정합성을 극대화했습니다.

## 이슈 제기
- (없음)
