---
date: 2026-09-11
agent: collect-llm
status: completed
summary: "K-EXAONE-236B-A23B 신규 수집 등록 및 EXAONE 4.5 33B 논문/GitHub 링크 보강"
---

## Todo
- [x] 국가별 독자 LLM 스캔 (LG AI Research EXAONE 라인업)
- [x] K-EXAONE-236B-A23B 신규 등록
- [x] EXAONE 4.5 33B 메타데이터 보강 (paper, github)

## 조사 내역
- 01:05  K-EXAONE-236B-A23B 메타데이터 확인  ← https://huggingface.co/LGAI-EXAONE/K-EXAONE-236B-A23B
- 01:07  K-EXAONE 기술 리포트 확인  ← https://arxiv.org/abs/2601.01739
- 01:10  EXAONE 4.5 33B 논문 출처 확인  ← https://huggingface.co/papers/2604.08644

## 수행한 작업
- [x] `k-exaone-236b-a23b` 신규 등록 (id, name, provider, releaseDate, license, parameterSize, contextWindow, links)  ← https://huggingface.co/LGAI-EXAONE/K-EXAONE-236B-A23B
- [x] `exaone-4-5-33b` 메타데이터 보강 (links.paper, links.github, links.huggingface)  ← https://huggingface.co/papers/2604.08644

## 판단 / 고민
- K-EXAONE-236B-A23B는 LG AI Research의 최신 프론티어급 MoE 모델로, 필수 5필드와 세부 파라미터/컨텍스트 및 출처 URL을 모두 확보하여 정상 등록함.
- EXAONE 4.5 33B는 기존 항목의 huggingface 조직 URL 수정 및 논문/github 링크를 추가하여 보강 완료함.

## 이슈 제기
- (없음)
