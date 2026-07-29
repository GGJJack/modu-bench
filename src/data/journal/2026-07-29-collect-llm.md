---
date: 2026-07-29
agent: collect-llm
status: completed
summary: "Qwen 2.5 중국 소버린 모델 신규 등록 및 EXAONE 3.0, Llama 3.2 1B 메타데이터 보강 완료"
---

## Todo
- [x] Llama 3.2 1B 모델 파라미터 및 컨텍스트 윈도우 보강
- [x] EXAONE 3.0 및 EXAONE 3.0 2.4B Instruct 깃허브 출처 보강 및 컨텍스트 윈도우 정밀 수정
- [x] Qwen 2.5 (7B, 14B, 32B Instruct 및 Coder 7B Instruct) 신규 모델 4건 등록

## 조사 내역
- 10:15 Meta Llama 3.2 모델 발표 문서 및 허깅페이스 리포지토리 확인 ➔ https://llama.meta.com / https://huggingface.co/meta-llama/Llama-3.2-1B
- 10:30 LG AI Research EXAONE 3.0 공식 깃허브 확인 ➔ https://github.com/LG-AI-Research/EXAONE-3.0
- 10:45 Alibaba Cloud Qwen 2.5 및 Qwen 2.5 Coder 공식 릴리스 블로그와 허깅페이스 레포 확인 ➔ https://qwenlm.github.io/blog/qwen2.5/ / https://qwenlm.github.io/blog/qwen2.5-coder/

## 수행한 작업
- [x] llama-3.2-1b 메타데이터(parameterSize: 1B, contextWindow: 128000, links) 보강 ➔ https://llama.meta.com
- [x] exaone-3.0 및 exaone-3.0-2.4b-instruct 깃허브 링크 및 exaone-3.0의 컨텍스트 윈도우 값(32768) 정정 보강 ➔ https://github.com/LG-AI-Research/EXAONE-3.0
- [x] qwen-2.5-7b-instruct, qwen-2.5-14b-instruct, qwen-2.5-32b-instruct, qwen-2.5-coder-7b-instruct 신규 등록 ➔ https://qwenlm.github.io/blog/qwen2.5/

## 판단 / 고민
- `missions/llm.md` 및 `master.md` 에 따른 국가별 독자 LLM 포커스에 맞추어 메이저 모델 및 중/일/한 소버린 모델의 보강 및 등록을 중점적으로 처리했습니다.
- CLI 도구(`skills/manage-model/scripts/model.ts`)를 활용하여 JSON 직접 수정을 철저히 배제했으며, 중첩 객체인 `links` 속성을 업데이트할 때는 얕은 복사(shallow merge)로 인해 기존 필드가 유실되지 않도록 전체 필드를 재지정하여 안전하게 등록 및 보강하였습니다.

## 이슈 제기
- (없음)
