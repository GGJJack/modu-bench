---
modelId: sarashina2-13b-instruct
domain: llm
status: published
updated: 2026-09-21
sources:
  - https://www.sbintuitions.co.jp/
  - https://huggingface.co/sbintuitions/sarashina2-13b-instruct
  - https://www.anlp.jp/proceedings/annual_meeting/2025/pdf_dir/Q2-18.pdf
features:
  toolUse: false
  vision: false
highlights:
  - "SB Intuitions가 개발한 일본어 특화 13B 지시어 미세조정 모델"
  - "일본어 웹 말뭉치 및 비즈니스 데이터 세트 중심 정밀 학습"
  - "8K 컨텍스트 윈도우 및 상용 활용이 용이한 MIT 라이선스 제공"
relatedOrganization: sbintuitions
---

# Sarashina2 13B Instruct 소개

## 개요
Sarashina2 13B Instruct는 소프트뱅크 그룹의 AI 연구 전문 자회사인 SB Intuitions에서 개발하여 2024년 6월에 정식 공개한 130억(13B) 매개변수 규모의 오픈소스 대형 언어 모델입니다. 일본어 지시어 이행 능력을 대폭 개선하기 위해 사전학습 모델인 Sarashina2 13B Base를 바탕으로 인간 피드백 기반 정밀 지도 학습(Instruction Tuning) 과정을 적용하여 구축되었습니다. 높은 수준의 일본어 자연어 이해 및 문서 요약, 질의응답 능력을 지니고 있으며 MIT 라이선스 하에 오픈 가중치로 자유롭게 제공됩니다.

## 기술 특징
이 모델은 일본어 언어권의 문화적 맥락과 비즈니스 표현을 정밀하게 다루기 위해 대규모 고품질 일본어 텍스트 말뭉치로 사전학습되었습니다. 최대 8,192 토큰(8K)의 문맥 길이를 지원하며, Llama 기반 아키텍처 호환성을 유지하여 기존 Hugging Face 생태계 및 vLLM, TensorRT-LLM 등 오픈소스 서빙 엔진에서 손쉽게 추론 파이프라인을 구축할 수 있습니다. 지시어 이행 학습 단계에서는 정교하게 필터링된 질의응답 데이터셋을 활용하여 일관되고 안정적인 일본어 응답을 생성하도록 설계되었습니다.

## 사용 사례
Sarashina2 13B Instruct는 일본 지역 시장을 겨냥한 고객 지원 자동 응답 시스템(고객센터 챗봇), 일본어 사내 문서 요약 및 서식 작성 보조, 고성능 일본어 번역 지원 등 다양한 기업용 애플리케이션에 유용하게 활용됩니다. 특히 MIT 라이선스가 적용되어 있어 상업적 제품 및 연구용 온프레미스 인프라에 제한 없이 탑재 가능하며, 단일 중형 GPU 메모리 환경에서도 원활하게 추론 인프라를 서빙할 수 있다는 강점을 가집니다.

## 한계
13B 매개변수 규모의 범용 Dense 모델로서 일본어 영역에서 높은 정밀도를 자랑하지만, GPT-4o나 Claude 3.5 Sonnet과 같은 초대형 프론티어 모델과 비교할 때 매우 복잡한 다단계 논리 추론이나 전문 코딩 영역에서는 성능적 한계가 존재할 수 있습니다. 또한 이미지 및 음성 입력을 처리할 수 있는 멀티모달(Vision/Audio) 기능이 구현되어 있지 않으므로 텍스트 전용 인터페이스 환경으로 응용 범위가 제한됩니다.
