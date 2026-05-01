---
status: completed
skill: collect-llm
date: 2026-05-01
---

# 2026-05-01 collect-llm 저널

## 수집 계획
- [x] 신규 모델 발견 (목표: 1~3건)
- [x] 기존 모델 보강 (목표: 3~5건)
- [x] 교차 발견 확인 (TTS/STT 등)

## 작업 내역

### 1. 신규 모델 발견 및 등록
- **Ministral 3 14B Reasoning**: Mistral 3 제품군의 14B 추론 최적화 모델.
  - `pricing`: $0.20/$0.20 per 1M tokens.
  - `links.official`: https://mistral.ai/news/mistral-3
- **Ministral 3 8B Reasoning**: Mistral 3 제품군의 8B 추론 최적화 모델.
  - `pricing`: $0.15/$0.15 per 1M tokens.
  - `links.official`: https://mistral.ai/news/mistral-3
- **Ministral 3 3B Reasoning**: Mistral 3 제품군의 3B 추론 최적화 모델.
  - `pricing`: $0.10/$0.10 per 1M tokens.
  - `links.official`: https://mistral.ai/news/mistral-3

### 2. 기존 모델 보강
- **Mistral 3 8B / 3B**:
  - `pricing`: $0.15/$0.15 (8B), $0.10/$0.10 (3B) per 1M tokens.
  - `license`: "Apache-2.0" (공식 발표에 따라 Proprietary에서 수정).
- **Mistral Large 3 / Ministral 3 14B**:
  - `license`: "Apache-2.0" (기존 Proprietary에서 수정).

### 3. 미결 이슈 및 보류
- **GPT-5.5**: OpenAI 공식 블로그 외에 구체적인 파라미터나 가격 정보 미확인으로 null 유지.
- **Sakana Fugu Series**: 공식 베타 페이지(https://sakana.ai/fugu-beta/)에서 성능 벤치마크는 공개되었으나 세부 스펙(파라미터 수) 및 가격은 비공개 상태로 null 유지.

## 완료 기준 확인
- [x] 저널 frontmatter `status: completed` 설정
- [x] 추측 데이터 배제 (공공 메모 및 공식 링크 기반)
- [x] 확인 실패 건은 추후 보강 과제로 유지
