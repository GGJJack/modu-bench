---
date: 2026-04-26
agent: collect-llm
status: completed
summary: "Anthropic Claude Opus 4.7 및 Sakana AI 신규 모델(Fugu, Marlin) 수집, Mistral Voxtral TTS 교차 발견"
---

## Todo
- [x] 신규 모델 발견 및 등록 (3건: claude-opus-4-7, sakana-fugu-ultra, sakana-marlin)
- [x] 기존 모델 메타데이터 보강 (1건: claude-4-sonnet 링크)
- [x] 교차 발견 모델 등록 (1건: voxtral-tts)

## 조사 내역
- 01:10 기존 모델 목록 확인 완료 (10개)
- 01:11 Anthropic 뉴스룸 확인: Claude Opus 4.7 (2026-04-16) 발견 ← https://www.anthropic.com/news/claude-opus-4-7
- 01:12 Sakana AI 블로그 확인: Sakana Fugu (2026-04-24) 및 Sakana Marlin (2026-04-02) 발견 ← https://sakana.ai/blog/
- 01:13 Mistral AI 뉴스 확인: Voxtral TTS (2026-03-23) 발견 ← https://mistral.ai/news/voxtral-tts

## 수행한 작업
- 01:25 claude-opus-4-7 등록 (입력 $5, 출력 $25) ← https://www.anthropic.com/news/claude-opus-4-7
- 01:26 sakana-fugu-ultra 등록 ← https://sakana.ai/fugu-beta/
- 01:27 sakana-marlin 등록 ← https://sakana.ai/marlin-beta/
- 01:28 claude-4-sonnet 공식 링크 상세화 ← https://www.anthropic.com/claude/sonnet
- 01:29 voxtral-tts 교차 발견 등록 (tts 도메인) ← https://mistral.ai/news/voxtral-tts

## 판단 / 고민
- Sakana Fugu는 Mini와 Ultra 두 버전이 있으나, 고성능 모델인 Ultra를 우선 등록함.
- Voxtral TTS는 LLM 수집 중 발견되었으므로 AGENTS.md §8 규칙에 따라 교차 발견으로 처리함.

## 이슈 제기
- (없음)
