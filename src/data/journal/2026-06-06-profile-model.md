---
date: 2026-06-06
agent: profile-model
status: completed
summary: "Solar Pro 2 및 Step 3.7 Pro 모델 상세 페이지 작성 완료"
---

## Todo
- [x] Solar Pro 2 (Upstage) 상세 페이지 작성
- [x] Step 3.7 Pro (StepFun) 상세 페이지 작성

## 조사 내역
- 11:30 Solar Pro 2 공식 런칭 블로그 확인 ← https://www.upstage.ai/blog/en/solar-pro-2-launch
- 11:32 Step 3.7 Pro 레지스트리 정보 확인 (1M 컨텍스트, $0.1/$0.3)
- 11:50 Solar Pro 2 한국어 런칭 블로그 추가 확인 ← https://www.upstage.ai/blog/ko/solar-pro-2-launch
- 12:10 Step 3.7 시리즈의 Agent-first 특징 및 멀티모달 역량 확인 ← https://platform.stepfun.com/

## 수행한 작업
- [x] `src/content/models/solar-pro-2.md` 신규 생성 (status: published)
- [x] `src/content/models/step-3-7-pro.md` 신규 생성 (status: draft)

## 판단 / 고민
- Solar Pro 2는 한/영 블로그 및 기술 정보를 충분히 확보하여 `published`로 설정함.
- Step 3.7 Pro는 공식 플랫폼 상의 제품 설명(Step 3.7 Flash 포함)을 바탕으로 내용을 구성했으나, Pro 전용 상세 데이터가 더 필요할 수 있어 `draft` 유지함.
- `releaseDate`, `license` 필드는 콘텐츠 스키마(`src/content.config.ts`)에 포함되지 않아 frontmatter에서 제외함. UI는 레지스트리 JSON 데이터를 참조하는 것으로 판단됨.

## 이슈 제기
- (없음)
