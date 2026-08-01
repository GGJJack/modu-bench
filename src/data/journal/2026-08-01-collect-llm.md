---
date: 2026-08-01
agent: collect-llm
status: completed
summary: "DeepSeek-R1 Distilled 4종 및 Baichuan2 7B Chat 등 5개 신규 모델 등록, Rakuten AI 2.0 4개 모델 공식 링크 보강 완료"
---

## Todo
- [x] DeepSeek-R1-Distill 계열 모델 4종 수집 및 등록 ➔ https://github.com/deepseek-ai/DeepSeek-R1
- [x] Baichuan2-7B-Chat 모델 수집 및 등록 ➔ https://www.baichuan-ai.com/
- [x] Rakuten AI 2.0 계열 모델 4종 공식 링크 및 HuggingFace 링크 보강 ➔ https://corp.rakuten.co.jp/innovation/ai/

## 조사 내역
- 13:30 DeepSeek-R1 Distilled 모델 공식 명세 및 라이선스 체계 확인 ➔ https://github.com/deepseek-ai/DeepSeek-R1
- 13:45 Baichuan2 제품 라인업 및 공식 가이드 교차 검증 ➔ https://www.baichuan-ai.com/
- 13:55 Rakuten 그룹 인공지능 연구소 공식 페이지 기반 Rakuten AI 2.0 링크 매칭 ➔ https://corp.rakuten.co.jp/innovation/ai/

## 수행한 작업
- [x] `deepseek-r1-distill-llama-70b` 신규 등록 (70B, Context 128K, Llama-3.1) ➔ https://github.com/deepseek-ai/DeepSeek-R1
- [x] `deepseek-r1-distill-llama-8b` 신규 등록 (8B, Context 128K, Llama-3.1) ➔ https://github.com/deepseek-ai/DeepSeek-R1
- [x] `deepseek-r1-distill-qwen-7b` 신규 등록 (7B, Context 128K, MIT) ➔ https://github.com/deepseek-ai/DeepSeek-R1
- [x] `deepseek-r1-distill-qwen-1-5b` 신규 등록 (1.5B, Context 128K, MIT) ➔ https://github.com/deepseek-ai/DeepSeek-R1
- [x] `baichuan2-7b-chat` 신규 등록 (7B, Context 4K, Baichuan 2 Community License) ➔ https://www.baichuan-ai.com/
- [x] `rakuten-ai-2-0-mini` 기존 모델 정보 보강 (links.official, links.huggingface 보강) ➔ https://corp.rakuten.co.jp/innovation/ai/
- [x] `rakuten-ai-2-0-mini-instruct` 기존 모델 정보 보강 (links.official, links.huggingface 보강) ➔ https://corp.rakuten.co.jp/innovation/ai/
- [x] `rakuten-ai-2-0-8x7b` 기존 모델 정보 보강 (links.official, links.huggingface 보강) ➔ https://corp.rakuten.co.jp/innovation/ai/
- [x] `rakuten-ai-2-0-8x7b-instruct` 기존 모델 정보 보강 (links.official, links.huggingface 보강) ➔ https://corp.rakuten.co.jp/innovation/ai/

## 판단 / 고민
- `missions/llm.md`에 설정된 한·중·일 소버린 모델 수집 지침에 부합하도록 중국의 DeepSeek Distilled 모델군과 Baichuan2 모델을 추가하고, 일본 Rakuten AI 2.0 모델의 공식 URL 품질을 강화했습니다.
- 모든 정보는 100% 검증 가능한 제조사 공식 채널 및 공고를 참고하였으며, CLI 수집 도구를 사용하여 데이터 무결성을 보장했습니다.

## 이슈 제기
- (없음)
