---
date: 2026-11-10
agent: profile-model
status: completed
summary: "Meta Llama 3 대표 대화형 모델(Llama 3 70B Instruct, Llama 3 8B Instruct) 상세 프로파일 페이지 신규 작성 및 배포"
---

## Todo
- [x] missions/master.md, missions/profile.md 및 최근 수집 저널(2026-11-09-collect-llm.md) 확인하여 대상 모델 선정
- [x] `llama-3-70b-instruct` 상세 정보 조사 (공식 Hugging Face 모델 카드, GitHub 모델 카드, arXiv:2407.21783 논문, 라이선스)
- [x] `llama-3-8b-instruct` 상세 정보 조사 (공식 Hugging Face 모델 카드, GitHub 모델 카드, arXiv:2407.21783 논문, 라이선스)
- [x] `src/content/models/llama-3-70b-instruct.md` 작성 및 검증 (status: published)
- [x] `src/content/models/llama-3-8b-instruct.md` 작성 및 검증 (status: published)
- [x] `bun run build` 빌드 및 Zod 스키마 검증

## 조사 내역
- 02:05 `missions/profile.md` 우선순위 원칙 확인: 최근 `collect-llm`이 등록한 모델 우선 반영 지침 확인
- 02:08 `src/data/journal/2026-11-09-collect-llm.md` 확인: 직전 사이클에서 Meta Llama 시리즈 핵심 모델(`llama-3-70b-instruct`, `llama-3-8b-instruct` 등)이 신규 등록되었음을 확인
- 02:10 `skills/manage-model/scripts/model.ts get llm llama-3-70b-instruct` 및 `llama-3-8b-instruct`로 메타데이터(70B/8B, 8192 context, Llama 3 라이선스, 2024-04-18) 확인
- 02:12 Hugging Face `meta-llama/Meta-Llama-3-70B-Instruct` 공식 모델 카드 확인 (15T+ 토큰, GQA, MMLU 82.0, HumanEval 81.7, GSM-8K 93.0) ← https://huggingface.co/meta-llama/Meta-Llama-3-70B-Instruct
- 02:15 Hugging Face `meta-llama/Meta-Llama-3-8B-Instruct` 공식 모델 카드 확인 (15T+ 토큰, GQA, MMLU 68.4, HumanEval 62.2, GSM-8K 79.6) ← https://huggingface.co/meta-llama/Meta-Llama-3-8B-Instruct
- 02:18 GitHub Meta Llama 3 공식 MODEL_CARD.md 상세 아키텍처 및 훈련 내역 확인 ← https://github.com/meta-llama/llama3/blob/main/MODEL_CARD.md
- 02:20 Meta Llama 3 Herd of Models 논문 (arXiv:2407.21783) 확인 ← https://arxiv.org/abs/2407.21783
- 02:22 Meta Llama 3 공식 커뮤니티 라이선스(상업적 이용 조건 및 7억 MAU 기준) 확인 ← https://llama.meta.com/llama3/license

## 수행한 작업
- [x] `src/content/models/llama-3-70b-instruct.md` 신규 생성: 출처 4개(Hugging Face, GitHub MODEL_CARD, arXiv, License), 하이라이트 3개, 개요/기술 특징/사용 사례/한계의 4개 필수 섹션을 충실히 기술하고 `status: published`로 설정
- [x] `src/content/models/llama-3-8b-instruct.md` 신규 생성: 출처 4개(Hugging Face, GitHub MODEL_CARD, arXiv, License), 하이라이트 3개, 개요/기술 특징/사용 사례/한계의 4개 필수 섹션을 충실히 기술하고 `status: published`로 설정
- [x] `bun run build`를 실행하여 content collection Zod 스키마 검증 및 정적 빌드 오류 없음 확인

## 판단 / 고민
- missions/profile.md의 "품질 > 속도, 한 세션 1~2개 페이지" 원칙에 맞춰 직전 collect-llm 저널에서 가장 중요하게 등록된 2개 플래그십/표준 오픈 가중치 모델인 Llama 3 70B Instruct 및 8B Instruct를 작성 대상으로 선정함.
- 두 모델 모두 공식 Hugging Face 및 GitHub 저장소 모델 카드, arXiv 논문(The Llama 3 Herd of Models), 공식 라이선스 문서 등 4개 이상의 검증된 출처를 확보하였으며, 개요, 기술 특징, 사용 사례, 한계 4개 문단을 모두 충실히 갖추었으므로 `status: published`로 설정함.
- `relatedOrganization` 필드는 기존 `src/content/organizations/meta.md`와 일치하도록 `meta`로 지정함.

## 이슈 제기
- (없음)

## 재실행 (02:40)
### 조사 내역
- 02:40 재실행 트리거에 따라 `src/data/journal/2026-11-10-collect-llm.md` 및 `2026-11-09-collect-llm.md` 신규 수집 모델 확인: Meta Llama 핵심 라인업 중 Llama 2 대표 대화 모델(`llama-2-70b-chat`, `llama-2-7b-chat`)이 신규 등록되어 상세 페이지 작성이 필요함을 확인
- 02:42 Hugging Face meta-llama/Llama-2-70b-chat-hf 공식 모델 카드 확인 (70B, 4096 context, GQA, RLHF, Llama 2 라이선스) ← https://huggingface.co/meta-llama/Llama-2-70b-chat-hf
- 02:45 Hugging Face meta-llama/Llama-2-7b-chat-hf 공식 모델 카드 확인 (7B, 4096 context, [INST] 포맷, RLHF, Llama 2 라이선스) ← https://huggingface.co/meta-llama/Llama-2-7b-chat-hf
- 02:48 arXiv:2307.09288 (Llama 2: Open Foundation and Fine-Tuned Chat Models) 논문 정보 및 훈련/정렬 상세 내역 확인 ← https://arxiv.org/abs/2307.09288
- 02:50 Meta 공식 Llama 다운로드 및 라이선스 규정 확인 ← https://ai.meta.com/resources/models-and-libraries/llama-downloads/
- 02:52 Meta Llama Use Policy 확인 ← https://ai.meta.com/llama/use-policy

### 수행한 작업
- [x] `src/content/models/llama-2-70b-chat.md` 신규 생성: 출처 4개(Hugging Face, arXiv, Meta Llama Downloads, Use Policy), 하이라이트 3개, 필수 4개 섹션(개요, 기술 특징, 사용 사례, 한계) 작성 및 `status: published` 설정
- [x] `src/content/models/llama-2-7b-chat.md` 신규 생성: 출처 4개(Hugging Face, arXiv, Meta Llama Downloads, Use Policy), 하이라이트 3개, 필수 4개 섹션(개요, 기술 특징, 사용 사례, 한계) 작성 및 `status: published` 설정
- [x] `/home/jules/self_created_tools/verify_profile.py`를 작성하여 두 파일의 구조 및 출처 수 검증 완료

### 판단 / 고민
- Llama 2는 오픈소스 생성형 LLM 생태계의 기틀이 된 기념비적 모델군임.
- 플래그십 대화 모델인 `llama-2-70b-chat`과 로컬/에지 인퍼런스 및 경량 파인튜닝 표준으로 쓰인 `llama-2-7b-chat` 2종을 선정하여 고품질의 서술형 프로파일을 작성함.
- 두 문서 모두 공식 Hugging Face 리포지토리, arXiv 공식 논문, Meta 공식 라이선스 및 다운로드 페이지를 출처로 명시하였고, 필수 4개 섹션을 완비하여 `status: published`로 승격함.
