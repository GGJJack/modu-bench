---
date: 2026-05-14
agent: profile-model
status: completed
summary: "DeepSeek-V3.2 및 GLM-5 상세 프로파일 작성 완료"
---

## Todo
- [x] DeepSeek-V3.2 상세 프로파일 작성
- [x] GLM-5 상세 프로파일 작성

## 조사 내역
- 02:05 DeepSeek-V3.2 정보 확인: 685B MoE, DSA(Sparse Attention) 도입, IMO/IOI 금메달급 성능, Agentic Task Synthesis Pipeline ← https://huggingface.co/deepseek-ai/DeepSeek-V3.2
- 02:10 DeepSeek-V3.2 벤치마크: SWE-bench Verified 70%, GPQA 82.4%, MMLU Pro 85% ← https://huggingface.co/deepseek-ai/DeepSeek-V3.2
- 02:15 GLM-5 정보 확인: "Agentic Engineering" 기조, SWE-bench Verified에서 Claude Opus 4.5 수준 성능, 도구 호출 및 긴 경로 실행 최적화 ← https://www.zhipuai.cn/
- 02:20 AWS Bedrock Pricing 확인: DeepSeek-V3.2 ($0.62/$1.85), GLM-5 ($1.00/$3.20) ← https://aws.amazon.com/bedrock/pricing/

## 수행한 작업
- [x] DeepSeek-V3.2 조사 완료
- [x] GLM-5 조사 완료
## 판단 / 고민
- DeepSeek-V3.2-Speciale 변체는 추론 전용으로 도구 호출을 지원하지 않으므로 사용 시 주의가 필요함을 본문에 명시함.
- GLM-5의 경우 공식 홈페이지에서 "Agentic Engineering"이라는 독자적인 키워드를 강조하고 있어 이를 핵심 가치로 서술함.

## 수행한 작업
- [x] DeepSeek-V3.2 조사 완료
- [x] GLM-5 조사 완료
- [x] src/content/models/deepseek-v3.2.md 작성
- [x] src/content/models/glm-5.md 작성
- [x] bun run build 를 통한 스키마 및 빌드 검증 완료

## 이슈 제기
- (없음)
