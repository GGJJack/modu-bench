---
modelId: claude-3-5-sonnet
domain: llm
status: published
updated: 2026-09-08
sources:
  - https://www.anthropic.com/news/claude-3-5-sonnet
  - https://www.anthropic.com/news/3-5-models-and-computer-use
  - https://www.anthropic.com/news/claude-3-family
features:
  toolUse: true
  vision: true
  computerUse: true
highlights:
  - "Claude 3 Opus 대비 2배 빠른 처리 속도와 강화된 지능"
  - "업계 최초의 컴퓨터 사용(Computer Use) 공개 베타 기능 제공"
  - "SWE-bench Verified 49.0% 기록으로 에이전트형 코딩 능력 입증"
relatedOrganization: anthropic
---

# Claude 3.5 Sonnet 소개

## 개요
Claude 3.5 Sonnet은 Anthropic이 2024년 6월 21일 처음 공개하고 10월에 업그레이드 버전을 출시한 Claude 3.5 제품군의 핵심 미드티어 프론티어 LLM입니다. 이 모델은 이전 최상위 모델인 Claude 3 Opus보다 2배 빠른 속도와 저렴한 비용을 유지하면서도 학술 수준의 추론(GPQA), 대학 수준의 지식(MMLU), 코딩 능력(HumanEval)에서 기존 업계 기준을 넘어서는 지능을 달성하였습니다.

또한 Anthropic은 Claude 3.5 Sonnet과 함께 Claude.ai 내에서 코드, 문서, 웹 디자인 등의 생성 결과물을 전용 창에서 실시간으로 확인하고 수정할 수 있는 작업 공간인 'Artifacts' 기능을 도입하여 단순한 대화형 AI를 넘어 협업 작업 환경으로 발전시켰습니다.

## 기술 특징
Claude 3.5 Sonnet은 에이전트형 코딩 및 도구 활용 능력에서 뛰어난 성과를 보여줍니다. 2024년 10월 업그레이드 버전에서는 실무 코딩 벤치마크인 SWE-bench Verified에서 49.0%의 해결률을 기록하며 주요 최첨단 모델 및 추론 특화 모델들을 능가했습니다. 또한 에이전트형 도구 활용 벤치마크인 TAU-bench의 소매 및 항공 도메인 평가에서도 큰 폭의 성능 향상을 기록했습니다.

시각(Vision) 기능 측면에서도 Claude 3.5 Sonnet은 차트, 그래프 해석 및 불완전한 이미지 내 텍스트 정밀 추출 등 시각적 추론 성능이 대폭 향상되었습니다. 더불어 업계 최초로 화면 보기, 커서 이동, 버튼 클릭, 텍스트 입력 등 사람이 컴퓨터를 조작하는 방식을 모방하는 '컴퓨터 사용(Computer Use)' API 기능을 공개 베타로 구현하였습니다.

## 사용 사례
Claude 3.5 Sonnet은 다단계 워크플로우 오케스트레이션, 문맥 감지 고객 지원, 코드베이스 변환 및 레거시 시스템 업데이트에 광범위하게 사용됩니다. Cognition, Replit, GitLab, Asana, Canva 등 다수의 기술 기업이 자율형 코딩 에이전트 및 웹 기반 작업 자동화 도구의 기반 모델로 Claude 3.5 Sonnet을 활용하고 있습니다.

## 한계
혁신적인 컴퓨터 사용(Computer Use) 기능은 아직 초기 실험적 단계(Experimental)로, 스크롤, 드래그, 확대/축소 등 일부 정밀 동작에서 오류가 발생하거나 다소 느리게 동작할 수 있습니다. 또한 컴퓨터 조작 기능이 스팸, 사기, 부정 사용 등 새로운 보안 위협 요소로 악용될 위험이 있어, Anthropic은 분류기 시스템 및 가드레일을 구축함과 동시에 초기 도입 시 위험도가 낮은 작업부터 적용할 것을 권장하고 있습니다.
