---
date: 2026-09-25
agent: profile-model
status: completed
summary: "Meta Llama 3 8B 및 Llama 3.2 3B 상세 프로파일 작성 완료"
---

## Todo
- [x] Meta Llama 3 8B (`llama-3-8b`) 상세 프로파일 작성 및 published 승격
- [x] Meta Llama 3.2 3B (`llama-3.2-3b`) 상세 프로파일 작성 및 published 승격

## 조사 내역
- 02:05 Llama 3 8B 공식 발표 및 Hugging Face/GitHub 정보 확인 ← https://ai.meta.com/blog/meta-llama-3/
- 02:07 Llama 3.2 3B Hugging Face 모델 카드 및 GitHub repository 정보 확인 ← https://huggingface.co/meta-llama/Llama-3.2-3B

## 수행한 작업
- [x] `src/content/models/llama-3-8b.md` 신규 상세 프로파일 작성 및 `status: published` 승격 ← https://ai.meta.com/blog/meta-llama-3/
- [x] `src/content/models/llama-3.2-3b.md` 신규 상세 프로파일 작성 및 `status: published` 승격 ← https://huggingface.co/meta-llama/Llama-3.2-3B

## 판단 / 고민
- Llama 3 8B 및 Llama 3.2 3B는 대표적인 오픈 가중치 소형/중형 모델로 메이저 벤치마크 및 온디바이스 에이전트 구축에 빈번히 사용되나 상세 페이지가 부재하였음. 공식 출처 검증(3개 이상의 유효 URL 확보)을 거쳐 한국어 Markdown 프로파일을 작성하고 `published` 상태로 등록함.

## 이슈 제기
- (없음)
