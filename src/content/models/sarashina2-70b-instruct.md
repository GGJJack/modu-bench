---
modelId: sarashina2-70b-instruct
domain: llm
status: published
updated: 2026-10-04
sources:
  - https://huggingface.co/sbintuitions/sarashina2-70b
  - https://www.sbintuitions.co.jp/
  - https://www.anlp.jp/proceedings/annual_meeting/2025/pdf_dir/Q2-18.pdf
features:
  toolUse: false
  vision: false
highlights:
  - "SB Intuitions가 개발한 70B 파라미터 대체급의 일본어 특화 오픈소스 지시어 미세조정 모델"
  - "사전학습 모델 Sarashina2 70B Base 바탕의 고품질 일본어 지도 학습(Instruction Tuning) 적용"
  - "MIT 라이선스 하에 자유로운 상용 및 연구용 활용 지원"
relatedOrganization: sbintuitions
---

# Sarashina2 70B Instruct 소개

## 개요
Sarashina2 70B Instruct는 소프트뱅크(SoftBank) 그룹 산하의 AI 연구개발 전문 기업 SB Intuitions가 개발하여 2024년 8월 공개한 700억(70B) 매개변수 규모의 플래그십 일본어 특화 오픈소스 언어 모델입니다. 사전 학습 모델인 Sarashina2 70B Base를 기반으로, 인간의 의도와 지시 사항을 고도로 정밀하게 이행하도록 정교한 지도 학습(Instruction Tuning)을 적용하여 구축되었습니다. 대규모 매개변수를 바탕으로 깊이 있는 일본어 이해 및 높은 정밀도의 서술·요약 능력을 제공하며 MIT 라이선스로 오픈 가중치가 공개되었습니다.

## 기술 특징
이 모델은 일본어 언어 생태계 및 문화적 특성을 정밀하게 반영하기 위해 다량의 고품질 일본어 웹 말뭉치와 도메인별 텍스트를 사전 학습에 활용했습니다. 70B에 달하는 파라미터 용량을 활용해 복잡한 일본어 문법 및 문맥 이해도를 극대화했으며, 8,192 토큰(8K)의 컨텍스트 윈도우를 지원합니다. Llama 기반 아키텍처와 호환성을 유지하여 Hugging Face, vLLM, TensorRT-LLM 등 오픈소스 인프라에서 대규모 병렬 추론 파이프라인 구축을 지원합니다.

## 사용 사례
Sarashina2 70B Instruct는 높고 섬세한 일본어 응답 정밀도가 요구되는 기업용 엔터프라이즈 인프라 및 대규모 고객 응대 챗봇 구축에 주로 활용됩니다. 일본어 사내 문서 자동 요약, 계약서 및 법률·금융 문서 분석, 높은 품질의 한일/영일 번역 보조 시스템 구축 등에 뛰어난 기량을 발휘합니다. 특히 MIT 라이선스가 부여되어 기업의 자체 온프레미스(On-premise) 환경이나 클라우드 인프라에 제한 없이 탑재하여 상용 서비스화가 가능합니다.

## 한계
70B 파라미터 체급 특성상 서빙 및 추론 연산에 수십 GB 이상의 대용량 GPU 메모리(예: NVIDIA A100/H100 등) 인프라가 필요하여, 경량 소형 모델 대비 운영 비용 부담이 존재합니다. 또한 복잡한 다단계 논리 추론이나 전문적 프로그래밍 코드 작성 능력에서는 글로벌 초대형 프론티어 모델 수준 대비 제한이 있을 수 있으며, 비전/오디오 등 멀티모달 입력 기능은 포함되어 있지 않습니다.
