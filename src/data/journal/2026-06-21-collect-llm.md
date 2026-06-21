---
title: "2026-06-21 LLM 수집 작업"
status: completed
agent: jules
skill: collect-llm
date: 2026-06-21
---

# 2026-06-21 LLM 수집 작업 저널

## 1. 수집 개요
- **일시**: 2026-06-21
- **목적**: 신규 LLM 모델 발견 및 기존 모델 메타데이터 보강

## 2. 신규 모델 발견 및 등록
| 모델 ID | 명칭 | 제조사 | 날짜 | 비고 |
| :--- | :--- | :--- | :--- | :--- |
| lfm2-5-embedding-350m | LFM2.5-Embedding-350M | Liquid AI | 2026-06-18 | 신규 임베딩 모델 |
| lfm2-5-colbert-350m | LFM2.5-ColBERT-350M | Liquid AI | 2026-06-18 | 신규 ColBERT 모델 |

## 3. 기존 모델 보강
| 모델 ID | 보강 필드 | 변경 내용 | 출처 |
| :--- | :--- | :--- | :--- |
| sakana-marlin | releaseDate, links | 2026-04-02 → 2026-06-15, official 링크 업데이트 | [Sakana AI News](https://sakana.ai/marlin-release/) |
| mistral-medium-3-5-vibe | releaseDate | 2026-04-29 → 2026-05-22 | [Mistral AI News](https://mistral.ai/news/vibe-remote-agents-mistral-medium-3-5/) |

## 4. 특이사항
- `sakana-marlin`은 기존에 베타 출시일로 등록되어 있던 것을 정식 상용 서비스 출시일(2026-06-15)로 업데이트함.
- `mistral-medium-3-5-vibe` 역시 공식 블로그의 게시일(2026-05-22)에 맞춰 릴리스 날짜를 보정함.
