---
modelId: rakuten-ai-3-0-instruct
domain: llm
status: published
updated: 2026-10-13
sources:
  - https://corp.rakuten.co.jp/news/press/2026/0317_01.html
  - https://huggingface.co/Rakuten/RakutenAI-3.0-instruct
  - https://huggingface.co/Rakuten
features:
  fineTuning: true
  toolUse: false
  vision: false
highlights:
  - "라쿠텐 그룹이 2026년 3월 공개한 7000억 파라미터(700B MoE) 아키텍처 기반 대화 및 지시 수행 특화 일본어/영어 대규모 언어 모델"
  - "128,000(128k) 토큰 대용량 컨텍스트 지원 및 라쿠텐 고유의 가치관 정렬(Alignment) 알고리즘 적용"
  - "Nejumi Leaderboard, Swallow LLM Leaderboard 등 일본 주요 벤치마크 평가에서 지시 수행 및 종합 추론 능력 최상위 기록"
relatedOrganization: rakuten
---

# Rakuten AI 3.0 Instruct 소개

## 개요
Rakuten AI 3.0 Instruct는 일본의 대표적 기술기업 라쿠텐 그룹(Rakuten Group, Inc.)이 2026년 3월 20일 정식 출시한 초대형 대화 및 지시 수행(Instruct) 특화 인공지능 모델입니다. 총 7000억 파라미터(700B) 규모의 혼합 전문가(MoE) 아키텍처를 기반으로 설계되었으며, 라쿠텐이 보유한 방대한 멀티링구얼 데이터와 고도화된 정렬(Alignment) 기술을 융합하여 개발되었습니다. 연구자와 개발자들이 일본어 AI 생태계를 발전시킬 수 있도록 상업적 활용이 가능한 Apache-2.0 오픈소스 라이선스로 제공됩니다.

## 기술 특징
본 모델은 128,000(128k) 토큰 컨텍스트 윈도우를 기본 지원하여 장문의 보고서 분석, 멀티턴 대화 유지, 대규모 코드 및 비즈니스 문서 처리에 탁월한 성능을 발휘합니다. 특히 정교한 지도 미세 조정(SFT)과 인간 및 AI 피드백 기반 강화학습(RLHF/DPO) 과정을 거쳐 일본 특유의 비즈니스 예의 표현(Keigo)과 안전 가이드라인을 충실히 반영합니다. Nejumi Leaderboard, Swallow LLM LeaderBoard v2, JamC-QA 등 일본 권위의 벤치마크 평가에서 지시 수행 정확도와 상식 추론 부문 최고 수준의 지표를 기록하였습니다.

## 사용 사례
Rakuten AI 3.0 Instruct는 일본 현지 기업용 지능형 가상 비서, 대고객 상담 자동화 챗봇, 복잡한 비즈니스 계약서 요약 및 정보 추출 등 고도의 문맥 이해와 안정적인 대화 정밀도가 요구되는 다양한 분야에 적용될 수 있습니다. 온프레미스나 프라이빗 클라우드 환경에 직접 배포하여 일본의 개인정보 보호법 및 데이터 소버린 기준을 준수하면서 안전한 AI 서비스를 구축하기 위한 최선의 파운데이션 기반을 제공합니다.

## 한계
Rakuten AI 3.0 Instruct는 총 파라미터 700B 규모의 MoE 아키텍처를 취하고 있어, 모델을 추론 및 서빙하기 위해서는 다중 GPU 인프라(예: H100/A100 클러스터) 등 상당한 컴퓨팅 자원이 요구됩니다. 또한 pure text 언어 모델로서 멀티모달 비전 또는 오디오 입출력을 처리하기 위해서는 추가적인 멀티모달 모듈 연동이 필요하며, 특정 전문 도구 호출(Tool Use) 시에는 에이전트 전용 프롬프트 오케스트레이터 설정이 수반되어야 합니다.
