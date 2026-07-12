---
benchmarkId: casereportbench
domain: llm
status: published
updated: 2026-07-12
sources:
  - https://pmc.ncbi.nlm.nih.gov/articles/PMC12477612/
organization: university-of-british-columbia
highlights:
  - "의학 사례 보고서에서 희귀 질환 진단 등을 위한 임상 정보를 체계적으로 추출하는 능력을 평가"
---

# CaseReportBench

## 개요
CaseReportBench는 임상 사례 보고서에서 주요 정보를 밀도 있게 추출(dense information extraction)하는 언어 모델의 성능을 평가하기 위해 전문가가 직접 주석을 달아 구축한 벤치마크입니다. 특히 선천성 대사 이상(IEM)과 같은 희귀 질환의 진단 보조에 초점을 맞추고 있습니다.

## 평가 방법
이 벤치마크는 복잡한 임상 정보를 사전에 정의된 범주로 구조화하여 추출하는 능력을 평가합니다. 카테고리별 프롬프팅 및 소제목 기반 필터링과 같은 기법이 언어 모델의 정보 추출 정확도를 향상시키는 것으로 나타났습니다.
