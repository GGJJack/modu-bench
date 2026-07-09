---
modelId: robostral-navigate
domain: llm
status: published
updated: 2026-07-09
sources:
  - https://mistral.ai/news/robostral-navigate/
features:
  toolUse: true
  vision: true
highlights:
  - "8B 파라미터 기반의 로봇 내비게이션 전용 모델"
  - "별도의 센서 없이 단일 RGB 카메라만으로 자율 주행 가능"
  - "R2R-CE 벤치마크에서 76.6%의 성공률로 SOTA 달성"
relatedOrganization: mistral
---

# Robostral Navigate 소개

## 개요
Robostral Navigate는 Mistral AI가 발표한 최초의 임바디드 AI(Embodied AI) 내비게이션 모델입니다. 8B 파라미터 규모의 이 모델은 자연어 지시와 RGB 이미지를 입력받아 로봇이 복잡한 물리적 환경을 자율적으로 이동할 수 있도록 설계되었습니다. 특히 고가의 LiDAR나 깊이(Depth) 센서 없이 일반적인 RGB 카메라 하나만으로도 뛰어난 성능을 발휘하는 것이 특징입니다.

## 기술 특징
Robostral Navigate는 기존의 오픈 소스 VLM에 의존하지 않고 Mistral AI가 자체적으로 구축한 모델입니다.

*   **포인팅 기반 내비게이션 (Navigation via pointing):** 모델은 로봇의 현재 카메라 뷰에서 목표 지점의 이미지 좌표와 도착 시의 방향을 추론합니다. 이는 미터법 기반의 변위 명령보다 카메라 특성이나 세계 규모의 변화에 더 유연하게 대응할 수 있게 합니다.
*   **시뮬레이션 기반 학습:** 약 400,000개의 궤적과 6,000개의 장면으로 구성된 시뮬레이션 데이터를 통해 학습되었습니다.
*   **접두사 캐싱(Prefix-caching) 알고리즘:** 트리 기반 어텐션 마스킹 전략을 사용하여 전체 에피소드를 단일 시퀀스로 압축, 학습 효율을 22배 향상시켰습니다.
*   **온라인 강화 학습 (CISPO):** 지도 학습 이후 온라인 강화 학습 알고리즘인 CISPO를 적용하여 시행착오를 통한 성능 개선과 분포 변화(Distribution Shift) 문제를 완화했습니다.

## 사용 사례
이 모델은 사무실, 주거용 및 상업용 건물, 실외 환경 등 다양한 장소에서 로봇의 자율 주행을 지원합니다.

*   **물류 및 배송:** 창고 내 이동이나 라스트 마일 배송 로봇의 경로 탐색.
*   **서비스 로봇:** 호텔이나 병원 내에서 고객을 안내하거나 물품을 전달하는 작업.
*   **제조:** 공장 내부의 동적인 장애물을 피해 이동하는 자율 주행 플랫폼.

## 한계
Robostral Navigate는 단일 RGB 카메라에 최적화되어 있으나, 목표 지점이 현재 시야 밖에 있는 경우에는 로컬 좌표계 기반의 변위 명령("앞으로 2미터 이동" 등)으로 폴백(Fallback)해야 하는 한계가 있습니다. 또한, 현재는 내비게이션이라는 기초 역량에 집중하고 있으며, 보다 복잡한 조작(Manipulation) 작업을 위한 통합 임바디드 에이전트로 진화하는 과정의 첫 단계입니다.
