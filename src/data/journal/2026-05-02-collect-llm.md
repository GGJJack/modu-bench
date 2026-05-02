---
status: completed
skill: collect-llm
date: 2026-05-02
---

# 2026-05-02 collect-llm 저널

## 수집 계획
- [x] 신규 모델 발견 및 등록 (목표: 3~5건)
- [x] 기존 모델 보강 (목표: 3~5건)
- [x] 교차 발견 확인 (TTS/STT 등)

## 작업 내역

### 1. 신규 모델 발견 및 등록
- **DeepSeek-V4-Flash**: DeepSeek의 고속 추론 및 경제적 모델. 2026-04-24 출시.
  - `parameterSize`: "284B total / 13B active"
  - `pricing`: $0.14/$0.28 per 1M tokens.
  - `links.official`: https://api-docs.deepseek.com/news/news260424
- **Qwen-Plus**: Alibaba Cloud의 API 전용 플래그십 모델.
  - `releaseDate`: 2024-09-19
  - `links.official`: https://qwenlm.github.io/blog/qwen2.5/
- **Grok 4.3**: xAI의 최신 지능형 모델. 2026-04-16 출시 (Grok 4 시리즈의 최신 안정 버전으로 확인).
  - `links.official`: https://docs.x.ai/developers/models

### 2. 기존 모델 보강
- **DeepSeek-V4-Pro**:
  - `parameterSize`: "1.6T total / 49B active" (공식 기술 리포트 확인).
  - `pricing`: $0.435/$0.87 (75% 할인 프로모션 가격 반영, 정상가 $1.74/$3.48).
  - `links.official`: https://api-docs.deepseek.com/quick_start/pricing

### 3. 교차 발견 및 기타
- **Grok Voice Think Fast 1.0** (TTS): xAI의 실시간 음성 에이전트 API.
  - `pricing`: $3.00/hour (Agent), $4.20/1M characters (TTS).
  - `links.official`: https://x.ai/news/grok-voice-think-fast-1
- **Grok Imagine Video** (image-gen): xAI의 비디오 생성 API.
  - `links.official`: https://x.ai/news/grok-imagine-api

## 미결 이슈 및 보류
- **GPT-5.5 / Claude for Creative Work**: 공식 출시 뉴스는 있으나 세부 기술 사양(파라미터 등) 및 API 가격 정보가 공식 페이지에서 확인되지 않아 null 유지.
- **Sakana Fugu Series**: 성능 벤치마크 데이터는 공개되었으나, 파라미터 수 및 상업적 API 가격은 여전히 비공개 상태임.
- **Korean LLMs (HyperCLOVA X, EXAONE 3.0, Solar Pro 3)**: 최신 HCX-003 및 Solar Pro 3의 토큰당 가격 정보가 공식 페이지에서 명시적으로 확인되지 않음 (기업 협의 대상 또는 별도 콘솔 확인 필요).

## 완료 기준 확인
- [x] 저널 frontmatter `status: completed` 설정
- [x] 추측 데이터 배제 (공식 출처 기반)
- [x] 확인 실패 건은 보강 과제로 기록
