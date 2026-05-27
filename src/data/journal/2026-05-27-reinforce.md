---
date: 2026-05-27
agent: reinforce
status: completed
summary: "Baichuan2-13B-Chat 점수 보강 및 cer-ksponspeech 출처 수정"
---

## Todo
- [x] `cer-ksponspeech` 벤치마크 출처 URL 수정 (stt/cer-ksponspeech)
- [x] `Baichuan2-13B-Chat` MMLU 점수 추가 (llm/baichuan2-13b-chat)
- [x] 관련 이슈 티켓 정리

## 조사 내역
- 10:15 Baichuan2-13B-Chat 공식 GitHub README 확인. v2.0 릴리즈 노트 및 양자화 성능 테이블에서 Chat 모델 점수 발견. ← https://github.com/baichuan-inc/Baichuan2
- 10:20 cer-ksponspeech의 올바른 출처가 이미 상세 페이지(src/content/benchmarks/cer-ksponspeech.md)에 반영되어 있음을 확인. ← https://dx.doi.org/10.3390/app10196936

## 수행한 작업
- [x] `cer-ksponspeech` 출처 수정: `https://aclanthology.org/2020.lrec-1.245/` → `https://dx.doi.org/10.3390/app10196936`
- [x] `Baichuan2-13B-Chat` MMLU 점수 추가 (57.32)
- [x] 관련 이슈 티켓(3건) 삭제

## 판단 / 고민
- Baichuan2-13B-Chat의 점수가 공식 리드미의 메인 테이블에는 Base만 나와 있으나, 하단 "Quantization Effects" 섹션에 Chat(v1)의 bf16 점수가 명시되어 있어 이를 활용함. (C-Eval 56.74, MMLU 57.32, CMMLU 59.68)
- cer-ksponspeech의 경우 기존에 등록된 URL이 완전히 다른 논문을 가리키고 있었으나, `profile-benchmark` 과정에서 이미 올바른 논문(`10.3390/app10196936`)을 찾아 상세 페이지를 작성했음을 발견하고, 이를 레지스트리에 역으로 반영함.

## 이슈 제기
- (없음)
