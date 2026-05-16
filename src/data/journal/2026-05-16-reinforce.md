---
status: completed
---

# 2026-05-16 reinforce

## 활동 요약

- 대기 중인 이슈 티켓 29건 중 1건 해결(삭제) 및 2건 부분 업데이트 수행.
- **Resolved: llm-pricing-missing** — Grok 4.3 ($1.25/$2.50), Qwen-Turbo ($0.1/$0.3), HyperCLOVA X ($0.015) 가격 정보 및 EXAONE 3.0 라이선스 정보 반영 완료.
- **Progress: mistral-large-3** — MMLU/GPQA 점수의 오기입된 출처 URL 수정 (Hugging Face 공식 경로). HumanEval/GSM8K는 여전히 공식 미기재.
- **Progress: mistral-medium-3-5** — HumanEval 공식 수치 미공개 확인.

## 상세 내역

### 1. 미비한 LLM 메타데이터(가격/라이선스) 보강
- **이슈**: `src/data/issues/2026-05-03-collect-llm-pricing-missing.md`
- **조치**: Alibaba Cloud, NAVER Cloud, xAI, LG AI Research 등의 공식 문서를 최신화하여 반영함.
- **데이터 갱신**:
  - **Grok 4.3**: Input $1.25 / Output $2.50 (per 1M tokens), 1M context window 반영.
  - **Qwen-Turbo**: Input $0.1 / Output $0.3 (per 1M tokens) 반영.
  - **HyperCLOVA X**: Input/Output 20 KRW ($0.015) 반영.
  - **EXAONE 3.0**: 라이선스 세부 정보 보강.
- **결과**: 이슈 파일 삭제.

### 2. Mistral 모델군 벤치마크 추적
- **조치**: 공식 블로그 및 기술 리포트(arXiv:2601.08584) 정밀 탐색.
- **Mistral Large 3**: MMLU(85.5), GPQA(43.9) 점수의 URL을 공식 출처(Mistral-Large-Instruct-2407)로 정정. HumanEval/GSM8K는 차트에만 존재하고 텍스트 부재하여 유지.
- **Mistral Medium 3.5**: HumanEval 점수 공식 미발표 확인.
- **결과**: 이슈 파일에 진행 내역 업데이트 및 유지.
