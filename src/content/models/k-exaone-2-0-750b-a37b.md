---
modelId: k-exaone-2-0-750b-a37b
domain: llm
status: published
updated: 2026-08-24
sources:
  - https://www.lgresearch.ai/news/view?seq=678
  - https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B
  - https://github.com/LG-AI-EXAONE/K-EXAONE-2.0
  - https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B/blob/main/assets/K-EXAONE-2.0-Technical-Report.pdf
features:
  toolUse: true
  vision: false
highlights:
  - "총 750B 파라미터, 라우팅 레이어당 활성 파라미터 37B의 대규모 MoE 아키텍처"
  - "최대 262,144(256K) 토큰의 매시브 컨텍스트 윈도우 지원"
  - "한국어 및 고난도 학술·전문 영역에 최적화된 국가 대표급 초거대 언어 모델"
relatedOrganization: lg-ai-research
---

# K-EXAONE 2.0 750B A37B 소개

## 개요
K-EXAONE 2.0 750B A37B는 LG AI Research에서 개발한 국가 대표급 초거대 전문 언어 모델이다. 총 7500억(750B) 개에 달하는 파라미터 규모를 바탕으로 고성능 Mixture-of-Experts(MoE) 아키텍처를 도입하여 복잡한 이유 추론, 고난도 학술 논문 분석, 다국어 지식 처리를 혁신적으로 수행한다. 오픈소스 라이선스인 Apache-2.0 조건으로 공개되어 학계 및 산업계에서 자유롭게 연구 및 응용할 수 있도록 지원하고 있다.

## 기술 특징
이 모델은 전체 750B 파라미터 중 추론 시 입력 토큰당 37B의 파라미터만 활성화하는 라우팅 전문가 네트워크(MoE) 구조를 적용하여 높은 컴퓨팅 효율과 초거대 모델 특유의 뛰어난 지식 표현력을 동시에 달성하였다. 컨텍스트 윈도우는 최대 262,144(256K) 토큰까지 확장되어 장문 보고서, 복잡한 법률·금융 문서, 대규모 소스 코드의 전역 맥락 파악에 탁월하다. 또한 한국어 문화·사회적 맥락에 대한 정교한 정렬(Alignment) 조정을 완료하여 한국어 관련 주요 평가 지표에서 세계 최고 수준의 성적을 기록한다.

## 사용 사례
K-EXAONE 2.0 750B A37B는 복잡한 복합 도구 연동(Tool Use), 대규모 엔터프라이즈 RAG(검색 증강 생성) 시스템 구축, 전문 영역 심층 연구 보조 등에 최적화되어 있다. 높은 컨텍스트 파악 능력과 안정적인 추론 성능을 통해 멀티턴 복잡 대화 및 정밀 코드 작성을 효율적으로 수행한다.

## 한계
총 파라미터 양이 750B에 달하므로 오프로딩 및 분산 추론 환경(예: Multi-Node GPU Cluster)이나 정교한 MoE 전용 수평 분산 파이프라인 구성이 요구된다. 또한 초거대 모델 본연의 확률적 언어 생성 특성상 검증되지 않은 외부 정보 입력 시 환각 현상이 나타날 수 있으므로 중요 의사결정 시 검증 프로세스를 병행해야 한다.
