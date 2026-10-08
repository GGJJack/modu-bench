---
created: 2026-10-08
agent: collect-benchmark
severity: minor
target: llm/yi-1-5-34b-chat
---

## 상황
`https://huggingface.co/01-ai/Yi-1.5-34B-Chat` 모델 페이지에 벤치마크 점수를 명시한 테이블이 존재하지 않음.

## 시도한 것
공식 페이지의 HTML 테이블 구조를 파싱했으나, 모델명과 컨텍스트 길이 다운로드 링크만 포함된 테이블만 발견됨.

## 요청
공식 논문이나 다른 공신력 있는 출처(Open LLM Leaderboard 등)를 통해 벤치마크 점수를 확인하고 등록할 것.
