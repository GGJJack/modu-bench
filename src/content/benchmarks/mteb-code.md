---
benchmarkId: mteb-code
domain: llm
status: published
updated: 2026-09-25
sources:
  - https://arxiv.org/abs/2210.07316
  - https://github.com/embeddings-benchmark/mteb
  - https://huggingface.co/spaces/mteb/leaderboard
organization: hugging-face
highlights:
  - "코드 관련 임베딩 모델의 성능을 평가하는 MTEB의 하위 벤치마크"
---

# MTEB (Code)

## 개요
MTEB (Code)는 대규모 텍스트 임베딩 벤치마크인 MTEB (Massive Text Embedding Benchmark) 프레임워크 내에서 특히 프로그래밍 언어와 코드 스니펫 처리 능력을 평가하기 위해 특화된 하위 벤치마크입니다. 일반적인 자연어 텍스트뿐만 아니라 코드의 구조적, 논리적 특성을 임베딩 공간에서 얼마나 잘 포착하는지를 측정합니다.

## 평가 방법
코드 관련 정보 검색(Code Retrieval), 코드 유사성 측정, 주석 기반 코드 검색 등 다양한 코드 도메인의 데이터셋을 활용하여 평가합니다. 다양한 프로그래밍 언어 환경에서 임베딩 모델이 코드의 의미론적 유사성을 얼마나 정확하게 파악하고 구별할 수 있는지를 확인합니다.

## 점수 해석
점수가 높을수록 모델이 코드의 문법 구조와 논리적 흐름을 벡터 공간 내에 효과적으로 매핑하여, 개발 환경이나 코드 기반 검색 시스템에서 우수한 성능을 발휘할 수 있음을 의미합니다. 범용 임베딩 모델과 코드 특화 모델 간의 성능 차이를 직접적으로 비교할 수 있는 지표가 됩니다.
