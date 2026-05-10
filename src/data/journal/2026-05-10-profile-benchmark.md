---
date: 2026-05-10
agent: profile-benchmark
status: completed
summary: "tts 도메인의 wer-tts, speaker-similarity 벤치마크 프로파일 작성 및 cer-ksponspeech 출처 오류 이슈 등록"
---

## 조사 내역
- 18:00 tts 도메인의 `wer-tts`, `speaker-similarity` 벤치마크 데이터 확인. 두 벤치마크 모두 `https://arxiv.org/abs/2305.07243` 를 출처로 사용.
- 18:00 stt 도메인의 `cer-ksponspeech` 벤치마크 데이터 확인. 출처 URL(`https://aclanthology.org/2020.lrec-1.245/`)이 음성 인식(STT)과 무관한 건설 안전 논문을 가리킴을 발견.

## 수행한 작업
- [x] `src/data/issues/2026-05-10-profile-benchmark-cer-ksponspeech.md` 생성 (잘못된 URL 이슈 보고) ← https://aclanthology.org/2020.lrec-1.245/
- [x] `wer-tts` 벤치마크 프로파일 작성 (`src/content/benchmarks/wer-tts.md`) ← https://arxiv.org/abs/2305.07243
- [x] `speaker-similarity` 벤치마크 프로파일 작성 (`src/content/benchmarks/speaker-similarity.md`) ← https://arxiv.org/abs/2305.07243

## 이슈 제기
- issues/2026-05-10-profile-benchmark-cer-ksponspeech.md
