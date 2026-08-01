---
benchmarkId: jamc-qa
domain: llm
status: published
updated: 2026-08-01
sources:
  - https://www.anlp.jp/proceedings/annual_meeting/2025/pdf_dir/Q2-18.pdf
  - https://huggingface.co/datasets/sbintuitions/JamC-QA
organization: sbintuitions
paperUrl: https://www.anlp.jp/proceedings/annual_meeting/2025/pdf_dir/Q2-18.pdf
highlights:
  - "일본 고유 문화·역사 지식 QA"
---

# JamC-QA

## 개요
JamC-QA는 일본의 문화, 풍습, 풍토, 지리, 일본사, 행정, 법률, 의료 등 8개 카테고리에 걸쳐 일본 고유의 지식을 평가하는 다지선다형 질문응답 벤치마크입니다. 2,309개의 테스트 문항과 32개의 개발(dev) 문항으로 구성되어 있으며, 각 문항은 4지선다(4-choice) 형식입니다. 기존 벤치마크들이 영어권 데이터를 번역한 것에 머무르던 것과 달리, 이 벤치마크는 일본어 원시 데이터를 기반으로 처음부터 새롭게 구축되었습니다. 이 벤치마크에서 높은 성적을 거두려면 일본에 대한 광범위하고 상세한 이해가 필수적입니다.

## 평가 방법
모델은 선택지의 라벨(0-3)을 출력하는 대신 선택지 문자열 자체를 출력하도록 평가받습니다. 점수는 모델의 출력 문자열이 정답 선택지 문자열과 완전히 일치(Exact Match)하는 문항의 비율로 계산됩니다.

## 주요 모델 성능
여러 LLM을 대상으로 한 평가 결과에 따르면, 모델 간에 상당한 성능 차이가 확인되었습니다. 예를 들어, `sarashina2-8x70b` 및 `sarashina2-70b` 모델이 종합 점수 0.725(72.5%)로 가장 높은 성능을 기록했으며, 각 카테고리별로 강점이 다른 양상을 보였습니다. `Meta-Llama-3.1-405B`는 종합 0.571(57.1%), `Qwen2.5-72B`는 0.527(52.7%)의 성능을 기록하는 등, 모델들이 일본 고유의 지식을 처리하는 능력을 세밀하게 비교할 수 있습니다.
