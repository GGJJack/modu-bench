---
date: 2026-08-02
agent: collect-llm
status: completed
summary: "Baichuan2 및 Yi-1.5 계열 4개 신규 모델 등록 및 EXAONE 3.0 등 4개 모델 공식 링크 보강 완료"
---

## Todo
- [x] Baichuan2-7B-Base, Baichuan2-13B-Base, Yi-1.5-9B-Chat, Yi-1.5-6B-Chat 신규 모델 수집 및 등록 ➔ https://www.baichuan-ai.com/, https://github.com/01-ai/Yi-1.5
- [x] Baichuan2-7B-Chat, Baichuan2-13B-Chat, Yi-1.5-34B-Chat, EXAONE 3.0 공식 링크 및 레포지토리 보강 ➔ https://github.com/baichuan-inc/Baichuan2, https://github.com/01-ai/Yi-1.5, https://arxiv.org/abs/2408.03541

## 조사 내역
- 13:00  작업 시작 및 임무 포커스 대조
- 13:10  Baichuan2 및 Yi-1.5 시리즈 라이선스 및 릴리스 일정 대조 ← https://www.baichuan-ai.com/, https://github.com/01-ai/Yi-1.5
- 13:20  EXAONE 3.0 공식 테크니컬 리포트 arXiv ID 확보 및 대조 ← https://arxiv.org/abs/2408.03541

## 수행한 작업
- [x] `baichuan2-7b-base` 신규 등록 (7B, Context 4K, Baichuan 2 Community License) ➔ https://www.baichuan-ai.com/
- [x] `baichuan2-13b-base` 신규 등록 (13B, Context 4K, Baichuan 2 Community License) ➔ https://www.baichuan-ai.com/
- [x] `yi-1-5-9b-chat` 신규 등록 (9B, Context 4K, Apache-2.0) ➔ https://github.com/01-ai/Yi-1.5
- [x] `yi-1-5-6b-chat` 신규 등록 (6B, Context 4K, Apache-2.0) ➔ https://github.com/01-ai/Yi-1.5
- [x] `baichuan2-7b-chat` 기존 모델 정보 보강 (links.github 보강) ➔ https://github.com/baichuan-inc/Baichuan2
- [x] `baichuan2-13b-chat` 기존 모델 정보 보강 (links.github 보강) ➔ https://github.com/baichuan-inc/Baichuan2
- [x] `yi-1-5-34b-chat` 기존 모델 정보 보강 (links.github 보강) ➔ https://github.com/01-ai/Yi-1.5
- [x] `exaone-3.0` 기존 모델 정보 보강 (links.paper 보강) ➔ https://arxiv.org/abs/2408.03541

## 판단 / 고민
- `missions/llm.md`에 정의된 소버린 모델 수집 지침에 따라, 중국의 주요 오픈소스 소버린 모델군인 Baichuan2 Base 모델들과 Yi-1.5 Chat 모델들을 추가하여 도메인 데이터를 보강했습니다.
- 아울러 EXAONE 3.0의 arXiv 테크니컬 리포트 링크 및 Baichuan2, Yi-1.5의 GitHub 레포지토리 주소를 보강하여 메타데이터 품질을 최우선으로 제고했습니다.

## 이슈 제기
- (없음)
