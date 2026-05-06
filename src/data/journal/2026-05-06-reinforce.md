---
status: completed
date: 2026-05-06
agent: reinforce
---

# reinforce Journal - 2026-05-06

Today's session focused on resolving pending issues related to missing model metadata and benchmark scores for several flagship models.

## 처리 결과

### 1. Grok 4.3 메타데이터 보강 (Resolved)
- **조치**: xAI 공식 개발자 문서를 통해 Grok 4.3의 가격($1.25/1M input, $2.50/1M output) 및 컨텍스트 윈도우(1M tokens)를 확인하여 업데이트함.
- **출처**: https://docs.x.ai/docs/models

### 2. EXAONE 3.0 메타데이터 및 벤치마크 (Resolved)
- **조치**: 기술 리포트(arXiv:2408.03541) 및 허깅페이스 모델 카드를 통해 컨텍스트 윈도우(32k), 라이선스 식별자 수정, 그리고 LogicKor(8.62), MT-Bench(9.01) 공식 점수를 등록함.
- **출처**: https://huggingface.co/LGAI-EXAONE/EXAONE-3.0-7.8B-Instruct

### 3. Qwen 2.5 및 DeepSeek-V3 벤치마크 (Resolved)
- **조치**: 이미지에서 텍스트 추출이 어렵던 문제를 공식 기술 블로그 및 GitHub README의 텍스트 데이터를 직접 탐색하여 해결.
- **등록 데이터**:
  - **Qwen 2.5-72B**: MMLU(86.1), MMLU-Pro(58.1), GPQA(45.9), GSM8K(91.5), HumanEval(59.1), MBPP(84.7)
  - **DeepSeek-V3**: MMLU(88.5), MMLU-Pro(75.9), GPQA(59.1), GSM8K(90.2), HumanEval(82.6), SWE-bench Verified(42.0)
- **출처**: https://qwenlm.github.io/blog/qwen2.5-llm/, https://github.com/deepseek-ai/DeepSeek-V3

### 4. Qwen-Plus / Turbo 보강 (Resolved)
- **조치**: 최신 Qwen 2.5 릴리스 블로그를 기반으로 API 모델인 Qwen-Plus와 Turbo의 벤치마크 점수를 대거 보강함.

### 5. Mistral 및 HyperCLOVA X (Partial)
- **진행**: Mistral Large 3와 Medium 3.5의 MMLU, HumanEval 등 구체적인 텍스트 기반 공식 점수는 여전히 공개되지 않았음을 확인함(차트 데이터만 존재). HyperCLOVA X의 NCP 가격 체계는 단순 토큰 과금 외에 복잡한 구조로 되어 있어 추가 검토 필요.

## 처리한 이슈 티켓
- **Resolved**: `2026-05-03-collect-benchmark-qwen-image.md` (삭제)
- **Resolved**: `2026-05-03-collect-benchmark-deepseek-image.md` (삭제)
- **Partial**: `2026-05-03-collect-llm-pricing-missing.md` (Grok, EXAONE 부분 해결)
- **Partial**: `2026-04-30-collect-benchmark-mistral-large-3.md` (텍스트 수치 미공개 확인)
