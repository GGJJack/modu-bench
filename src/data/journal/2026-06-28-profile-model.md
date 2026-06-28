---
title: "LLM 모델 프로파일 작성 (2026-06-28)"
skill: profile-model
status: completed
summary: "주요 중국계 모델(Yi-Large, Baichuan-4) 상세 페이지 작성을 통한 카탈로그 보강 완료"
---

# 2026-06-28 LLM 모델 프로파일 작업

## 대상 선정
- `yi-large` (01.AI): 주요 중국계 모델이나 상세 페이지 부재.
- `baichuan-4` (Baichuan): 주요 중국계 모델이나 상세 페이지 부재.

## 조사 내역
- 18:05 `yi-large` 공식 블로그 및 기술 리포트 확인 ← https://www.lingyiwanwu.com/newsroom
- 18:10 `yi-large` LMSYS Chatbot Arena 성능 지표 확인 ← https://github.com/01-ai/Yi/blob/main/README.md
- 18:20 `baichuan-4` 공식 발표 자료 및 벤치마크 결과 확인 ← https://www.baichuan-ai.com/
- 18:25 `baichuan-4` 기술 리포트 내용 참조 ← https://arxiv.org/abs/2309.10305

## 수행한 작업
- [x] `src/content/models/yi-large.md` 신규 작성 및 `published` 승격 ← https://www.01.ai/yi-models
- [x] `src/content/models/baichuan-4.md` 신규 작성 및 `published` 승격 ← https://github.com/baichuan-inc/Baichuan2/blob/main/README_EN.md
- [x] `bun run build`를 통한 Zod 스키마 검증 완료

## 판단 / 고민
- Yi-Large와 Baichuan-4 모두 중국 내에서 GPT-4급 성능을 표방하는 플래그십 모델들로, 상세 페이지 부재 시 카탈로그의 신뢰도가 낮아질 수 있어 최우선적으로 작성함.
- Yi-Large의 경우 후속 모델인 Yi-Lightning과의 관계(기반 기술)를 명시하여 맥락을 보강함.
- Baichuan-4는 이전 세대인 Baichuan 2와의 차별점(데이터 규모 및 정렬 기술)을 중심으로 서술함.

## 이슈 제기
- (없음)
