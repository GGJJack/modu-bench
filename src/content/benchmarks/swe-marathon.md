---
benchmarkId: swe-marathon
domain: llm
status: published
updated: 2026-08-28
sources:
  - https://www.swe-marathon.org/
  - https://www.mercor.com/blog/swe-marathon-ext-can-ai-build-a-whole-saas-product/
  - https://benchlm.ai/benchmarks/swemarathon
organization: abundant-ai
highlights:
  - "라이브러리 재현, 풀스택 애플리케이션 클론 등 수 시간 분량의 과제"
  - "단편적인 코드 수정이 아닌 전체 시스템 구현 능력 평가"
  - "초 장기(ultra-long-horizon) 소프트웨어 엔지니어링 벤치마크"
---

# SWE Marathon

## 개요
SWE Marathon은 AI 모델이 전체 시스템 동작을 추론하고 처음부터 구현해야 하는 초 장기(ultra-long-horizon) 소프트웨어 엔지니어링 벤치마크입니다. Abundant AI에서 개발한 이 벤치마크는 라이브러리 재현, 풀스택 제품 복제(clone), 머신러닝 엔지니어링 등 여러 시간에 걸쳐 수행해야 하는 20개의 복잡한 과제로 구성되어 있습니다.

## 평가 방법
기존의 많은 코딩 벤치마크들이 모델에게 기존 코드베이스를 주고 국소적인 변경을 요구하는 것과 달리, SWE Marathon은 모델이 빈 작업 공간(empty workspace)에서 시작하여 주어진 제품 명세에 따라 완전한 애플리케이션을 구축하도록 요구합니다. 이를 통해 단순히 코드를 수정하는 능력을 넘어 실제 소프트웨어 제품을 출하하는 데 필요한 전체 작업 범위를 다룰 수 있는지를 평가합니다.

## 의의 및 확장
이 벤치마크는 인증, CRUD, 작업 공간 같은 기본적인 기능은 구현하지만, 동시성, 시간 논리, 유효성 검사, API 동작, 인터페이스 연결 등 제품 특유의 복잡한 로직을 구현하는 데에는 모델들이 어려움을 겪는다는 것을 보여줍니다. 또한 커뮤니티에서는 이 벤치마크를 기반으로 12개의 SaaS 제품 클론 과제를 추가한 SWE-Marathon-Ext와 같은 후속 연구를 통해 벤치마크의 평가 범위를 지속적으로 확장하고 있습니다.
