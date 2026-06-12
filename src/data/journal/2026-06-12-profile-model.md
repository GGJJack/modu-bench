---
date: 2026-06-12
agent: profile-model
status: completed
summary: "Sakana AI의 Namazu 시리즈(3종) 프로파일링 완료"
---

## Todo
- [x] Llama-3.1-Namazu-405B 프로파일 작성
- [x] Namazu-gpt-oss-120B 프로파일 작성
- [x] Namazu-DeepSeek-V3.1-Terminus 프로파일 작성
- [x] 빌드 및 시각적 검증

## 조사 내역
- 10:05 Sakana AI Namazu 블로그 확인 ← https://sakana.ai/namazu-alpha/
  - 일본 사양에 맞춘 사후 학습(Post-training) 기술 실증 모델.
- 10:10 모델 레지스트리 확인
  - Llama-3.1-Namazu-405B, Namazu-gpt-oss-120B, Namazu-DeepSeek-V3.1-Terminus 존재 확인.
  - 중립성 및 사실 정확성 개선, 특히 답변 거부율(Refusal) 대폭 감소.
  - Sakana Chat에 탑재되어 웹 검색 기능과 통합.
- 10:15 GMO 인터넷 그룹 보도자료 확인 ← https://group.gmo/news/article/9704/
  - Sakana AI와 공동으로 일본어 LLM 연구 개발 개시(2025년 10월).
  - 간병, 복지, 교육 등 사회적 구현 목표.

## 수행한 작업
- `src/content/models/llama-3-1-namazu-405b.md` 생성
- `src/content/models/namazu-gpt-oss-120b.md` 생성
- `src/content/models/namazu-deepseek-v3-1.md` 생성
- `bun run build`를 통한 Zod 스키마 및 정적 페이지 생성 검증 완료.

## 판단 / 고민
- Namazu 시리즈는 개별 모델이면서도 기술 실증적 성격이 강함. 공통된 기술적 배경(사후 학습을 통한 거부율 개선 및 중립성 확보)을 본문에 상세히 서술함.
