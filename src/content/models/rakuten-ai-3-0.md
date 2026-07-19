---
modelId: rakuten-ai-3-0
domain: llm
status: published
updated: 2026-07-19
sources:
  - https://corp.rakuten.co.jp/
  - https://sakana.ai/namazu-alpha/
  - https://huggingface.co/Rakuten
features:
  toolUse: false
  vision: false
highlights:
  - "락텐 그룹이 개발한 차세대 일본어 특화 LLM 모델"
  - "Sakana AI의 일본어 최적화 Namazu 사후학습(Post-training) 기술 검증용 대조 모델로 선정"
  - "Nejumi Leaderboard4, Swallow LLM LeaderBoard v2, JamC-QA 등 대표 일본어 벤치마크에서 뛰어난 기본기 입증"
relatedOrganization: rakuten
---

# Rakuten AI 3.0 소개

## 개요
Rakuten AI 3.0은 글로벌 IT 및 이커머스 기업인 락텐(Rakuten) 그룹이 개발하여 2026년 3월 20일에 공개한 최신 일본어 특화 대규모 언어 모델(LLM)입니다. 기존 7B 제품군의 성공을 계승하는 한편, 방대한 독자 데이터셋과 개선된 학습 파이프라인을 바탕으로 일본어 및 영어를 포함한 멀티링구얼 환경에서 한층 뛰어난 성능을 보입니다. 본 모델은 오픈소스 커뮤니티의 건강한 발전과 일본 국내 연구진의 기술 자립을 돕기 위해 Apache-2.0 라이선스로 배포되었습니다.

## 기술 특징
Rakuten AI 3.0은 일본어 자연어 처리(NLP) 분야의 최적화 수준을 한 단계 더 끌어올렸습니다. 특히 사후학습(Post-training) 분야의 선두 주자인 Sakana AI의 프로토타입 'Namazu' 개발 과정에서 기본 성능과 일본의 고유 가치관 및 안전성 편향을 비교하기 위한 핵심 벤치마크 대조군 모델로 선정되었습니다. Nejumi Leaderboard4, Swallow LLM LeaderBoard v2, JamC-QA 등 공신력 있는 일본어 평가 지표 전반에서 탄탄한 수학적 추론, 요약, 문맥 파악 기본기를 검증받았습니다.

## 사용 사례
이 모델은 일본 현지화 및 소버린(Sovereign) AI 서비스 구현을 목표로 하는 개발사나 기업에 이상적인 대안을 제시합니다. 락텐의 다채로운 디지털 비즈니스 에코시스템 내 고객 서비스 고도화, 이커머스 정보 카탈로그 요약, 인트라넷 비즈니스 문서 처리 등의 도메인에 우선 적용될 수 있습니다. 또한 Apache-2.0 오픈소스 라이선스에 따라, 특정 도메인에 대한 가중치 추가 미세 조정(Fine-tuning)과 가상 사설망(VPC) 내 독립 배포 등이 완전히 허용됩니다.

## 한계
Rakuten AI 3.0은 영어와 일본어를 제외한 다국어 작업 및 범용 추론에서는 상대적으로 다소 낮은 성능을 나타낼 수 있습니다. 또한 순수 텍스트 기반 모델로서 멀티모달 비전이나 이미지 처리 능력을 기본 탑재하고 있지 않으며, 복잡한 실시간 도구 사용(Tool Use) 기능을 자연스럽게 처리하기 위해서는 전용 대화형 데이터셋으로 정밀 미세 조정된 하위 모델을 사용하거나 별도의 에이전트 래퍼(Wrapper)가 요구됩니다.
