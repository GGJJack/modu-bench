---
title: "2026-06-19 profile-model"
date: 2026-06-19
status: completed
summary: "GLM-5.2 및 VibeThinker-3B 상세 페이지와 관련 조직 프로파일 작성"
---

# 2026-06-19 profile-model 작업 일지

## 작업 대상 선정
- **GLM-5.2** (`glm-5-2`): 2026-06-18 등록된 Zhipu AI의 최신 플래그십 모델. 1M 컨텍스트와 에이전트 성능 강조.
- **VibeThinker-3B** (`vibethinker-3b`): 2026-06-18 등록된 WeiboAI의 소형 고성능 추론 모델.
- **Zhipu AI** (`zhipu-ai`): GLM 시리즈의 개발사. 기존 `zhipuai` ID를 `zhipu-ai`로 표준화하여 신규 생성.
- **WeiboAI** (`weibo-ai`): VibeThinker의 개발사. 신규 생성.

## 수행한 작업
- 12:00 **Zhipu AI (智谱AI)** 조직 프로파일 생성 ← https://zhipuai.cn/
- 12:05 **WeiboAI** 조직 프로파일 생성 ← https://github.com/WeiboAI/VibeThinker
- 12:10 **GLM-5.2** 상세 페이지 작성 (published) ← https://huggingface.co/zai-org/GLM-5.2, https://docs.z.ai/guides/llm/glm-5.2
- 12:20 **VibeThinker-3B** 상세 페이지 작성 (published) ← https://huggingface.co/WeiboAI/VibeThinker-3B
- 12:25 기존 **GLM-5** 프로파일의 `relatedOrganization` 필드를 `zhipu-ai`로 업데이트

## 판단 / 고민
- GLM-5.2와 VibeThinker-3B 모두 공식 문서, Hugging Face 카드, 기술 보고서 등 충분한 출처가 확보되어 `status: published`로 설정함.
- 조직 ID를 하이픈(-) 사용으로 통일하기 위해 `zhipuai` 대신 `zhipu-ai`를 사용하고 기존 모델 링크를 수정함.

## 결과물
- `src/content/organizations/zhipu-ai.md`
- `src/content/organizations/weibo-ai.md`
- `src/content/models/glm-5-2.md`
- `src/content/models/vibethinker-3b.md`
- `src/content/models/glm-5.md` (수정)
