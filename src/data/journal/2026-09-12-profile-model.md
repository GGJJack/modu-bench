---
date: 2026-09-12
agent: profile-model
status: completed
summary: "Qwen3-Coder-480B-A35B-Instruct 모델 프로파일 상세 페이지 작성 완료"
---

## Todo
- [x] 저널 파일 생성 및 작업 준비
- [x] `qwen3-coder-480b-a35b-instruct.md` 상세 프로파일 작성
- [x] `bun run build` 스키마 검증
- [x] 저널 작성 완료 및 status completed 갱신

## 조사 내역
- 02:00 Qwen3-Coder-480B-A35B-Instruct 공식 블로그 사양 확인 (MoE 480B/35B active, 256K native context, 7.5T 사전학습 토큰, Code RL, Long-horizon RL) ← https://qwenlm.github.io/blog/qwen3-coder/

## 수행한 작업
- [x] `src/content/models/qwen3-coder-480b-a35b-instruct.md` 상세 프로파일 작성 ← https://qwenlm.github.io/blog/qwen3-coder/
- [x] `bun run build` 검증 통과

## 판단 / 고민
- 공식 출처에서 충분한 정보(아키텍처, 사전학습, Post-training RL, Claude Code/Qwen Code 연동 사례 등) 및 출처 URL 3개 이상 확인 완료되어 `status: published`로 상세 프로파일 작성 완료.

## 이슈 제기
- (없음)
