---
benchmarkId: ocrbench
domain: multimodal
status: published
updated: 2026-08-04
sources:
  - https://arxiv.org/abs/2305.07895
  - https://github.com/Yuliang-Liu/MultimodalOCR
highlights:
  - "OCRBench는 29개의 데이터셋을 포함하는 포괄적인 OCR 평가 벤치마크"
  - "텍스트 인식, VQA, 핵심 정보 추출(KIE) 등 다양한 텍스트 관련 태스크 평가"
  - "다국어 텍스트, 손글씨 텍스트, 비의미적 텍스트, 수식 인식 등 LMM의 강점과 약점 파악 가능"
---

# OCRBench (OCR 성능 평가)

## 개요
OCRBench는 대규모 멀티모달 모델(LMM)의 광학 문자 인식(OCR) 능력을 종합적으로 평가하기 위해 고안된 벤치마크입니다. 29개의 개별 데이터셋을 통합하여, 현존하는 가장 포괄적인 OCR 평가 벤치마크를 제공합니다. 단순한 텍스트 인식을 넘어 문서 기반 VQA(Visual Question Answering) 등 복합적인 시각 태스크에서의 능력을 평가합니다.

## 평가 방법
이 벤치마크는 다음과 같은 다양한 텍스트 관련 시각 태스크를 포함합니다:
- **텍스트 인식 (Text Recognition)**: 이미지 내의 문자를 정확히 인식.
- **장면 텍스트 중심 VQA (Scene Text-Centric VQA)**: 이미지 속 텍스트와 관련된 질문에 답하기.
- **문서 지향 VQA (Document-Oriented VQA)**: 문서 이미지를 분석하여 질문에 답하기.
- **핵심 정보 추출 (Key Information Extraction, KIE)**: 문서에서 중요한 정보를 식별하고 추출.
- **수동 수학 수식 인식 (Handwritten Mathematical Expression Recognition, HMER)**: 손글씨로 쓰여진 수학 수식을 인식.

## 점수 해석
평가 결과는 각 태스크에 대한 정확도 등으로 산출되며, 높은 점수는 모델이 다국어 텍스트, 손글씨, 비의미적 텍스트 및 수식을 포함한 다양한 OCR 시나리오를 얼마나 효과적으로 처리할 수 있는지를 나타냅니다.
