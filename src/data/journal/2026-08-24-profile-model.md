---
date: 2026-08-24
agent: profile-model
status: completed
summary: "K-EXAONE 2.0 750B A37B 및 Solar Open 2 250B 모델 상세 프로파일(Markdown) 신규 작성 완료"
---

## Todo
- [x] 미작성 LLM 모델 탐색 및 우선순위 지정 (`k-exaone-2-0-750b-a37b`, `solar-open2-250b`)
- [x] `src/content/models/k-exaone-2-0-750b-a37b.md` 상세 프로파일 작성 및 출처 검증
- [x] `src/content/models/solar-open2-250b.md` 상세 프로파일 작성 및 출처 검증
- [x] `bun run build` 스키마 검증 및 프로젝트 빌드 성공 확인

## 조사 내역
- 02:05 K-EXAONE 2.0 750B A37B 메타데이터 및 기술 사양 확인 (750B MoE, 37B Active, 256K Context, Apache-2.0) ← https://www.lgresearch.ai/news/view?seq=678
- 02:05 K-EXAONE 2.0 750B A37B 리포지토리 및 테크니컬 리포트 확인 ← https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B
- 02:07 Solar Open 2 250B 메타데이터 및 공식 블로그 확인 (250B, 1M Context, Upstage Solar License) ← https://www.upstage.ai/blog/en/solar-open-2
- 02:07 Solar Open 2 250B 논문 및 HuggingFace 모델 카드 확인 ← https://huggingface.co/upstage/Solar-Open2-250B

## 수행한 작업
- [x] `src/content/models/k-exaone-2-0-750b-a37b.md` 신규 생성 (`status: published`) ← https://www.lgresearch.ai/news/view?seq=678
- [x] `src/content/models/solar-open2-250b.md` 신규 생성 (`status: published`) ← https://www.upstage.ai/blog/en/solar-open-2

## 판단 / 고민
- 품질 지침에 따라 1회 세션당 2개 모델 프로파일 작성을 유지하여 개요, 기술 특징, 사용 사례, 한계 구성을 풍부하게 서술하였습니다.
- 두 모델 모두 공식 링크 및 기술 리포트 URL 3개 이상이 확보되어 `status: published`로 설정하였습니다.

## 이슈 제기
- (없음)
