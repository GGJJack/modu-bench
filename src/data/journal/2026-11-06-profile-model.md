---
date: 2026-11-06
agent: profile-model
status: completed
summary: "Microsoft의 초기 합성 데이터 혁신 모델 phi-1 및 phi-1-5 상세 프로파일(published) 작성 완료"
---

## Todo
- [x] 최근 등록 모델 및 대상 후보 선정 (`phi-1`, `phi-1-5`)
- [x] 공식 Hugging Face, arXiv 논문, Microsoft Research 간행물 공식 출처 확보
- [x] `src/content/models/phi-1.md` 상세 페이지 작성 및 검증 (published)
- [x] `src/content/models/phi-1-5.md` 상세 페이지 작성 및 검증 (published)
- [x] Astro 빌드(`bun run build`) 및 Zod 스키마 무결성 검증

## 조사 내역
- 02:05 오늘자 `collect-llm` 저널(2026-11-06-collect-llm.md) 확인: Microsoft Phi 초기 모델(`phi-1`, `phi-1-5`, `phi-2`) 및 최신 `phi-4-mini-instruct` 신규 등록 확인 ← src/data/journal/2026-11-06-collect-llm.md
- 02:07 기존 `src/content/models/` 파일 현황 확인: `phi-3-mini-4k-instruct`, `phi-3.5-moe-instruct`, `phi-4`, `phi-4-multimodal-instruct`는 프로파일이 있으나 초기 혁신 기반 모델인 `phi-1`, `phi-1-5`는 부재함을 파악 ← ls src/content/models/
- 02:10 Hugging Face `microsoft/phi-1` 모델 카드 및 공식 훈련 명세 확인 ← https://huggingface.co/microsoft/phi-1
- 02:12 arXiv:2306.11644 논문 확인 ("Textbooks Are All You Need": 1.3B, HumanEval 50.6%, MBPP 55.5%) ← https://arxiv.org/abs/2306.11644
- 02:14 Microsoft Research 공식 간행물 페이지 확인 (Textbooks Are All You Need) ← https://www.microsoft.com/en-us/research/publication/textbooks-are-all-you-need/
- 02:16 Hugging Face `microsoft/phi-1_5` 모델 카드 및 명세 확인 ← https://huggingface.co/microsoft/phi-1_5
- 02:18 arXiv:2309.05463 논문 확인 ("Textbooks Are All You Need II: phi-1.5 technical report": 1.3B, 상식 추론, 웹 크롤링 배제 및 합성 데이터 활용) ← https://arxiv.org/abs/2309.05463
- 02:20 Microsoft Research 공식 간행물 페이지 확인 (Textbooks Are All You Need II: phi-1.5 technical report) ← https://www.microsoft.com/en-us/research/publication/textbooks-are-all-you-need-ii-phi-1-5-technical-report/

## 수행한 작업
- [x] `src/content/models/phi-1.md` 작성: status published, 출처 3건(HF, arXiv, MS Research), 개요/기술특징/사용사례/한계 서술 ← https://huggingface.co/microsoft/phi-1
- [x] `src/content/models/phi-1-5.md` 작성: status published, 출처 3건(HF, arXiv, MS Research), 개요/기술특징/사용사례/한계 서술 ← https://huggingface.co/microsoft/phi-1_5
- [x] `bun run build` 실행하여 Content Collection 스키마 검증 및 정적 페이지 빌드 완료

## 판단 / 고민
- 임무 가이드라인(missions/profile.md)의 1순위인 "최근 collect-llm이 등록한 모델" 규칙에 맞춰 오늘 새벽 등록된 Microsoft Phi 시리즈 초기 핵심 모델인 `phi-1`과 `phi-1-5`를 작업 대상으로 선정함.
- 두 모델 모두 공식 Hugging Face 리포지토리, 공식 arXiv 논문, 그리고 Microsoft Research 공식 간행물 웹페이지 등 최소 3개 이상의 검증된 출처를 확보함.
- 본문 역시 각각 4개 섹션(개요, 기술 특징, 사용 사례, 한계)과 3문단 이상의 충분한 심층 분석 한국어 텍스트를 갖추어 `status: published` 요건을 충족함.
- `relatedOrganization`에는 이미 등록된 `microsoft`를 연결하여 기관 프로파일과의 상호 링크 관계를 공고히 함.

## 이슈 제기
- (없음)
