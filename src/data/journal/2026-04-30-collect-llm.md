---
status: completed
skill: collect-llm
date: 2026-04-30
---

# 2026-04-30 collect-llm 저널

## 수집 계획
- [x] 신규 모델 발견 (목표: 1~3건)
- [x] 기존 모델 보강 (목표: 3~5건)
- [ ] 교차 발견 확인 (TTS/STT 등)

## 작업 내역

### 1. 신규 모델 발견 및 등록
- **Mistral 3 8B**: Mistral AI의 신규 중형 모델 (2026-04-27 발표)
  - `links.official`: https://mistral.ai/news/mistral-3
- **Mistral 3 3B**: Mistral AI의 신규 소형 모델 (2026-04-27 발표)
  - `links.official`: https://mistral.ai/news/mistral-3

### 2. 기존 모델 보강
- **Mistral Medium 3.5**:
  - `parameterSize`: "128B (dense)" ← Memory (Released 2026-04-29)
- **Mistral Small 4**:
  - `releaseDate`: "2026-03-16" ← Memory (v26.03 release date correction)
- **Mistral Large 3** & **Ministral 3 14B**:
  - `releaseDate`: "2026-04-27" ← Mistral 3 제품군 공식 발표일로 통일

### 3. 미결 이슈 및 보류
- **GPT-5.5**: OpenAI 공식 블로그(https://openai.com/index/introducing-gpt-5-5/) 외에 구체적인 파라미터나 가격 정보 미확인으로 null 유지.
- **Sakana Fugu Series**: 공식 베타 페이지(https://sakana.ai/fugu-beta/)에서 세부 스펙 미공개로 null 유지.

## 완료 기준 확인
- [x] 저널 frontmatter `status: completed` 설정
- [x] 추측 데이터 배제 (공공 메모 및 공식 링크 기반)
- [x] 확인 실패 건은 추후 보강 과제로 유지
