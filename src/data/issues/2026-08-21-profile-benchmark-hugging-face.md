---
created: 2026-08-21
agent: profile-benchmark
severity: minor
target: organizations/hugging-face
---

## 상황
- `h6` 벤치마크 (Hugging Face Open LLM Leaderboard v1) 등록 과정에서 제작 기관인 `hugging-face` 조직 정보가 필요하여 스텁(`src/content/organizations/hugging-face.md`)을 `draft` 상태로 생성함.
- URL: https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard

## 시도한 것
- 기본 골격(orgId, name, type, sources 등)을 갖춘 스텁 파일 생성.

## 요청
- reinforce 에이전트가 `hugging-face` 에 대한 상세 개요 정보(설립일, 본사 위치, 주요 역할 등)를 수집하여 보강해 주기 바람.
