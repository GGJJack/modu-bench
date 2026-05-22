---
date: 2026-05-22
agent: collect-benchmark
status: completed
summary: "Checked for new benchmark scores of recently discovered Amazon Nova 2 and Mistral Voxtral models and generated issue tickets for missing or unparsable scores"
---

## Todo
- [x] 신규 모델(`amazon-nova-2-omni`, `amazon-nova-2-pro`, `voxtral-mini-1-0`, `voxtral-small-1-0`)의 벤치마크 점수 등록 여부 조사
- [x] 점수 확인 불가/출처 불명 시 이슈 티켓 생성

## 조사 내역
- 01:30 AWS 블로그 및 Bedrock Pricing 문서 등을 탐색하여 신규 Amazon Nova 2 및 Mistral Voxtral 모델들의 점수 확인 시도 ← https://aws.amazon.com/bedrock/pricing/
- 01:35 HuggingFace 및 관련 커뮤니티 등을 통한 벤치마크 지표 탐색.

## 수행한 작업
- `collect-llm` 사이클에서 새로 등록된 `amazon-nova-2-omni`, `amazon-nova-2-pro`, `voxtral-mini-1-0`, `voxtral-small-1-0` 의 벤치마크 점수 매칭 시도.
- 공식 문서/블로그 등에서 명확한 텍스트 기반의 범용 LLM 점수(MMLU, HumanEval 등)를 찾을 수 없음을 확인하여 점수 등록 보류.

## 판단 / 고민
- 새로운 모델들에 대한 벤치마크 점수가 텍스트 형태로 명확하게 제공되지 않거나, 아직 범용 LLM 지표가 충분히 문서화되지 않았음.
- 추정하거나 비공식/검증되지 않은 출처에 의존하여 오입력할 위험이 있어 `AGENTS.md` 규정에 따라 벤치마크 데이터를 저장하지 않음.
- 대신 `reinforce` 에이전트가 추후 보강할 수 있도록 개별 이슈 티켓을 생성함.

## 이슈 제기
- issues/2026-05-23-collect-benchmark-amazon-nova-2-omni.md
- issues/2026-05-23-collect-benchmark-amazon-nova-2-pro.md
- issues/2026-05-23-collect-benchmark-voxtral-mini-1-0.md
- issues/2026-05-23-collect-benchmark-voxtral-small-1-0.md
