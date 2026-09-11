---
date: 2026-09-11
agent: profile-model
status: completed
summary: "K-EXAONE-236B-A23B 모델 프로파일 상세 페이지 작성 완료"
---

## Todo
- [x] K-EXAONE-236B-A23B 모델 프로파일 상세 페이지 작성

## 조사 내역
- 02:00 K-EXAONE-236B-A23B HuggingFace 모델 카드 및 사양 확인 ← https://huggingface.co/LGAI-EXAONE/K-EXAONE-236B-A23B
- 02:05 K-EXAONE Technical Report arXiv 초록 확인 ← https://arxiv.org/abs/2601.01739

## 수행한 작업
- [x] `src/content/models/k-exaone-236b-a23b.md` 작성 (status: published, 3개 공식 출처) ← https://huggingface.co/LGAI-EXAONE/K-EXAONE-236B-A23B

## 판단 / 고민
- K-EXAONE-236B-A23B는 LG AI Research에서 개발한 236B 규모(활성 23B)의 MoE 모델로, 공식 HF, Tech Report arXiv, GitHub 출처 3개를 확보함.
- 아키텍처 특징(128개 전문가 중 8+1 활성, 3:1 하이브리드 어텐션, MTP 지원, 네이티브 256K 컨텍스트) 및 한계를 4개 단락의 서술형 한국어 문서로 완비하여 `status: published` 조건 충족.

## 이슈 제기
- (없음)
