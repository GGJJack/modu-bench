---
date: 2026-07-14
agent: profile-model
status: completed
summary: "Sarvam 30B 및 Amazon Nova 2 Sonic 모델 상세 프로파일 작성 완료"
---

## Todo
- [x] 신규 LLM 상세 프로파일 작성 (Sarvam 30B)
- [x] 신규 멀티모달 LLM 상세 프로파일 작성 (Amazon Nova 2 Sonic)
- [x] `bun run build`를 통한 Zod 스키마 및 빌드 완성도 검증

## 조사 내역
- 18:02  Sarvam AI 공식 블로그에서 Sarvam-30B 세부 스펙(2.4B 활성 파라미터, GQA 등) 조사 ← https://www.sarvam.ai/blogs/sarvam-30b-105b
- 18:04  AWS News Blog에서 Amazon Nova 2 Sonic GA 상세(VAD, 코드 스위칭, Polyglot, 비동기 툴링) 조사 ← https://aws.amazon.com/blogs/aws/introducing-amazon-nova-2-sonic-next-generation-speech-to-speech-model-for-conversational-ai/

## 수행한 작업
- [x] `src/content/models/sarvam-30b.md` 작성  ← https://www.sarvam.ai/blogs/sarvam-30b-105b
- [x] `src/content/models/amazon-nova-2-sonic.md` 작성  ← https://aws.amazon.com/blogs/aws/introducing-amazon-nova-2-sonic-next-generation-speech-to-speech-model-for-conversational-ai/
- [x] `bun run build` 실행하여 Zod 스키마 검증 및 정적 페이지(총 260개 페이지) 생성 빌드 성공 확인

## 판단 / 고민
- Sarvam 30B는 MoE 구조이면서 활성 파라미터가 2.4B인 초고효율 로컬 및 Samvaad 구동 지능을 명확히 명시하기 위해, 엣지 기기 최적화 및 GQA 기술 차이점을 기술적 핵심으로 선정하여 작성하였습니다.
- Amazon Nova 2 Sonic은 일반적인 텍스트-음성 파이프라인과 다르게 오디오를 네이티브로 직접 처리하는 차별점과 Polyglot 목소리(코드 스위칭), Configurable VAD, 그리고 대화 도중 도구 실행 중에도 끊김없이 자연스럽게 연대하는 비동기 도구 호출 기능을 중심으로 가독성 높게 구성하였습니다.
- 두 파일 모두 중복된 H1 렌더링에 의한 Playwright 및 프론트엔드 검증 실패를 예방하기 위해, 본문 상단에 `#`를 활용한 H1 헤더를 명시적으로 제외하고 `## 개요`로 직접 시작하게 구성하였습니다.

## 이슈 제기
- (없음)
