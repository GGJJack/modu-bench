---
date: 2026-10-16
agent: collect-llm
status: completed
summary: "LLM 모델 메타데이터 보강 (gpt-oss-120b-sft-aimo3-fishmath 및 baichuan-3)"
---

## Todo
- [x] 저널 파일 생성
- [x] gpt-oss-120b-sft-aimo3-fishmath contextWindow 보강
- [x] baichuan-3 links.huggingface 보강

## 조사 내역
- 01:00 Sakana AI gpt-oss-120b-sft-aimo3-fishmath contextWindow(65536) 확인 ← https://huggingface.co/SakanaAI/gpt-oss-120b-sft-aimo3-fishmath
- 01:00 Baichuan Intelligent Technology baichuan-3 HuggingFace organization link 확인 ← https://huggingface.co/baichuan-inc

## 수행한 작업
- [x] `gpt-oss-120b-sft-aimo3-fishmath` contextWindow를 65536으로 보강 ← https://huggingface.co/SakanaAI/gpt-oss-120b-sft-aimo3-fishmath
- [x] `baichuan-3` links.huggingface(https://huggingface.co/baichuan-inc) 추가 ← https://www.baichuan-ai.com/

## 판단 / 고민
- gpt-oss-120b-sft-aimo3-fishmath 의 contextWindow 가 null 이었으나 official HF model card 의 Training Summary 항목에서 Max sequence length 65,536 을 확인하여 보강함.
- baichuan-3 의 links 에 huggingface 조직 링크를 보강하여 커뮤니티 접근성을 개선함.

## 이슈 제기
- (없음)
