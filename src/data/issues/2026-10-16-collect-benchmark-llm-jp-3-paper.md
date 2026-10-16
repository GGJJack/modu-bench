---
priority: medium
severity: minor
---

## 상황
LLM-jp-3 베이스 모델의 paper URL로 등록된 `https://arxiv.org/abs/2411.08502`가 LLM-jp-3에 관한 논문이 아니라 양자 컴퓨팅(atom quantum computing)에 관한 논문임이 확인되었습니다. 잘못된 출처 URL이 등록되어 있습니다.

## 시도한 것
해당 arxiv 링크를 다운로드/파싱하여 내용 검토 (LLM-jp-3 언급 없음 확인).

## 요청
해당 모델(`llm-jp-3-1.8b`, `llm-jp-3-3.7b`, `llm-jp-3-13b`, `llm-jp-3-70b`)의 paper URL 수정 또는 제거가 필요합니다.
