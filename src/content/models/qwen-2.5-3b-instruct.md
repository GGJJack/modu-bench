---
modelId: qwen-2.5-3b-instruct
domain: llm
status: published
updated: 2026-08-18
sources:
  - https://huggingface.co/Qwen/Qwen2.5-3B-Instruct
  - https://qwenlm.github.io/blog/qwen2.5/
  - https://github.com/QwenLM/Qwen2.5
  - https://arxiv.org/abs/2412.15115
features:
  toolUse: true
  vision: false
  fineTuning: true
highlights:
  - "3.09B 소형 경량 모델에서 최대 128K 컨텍스트 윈도우 지원"
  - "GQA(Grouped Query Attention, 16Q/2KV) 아키텍처 적용으로 효율적인 추론"
  - "코딩, 수학, 다국어(29개 이상) 및 JSON 구조화 출력 성능 강화"
relatedOrganization: alibaba
---

# Qwen2.5 3B Instruct 소개

## 개요
Qwen2.5 3B Instruct는 알리바바 클라우드(Alibaba Cloud) Qwen 팀이 개발하여 2024년 9월 19일에 공개한 Qwen2.5 대형 언어모델 시리즈의 30억 파라미터(3.09B) 규모 지시 이행(Instruction-tuned) 경량 모델이다. 소형 파라미터 크기에도 불구하고 최적화된 사전학습 데이터와 포스트 트레이닝 정렬 기술을 적용하여 코딩, 수학, 제어 명령 이행, 다국어 처리 등 다양한 일반 및 전문 영역에서 강력한 성능을 보인다. Qwen Research License 기반으로 연구 및 제한적 상용 환경에서 접근성을 높였다.

## 기술 특징
Qwen2.5 3B Instruct는 Transformer 아키텍처를 바탕으로 RoPE(Rotary Position Embedding), SwiGLU 활성화 함수, RMSNorm, QKV 바이아스 및 Tied Word Embeddings 구조를 갖추고 있다. 총 36개 레이어와 GQA(Grouped Query Attention, Query Head 16개 / Key-Value Head 2개)를 적용하여 추론 시 메모리 사용량을 최소화하면서도 최대 128,000(128K) 토큰의 긴 컨텍스트 윈도우와 최대 8,192 토큰의 출력을 지원한다. 한국어, 중국어, 영어, 일본어, 프랑스어, 스페인어 등 29개 이상의 언어를 지원하며, 특히 시스템 프롬프트 대응력과 JSON을 비롯한 구조화된 데이터 생성 능력이 대폭 향상되었다.

## 사용 사례
3B 수준의 가벼운 수용량 덕분에 온디바이스(On-device), 엣지 컴퓨팅 및 단일 Consumer GPU 환경에서 빠르게 로컬 서빙(vLLM, SGLang, Ollama 등)이 가능하다. 에이전트형 애플리케이션의 도구 호출(Tool Use/Function Calling), 롤플레이 대화, 코딩 보조, 복잡한 지시문 이행 및 텍스트 요약/추출 등 다양한 실시간 인터랙티브 서비스 분야에서 널리 활용되고 있다.

## 한계
3B 소형 모델 특성상 매우 복잡하고 깊은 수준의 다단계 추론이나 초고난도 프로그래밍 태스크에서는 32B, 72B 등 대형 파라미터 모델 대비 정밀도가 감소할 수 있으므로, 신뢰성이 요구되는 핵심 생산 업무에는 모델 출력을 검증하는 추가적인 검증 로직이나 가드레일 조치가 권장된다.
