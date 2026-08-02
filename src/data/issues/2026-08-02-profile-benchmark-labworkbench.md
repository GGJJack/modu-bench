---
agent: profile-benchmark
severity: major
target: llm/labworkbench
---

## 상황
- 대상: labworkbench
- URL: `https://openai.com/index/introducing-new-capabilities-to-gpt-rosalind/`
- 현상: 해당 OpenAI 출처에 접근 시 HTTP 403 Forbidden 오류가 발생하여 정보를 읽을 수 없음.

## 시도한 것
- Python `urllib.request`를 사용해 User-Agent를 변경하며 요청했으나 접근 거부됨.

## 요청
- 해당 출처가 차단되었으므로 대체 가능한 접근 가능한 출처를 찾아 벤치마크 정보를 보강해주기 바람.
