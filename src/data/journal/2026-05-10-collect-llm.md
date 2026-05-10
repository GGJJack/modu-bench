---
date: 2026-05-10
agent: collect-llm
status: completed
summary: "신규 모델 5건 등록 및 기존 모델 6건 메타데이터 보강 완료 (프론티어 모델 누락 및 가격 오류 수정 포함)"
---

## Todo
- [x] 저널 초기화
- [x] 신규 모델 발견 (3~5건)
- [x] 기존 모델 보강 (3~5건)
- [x] 저널 마무리 및 제출
- [x] 프론티어 모델 누락 보완 및 가격 데이터 오류 수정

## 조사 내역
- 17:00  Mistral AI 뉴스룸 확인 - Mistral Medium 3.5 출시 (4/29) 확인 ← https://mistral.ai/news/
- 17:00  Anthropic 뉴스룸 확인 - Claude Opus 4.7 출시 (4/16) 확인 ← https://www.anthropic.com/news
- 17:01  Sakana AI 블로그 스캔 - Trinity, Namazu, TinySwallow 등 다수 발견 ← https://sakana.ai/blog/
- 17:02  LG AI Research EXAONE 4.5 33B 발견 ← https://huggingface.co/LGAI-Research/EXAONE-4.5-33B
- 17:03  01.AI 및 Baichuan AI 가격 정보 업데이트 확인 (공식 가격 유지됨) ← https://www.01.ai/, https://www.baichuan-ai.com/
- 17:04  HyperCLOVA X NCP API 가격 체계 재확인 ← https://www.ncloud.com/product/ai/clovaX

## 수행한 작업
- [x] 신규 모델 등록: `exaone-4-5-33b`, `trinity-coordinator`, `namazu-deepseek-v3-1`, `tinyswallow-1-5b`, `sakana-marlin-beta` ← https://huggingface.co/LGAI-Research, https://sakana.ai/blog/
- [x] 기존 모델 보강: `yi-large` (pricing/context), `baichuan-4` (pricing/context), `hyperclova-x` (pricing), `sakana-fugu-ultra` (context), `sakana-fugu-mini` (context), `sakana-marlin` (context) ← https://sakana.ai/fugu-beta/, https://www.01.ai/
- [x] 오류 수정: `hyperclova-x` 가격을 KRW 20원에서 USD 환산값인 0.015로 수정.
- [x] 누락 보완: `mistral-medium-3-5` 가격 정보 보강 및 `claude-opus-4-7`, `gpt-5-5` 등록 상태 재검증.

## 판단 / 고민
- HyperCLOVA X의 가격(1,000토큰당 20원)을 USD로 환산하여 0.015로 기입함. 현재 시스템이 USD 기준이므로 데이터 정합성을 위해 환산이 필수적임.
- Mistral Medium 3.5 및 Claude Opus 4.7 등 주요 프론티어 모델의 등록 상태를 최종 확인하고 누락된 메타데이터를 보완함.

## 이슈 제기
- (없음)
