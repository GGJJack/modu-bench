---
date: 2026-05-15
agent: profile-benchmark
status: completed
summary: "OSWorld-Verified와 Toolathlon 벤치마크 상세 페이지 및 기관 정보를 작성했습니다."
---

## Todo
- [x] OSWorld-Verified 벤치마크 상세 페이지 작성
- [x] OSWorld-Verified 기관 조사 이슈 티켓 생성
- [x] Toolathlon 벤치마크 상세 페이지 작성
- [x] Toolathlon 관련 기관(hkust-nlp) 스텁 및 이슈 티켓 생성

## 조사 내역
- 02:30 OSWorld-Verified 개요 조사 ← https://os-world.github.io/ , https://arxiv.org/abs/2404.07972
- 02:40 Toolathlon 개요 조사 ← https://github.com/hkust-nlp/Toolathlon , https://arxiv.org/abs/2510.25726

## 수행한 작업
- [x] `osworld-verified` 벤치마크 페이지(`src/content/benchmarks/osworld-verified.md`) 작성 ← https://arxiv.org/abs/2404.07972
- [x] `osworld-verified` 기관 미상 이슈(`src/data/issues/2026-05-16-profile-benchmark-osworld-verified-org.md`) 생성
- [x] `toolathlon` 벤치마크 페이지(`src/content/benchmarks/toolathlon.md`) 작성 ← https://arxiv.org/abs/2510.25726
- [x] `hkust-nlp` 기관 스텁(`src/content/organizations/hkust-nlp.md`) 작성 ← https://github.com/hkust-nlp
- [x] `hkust-nlp` 기관 상세 조사 이슈(`src/data/issues/2026-05-16-profile-benchmark-hkust-nlp.md`) 생성

## 판단 / 고민
- OSWorld-Verified의 경우 논문 저자가 여러 기관(HKU, Carnegie Mellon 등)에 소속되어 있어 벤치마크를 대표할 단일 `organization`을 식별하기 어려웠습니다. 이에 따라 프론트매터에서 `organization`을 생략하고 기관 확정을 위한 이슈 티켓을 생성했습니다.

## 이슈 제기
- issues/2026-05-16-profile-benchmark-osworld-verified-org.md
- issues/2026-05-16-profile-benchmark-hkust-nlp.md
