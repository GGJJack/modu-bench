---
benchmarkId: nanobeir
domain: llm
status: published
updated: 2026-07-24
sources:
  - https://www.liquid.ai/blog/lfm2-5-retrievers
organization: liquid-ai
highlights:
  - "다국어 검색 (multilingual retrieval) 모델의 성능을 평가하기 위한 데이터셋"
  - "아랍어, 독일어, 영어, 스페인어, 프랑스어, 이탈리아어, 일본어, 한국어, 노르웨이어, 포르투갈어, 스웨덴어 등 11개 언어 지원"
---

# NanoBEIR Multilingual Extended (NDCG@10)

## 개요
NanoBEIR 다국어 확장은 정보 검색 성능을 다국어 환경에서 평가하기 위한 데이터셋입니다. Liquid AI의 LFM2.5 리트리버 모델 평가에 활용되었습니다.

## 지원 언어
영어(en) 외에도 아랍어(ar), 독일어(de), 스페인어(es), 프랑스어(fr), 이탈리아어(it), 일본어(ja), 한국어(ko), 노르웨이어(no), 포르투갈어(pt), 스웨덴어(sv) 등 총 11개 언어를 포함합니다.

## 평가 방법
다양한 언어 환경에서 모델이 관련 문서를 언어의 경계 내외로 잘 검색할 수 있는지를 확인하여 검색 성능을 평가하며, 성능 지표로 주로 NDCG@10을 사용합니다.