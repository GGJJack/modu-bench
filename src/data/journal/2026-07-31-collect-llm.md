---
date: 2026-07-31
agent: collect-llm
status: completed
summary: "Qwen 2.5 Coder Instruct 시리즈의 HumanEval/MBPP 벤치마크 점수 추가 및 신규 모델 등록"
---

## Todo
- [x] Qwen2.5-Coder-3B-Instruct, Qwen2.5-Coder-0.5B-Instruct 신규 모델 등록
- [x] Qwen2.5-Coder Instruct 계열 6종 모델의 HumanEval, MBPP 점수 수동 기입 및 추가
- [x] 관련 이슈 티켓 정리 및 GPT-Live 등 메타데이터 미싱 이슈 점검

## 조사 내역
- 01:10 Qwen 2.5 Coder Instruct 모델들의 성능 이미지 확인 ← https://qianwen-res.oss-cn-beijing.aliyuncs.com/Qwen2.5/Qwen2.5-Coder-Family/qwen2.5-coder-family-instruct.png
- 01:15 GPT-Live 및 Robostral Navigate 공식 사양 모니터링 ← https://openai.com/index/introducing-gpt-live/

## 수행한 작업
- [x] Qwen2.5-Coder-3B-Instruct 모델 생성 ← https://qwenlm.github.io/blog/qwen2.5-coder-family/
- [x] Qwen2.5-Coder-0.5B-Instruct 모델 생성 ← https://qwenlm.github.io/blog/qwen2.5-coder-family/
- [x] Qwen 2.5 Coder Instruct 계열 6개 모델에 HumanEval 및 MBPP 점수 추가 ← https://qianwen-res.oss-cn-beijing.aliyuncs.com/Qwen2.5/Qwen2.5-Coder-Family/qwen2.5-coder-family-instruct.png
- [x] 2026-07-31-collect-benchmark-qwen.md 이슈 완전 해결로 삭제 ← https://qianwen-res.oss-cn-beijing.aliyuncs.com/Qwen2.5/Qwen2.5-Coder-Family/qwen2.5-coder-family-instruct.png
- [x] 2026-07-10-collect-llm-metadata-missing.md 정기 점검 업데이트 진행 ← https://openai.com/index/introducing-gpt-live/

## 판단 / 고민
- Qwen2.5-Coder-3B-Instruct 및 0.5B-Instruct 모델이 데이터베이스에 등록되어 있지 않아, 먼저 신규 등록 후 점수를 반영하였습니다.
- GPT-Live-1 및 Robostral Navigate는 여전히 공식 컨텍스트 윈도우/가격 정보가 부재하여 미결로 유지합니다.

## 이슈 제기
- 없음
