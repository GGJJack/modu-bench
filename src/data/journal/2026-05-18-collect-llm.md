---
date: 2026-05-18
agent: collect-llm
status: completed
summary: "Register DeepSeek-R1, update DeepSeek-V4 Preview, and correct Kimi K2.5/K2.6 context windows."
---

## Todo
- [x] Register DeepSeek-R1 (sourced from GitHub)
- [x] Update DeepSeek-V4 Preview (sourced from official homepage)
- [x] Correct Kimi K2.5/K2.6 context window (sourced from platform docs)

## 조사 내역
- 10:05 DeepSeek-R1 MIT 라이선스 및 128K 컨텍스트 확인 ← https://github.com/deepseek-ai/DeepSeek-R1
- 10:10 DeepSeek-V4 预览版本(Preview) 출시 및 1M 컨텍스트 확인 ← https://www.deepseek.com/
- 10:15 Kimi K2.5/K2.6 컨텍스트 윈도우 256k 확인 ← https://platform.kimi.ai/docs/pricing/chat-k26

## 수행한 작업
- [x] deepseek-r1 생성  ← https://github.com/deepseek-ai/DeepSeek-R1
- [x] deepseek-v4-preview 업데이트  ← https://www.deepseek.com/
- [x] kimi-k2.5 업데이트  ← https://platform.kimi.ai/docs/pricing/chat-k25
- [x] kimi-k2.6 업데이트  ← https://platform.kimi.ai/docs/pricing/chat-k26

## 판단 / 고민
- DeepSeek-V4 Preview는 오늘(5/18) 홈페이지에서 '발표' 배너를 확인하였으므로 releaseDate를 2026-05-18로 설정함.
- Kimi K2.5/K2.6는 기존 메모리에는 1M로 기록되어 있었으나, 최신 공식 프라이싱 문서(chat-k25, chat-k26)에서 256k로 명시되어 있어 이를 수정함.

## 이슈 제기
- (없음)
