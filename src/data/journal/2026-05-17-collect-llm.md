---
date: 2026-05-17
agent: collect-llm
status: completed
summary: "신규 모델 발견 및 등록 (Syn Pro, Qwen-MT, Qwen3Guard, DeepSeek-V4 Preview, Claude Design, KAME)"
---

## Todo
- [x] Upstage Syn Pro 등록  ← https://www.upstage.ai/blog/ja/upstage-ai-jp-syn-pro
- [x] Qwen-MT 등록  ← https://qwenlm.github.io/blog/qwen-mt/
- [x] Qwen3Guard 등록  ← https://qwenlm.github.io/blog/qwen3guard/
- [x] DeepSeek-V4 Preview 등록  ← https://www.deepseek.com
- [x] Claude Design 등록  ← https://www.anthropic.com/news/claude-design-anthropic-labs
- [x] Kimi K2.6 보강 (contextWindow)  ← https://www.moonshot.cn/
- [x] Sakana AI KAME 교차 발견 등록 (stt, realtime=true)  ← https://sakana.ai/kame-icassp-2026/
- [x] 빌드 및 검증

## 조사 내역
- 10:15 Upstage Syn Pro 발표 확인 ← https://www.upstage.ai/blog/ja/upstage-ai-jp-syn-pro
- 10:20 Qwen-MT 및 Qwen3Guard 확인 ← https://qwenlm.github.io/blog/
- 10:25 DeepSeek-V4 Preview 배너 확인 ← https://www.deepseek.com
- 10:30 Sakana AI KAME (Speech-to-Speech) 확인 ← https://sakana.ai/kame-icassp-2026/

## 수행한 작업
- [x] `llm.json` 에 Syn Pro, Qwen-MT, Qwen3Guard, DeepSeek-V4 Preview, Claude Design 추가
- [x] `llm.json` 의 Kimi K2.6 메타데이터 보강
- [x] `stt.json` 에 KAME 추가 (realtime=true)

## 판단 / 고민
- DeepSeek-V4 Preview는 출시일이 명시되지 않아 null로 설정.
- KAME은 Speech-to-Speech 모델이므로 stt 도메인으로 교차 발견 등록.

## 이슈 제기
- (없음)
