---
modelId: claude-science
domain: llm
status: published
updated: 2026-07-19
sources:
  - https://www.anthropic.com/news/claude-science-ai-workbench
  - https://claude.com/product/claude-science
  - https://modal.com/blog/modal-integration-brings-scalable-compute-to-claude-science
features:
  toolUse: true
  vision: true
  computerUse: true
highlights:
  - "과학 연구의 가속화를 위해 탄생한 업계 최초의 과학자용 AI 워크벤치(AI Workbench)"
  - "60개 이상의 고성능 생물학/화학 커넥터 및 NVIDIA BioNeMo 툴킷(Evo 2, Boltz-2 등) 통합"
  - "Modal 컴퓨팅 및 HPC 클러스터를 활용한 동적 하드웨어 스케일링 지원 및 오류 자가 치유형 '리뷰어 에이전트' 탑재"
relatedOrganization: anthropic
---

# Claude Science 소개

## 개요
Claude Science는 앤트로픽(Anthropic)이 2026년 6월 30일에 발표하여 7월 3일부터 본격 배포를 시작한 과학자 및 생명과학 연구팀을 위한 맞춤형 AI 워크벤치(AI Workbench) 플랫폼이자 특화 모델 에이전트입니다. 이 제품은 기존의 파편화되어 있던 학술 데이터베이스, 융합 분석 파이프라인, 연구용 도구들(PubMed, Jupyter Notebook, R, HPC 클러스터 등)을 단일 실행 런타임 환경으로 통합하였습니다. 연구자가 자연어로 복잡한 과학 연산 및 문헌 분석 지시를 내리면, 내부의 조정 에이전트(Coordinating Agent)와 전문 하위 에이전트들이 이를 협업하여 자율적으로 처리합니다.

## 기술 특징
Claude Science는 고도의 생화학 및 생물정보학 작업 수행을 위해 NVIDIA의 BioNeMo Agent Toolkit을 활용하여 BioNeMo 생태계 내의 핵심 오픈 모델들(Evo 2, Boltz-2, OpenFold3 등)에 네이티브로 직접 연결됩니다. 유전체 브라우저 트랙(Genome Browser Tracks), 3차원 단백질 폴딩 구조, 분자 화학 구조식 등을 전용 캔버스에 직접 렌더링하고, 이를 실시간 대화식으로 편집 및 어노테이션할 수 있는 시각화 기술을 지원합니다. 또한, 연산 단계가 수행되는 과정에서 '리뷰어 에이전트(Reviewer Agent)'가 개입하여 중간 계산 수치 오류, 참고 문헌 누락, 코드 모순을 실시간으로 교정(Self-Correction)하고 결과의 유효성을 확실히 검증합니다.

## 사용 사례
실제 베타 테스트 기간 동안 앨런 뇌과학 연구소(Allen Institute) 및 캘리포니아 대학교 샌프란시스코(UCSF) 등의 연구진이 이 모델을 연구에 전면 도입하였습니다. CRISPR 유전자 가위 타겟 스크리닝 디자인, 단일 세포 RNA 시퀀싱(single-cell RNA-seq) 분석, 수백 페이지에 달하는 대단위 과학 논문 리뷰 자동 초안 작성 등에서 과거 최대 2년 이상 걸리던 과정을 단 10분의 1 수준의 시간으로 단축하는 성능 향상을 입증했습니다. 또한 서버리스 연산 플랫폼인 Modal 및 대학 연구소 내부의 HPC 클러스터 리소스를 SSH를 통해 자율 조율(Scaling on Demand)하여 백 엔드 파이프라인 연산을 안전하게 실행합니다.

## 한계
Claude Science는 고도의 연산 능력과 자율적인 하위 에이전트 기동을 필요로 하므로, 가동할 수 있는 컴퓨팅 장치나 SSH 연계 인증 인프라가 사전에 긴밀하게 구성되어 있어야 최대의 효율을 냅니다. 또한 보안 유지를 위해 대량의 미가공 데이터셋은 전용 온프레미스 인프라에 상주하게 하고 AI 추론에 필요한 최소 컨텍스트만 클라우드와 통신하도록 설계되었으나, 로컬 연산 자원이 부족한 환경에서는 민감한 연구 데이터 노출에 특별한 거버넌스 가이드가 필요할 수 있습니다.
