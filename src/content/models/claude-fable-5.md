---
modelId: claude-fable-5
domain: llm
status: published
updated: 2026-06-09
sources:
  - https://www.anthropic.com/news/claude-fable-5-mythos-5
  - https://anthropic.com/claude-fable-5-mythos-5-system-card
  - https://www.anthropic.com/glasswing
features:
  toolUse: true
  vision: true
  extendedThinking: true
  computerUse: true
highlights:
  - "Mythos급 모델의 대중 공개 버전"
  - "Stripe 기준 수개월의 엔지니어링 작업을 단 하루로 단축"
  - "분야별 전용 가드레일(Cyber, Bio, Chem) 및 Opus 4.8 폴백 시스템 도입"
relatedOrganization: anthropic
---

# Claude Fable 5 소개

## 개요
Claude Fable 5는 2026년 6월 Anthropic이 발표한 차세대 프론티어 AI 모델로, 이전의 Opus급을 뛰어넘는 'Mythos(미토스)'급 성능을 일반 사용자에게 안전하게 제공하기 위해 설계되었습니다. 소프트웨어 엔지니어링, 지식 작업, 비전 추론, 과학 연구 등 거의 모든 벤치마크에서 업계 최고 수준(State-of-the-art)의 성능을 기록하고 있습니다. 특히 작업이 복잡하고 길어질수록 기존 모델들과의 성능 격차가 더욱 벌어지는 특징을 보이며, 고도의 자율성과 장기 추론 능력을 갖추고 있습니다.

## 기술 특징 및 성능
Claude Fable 5는 소프트웨어 개발 분야에서 혁신적인 효율성을 입증했습니다. Stripe의 초기 테스트에 따르면, 수천만 라인의 코드베이스 마이그레이션과 같이 일반적인 엔지니어링 팀이 두 달 이상 매달려야 할 복잡한 작업을 단 하루 만에 완료하는 성과를 거두었습니다. 비전 능력 또한 크게 향상되어, 복잡한 과학 도표에서 정밀한 수치를 추출하거나 웹 앱의 스크린샷만으로 소스 코드를 복구하는 작업이 가능합니다. 특히 별도의 보조 도구 없이 순수 비전 신호만으로 게임 '포켓몬스터 파이어레드'를 클리어하는 등 시각적 환경에서의 높은 추론 능력을 보여주었습니다.

또한 '메모리 및 장기 컨텍스트' 관리 능력이 강화되어 수백만 토큰에 달하는 긴 작업 과정에서도 집중력을 유지합니다. 자체적인 노트를 활용해 결과물을 지속적으로 개선하며, 복잡한 전략 게임이나 전문적인 금융 분석 등 고도의 사고력이 요구되는 영역에서 기존 최고 사양 모델인 Opus 4.8을 유의미하게 상회하는 성능을 보입니다.

## 안전 및 가드레일
Anthropic은 Fable 5의 강력한 성능에 따른 위험을 관리하기 위해 정교한 '분류기(Classifiers)' 기반 안전 시스템을 도입했습니다. 사이버 보안, 생물학, 화학, 증류(Distillation) 등 고위험 분야의 요청이 감지될 경우, 시스템은 해당 요청을 자동으로 Claude Opus 4.8 모델로 전달(Fallback)하여 처리합니다. 이러한 보수적인 튜닝 덕분에 강력한 성능을 유지하면서도 오용 가능성을 최소화했으며, Anthropic에 따르면 일반적인 사용자의 95% 이상은 이러한 폴백 없이 Fable 5의 성능을 온전히 경험할 수 있습니다.

## 사용 사례 및 한계
이 모델은 복잡한 에이전트 기반 코딩, 다단계 금융 분석, 고도의 과학적 가설 생성 등에 최적화되어 있습니다. 다만, 안전 가드레일이 보수적으로 설정되어 있어 무해한 요청임에도 불구하고 보안 분류기가 작동하여 성능이 낮은 모델로 폴백되는 '거짓 긍정(False Positive)' 사례가 발생할 수 있습니다. Anthropic은 향후 업데이트를 통해 이러한 과잉 차단을 줄여나갈 계획임을 밝히고 있습니다.
