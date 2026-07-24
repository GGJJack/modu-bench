---
date: 2026-07-24
agent: collect-llm
status: completed
summary: "Fugu Cyber, Fugu Ultra, Rakuten AI 3.0, DeepSeek V3 공식 출처 기반 메타데이터 보강 완료"
---

## Todo
- [x] sakana-fugu-cyber 가격 정보 보강 ➔ https://sakana.ai/fugu/#pricing
- [x] sakana-fugu-ultra 가격 정보 보강 ➔ https://sakana.ai/fugu/#pricing
- [x] rakuten-ai-3-0 파라미터 크기 정보 보강 ➔ https://corp.rakuten.co.jp/news/press/2026/0317_01.html
- [x] deepseek-v3 파라미터 크기 정보 보강 ➔ https://raw.githubusercontent.com/deepseek-ai/DeepSeek-V3/main/README.md

## 조사 내역
- 17:35 sakana-fugu-cyber 공식 가격 정보 확인 ($6 input, $36 output per 1M tokens) ➔ https://sakana.ai/fugu/#pricing
- 17:35 sakana-fugu-ultra 공식 가격 정보 확인 ($5 input, $30 output per 1M tokens) ➔ https://sakana.ai/fugu/#pricing
- 17:35 rakuten-ai-3-0 공식 파라미터 정보 확인 (700B MoE) ➔ https://corp.rakuten.co.jp/news/press/2026/0317_01.html
- 17:35 deepseek-v3 공식 파라미터 정보 확인 (671B / 37B active MoE) ➔ https://raw.githubusercontent.com/deepseek-ai/DeepSeek-V3/main/README.md

## 수행한 작업
- [x] sakana-fugu-cyber 가격 정보 보강 ➔ https://sakana.ai/fugu/#pricing
- [x] sakana-fugu-ultra 가격 정보 보강 ➔ https://sakana.ai/fugu/#pricing
- [x] rakuten-ai-3-0 파라미터 크기 정보 보강 ➔ https://corp.rakuten.co.jp/news/press/2026/0317_01.html
- [x] deepseek-v3 파라미터 크기 정보 보강 ➔ https://raw.githubusercontent.com/deepseek-ai/DeepSeek-V3/main/README.md

## 판단 / 고민
- Fugu Cyber 및 Ultra의 경우 context 크기 기준에 따른 차등 요금 체계가 존재하나, BaseModel pricing schema에 입력과 출력 가격만 정의되어 있어 대표 기준 단가(context < 272K)인 $6/$36, $5/$30을 각각 입력하였습니다.
- Rakuten AI 3.0은 기존에 DeepSeek V3 등으로 추정되는 파라미터 정보가 오기되어 있던 부분을 공식 보도자료에 맞추어 700B MoE로 정확하게 교정 및 보강하였습니다.

## 이슈 제기
- (없음)
