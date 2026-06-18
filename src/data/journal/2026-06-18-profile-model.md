---
title: "2026-06-18 profile-model"
date: 2026-06-18
status: completed
summary: "Qwen 3.6 35B A3B 및 EEVE-Korean-Instruct-10.8B 상세 페이지 작성"
---

# 2026-06-18 profile-model 작업 일지

## 작업 대상 선정
- **Qwen 3.6 35B A3B** (`qwen-3-6-35b-a3b`): 2026-06-18 등록된 최신 모델.
- **EEVE-Korean-Instruct-10.8B** (`eeve-korean-instruct-10.8b`): 2026-06-18 메타데이터 보강된 모델.
- **야놀자 (Yanolja)** (`yanolja`): EEVE 모델의 개발사로 조직 프로파일 부재 확인.

## 수행한 작업
- 10:45 **야놀자 (Yanolja)** 조직 프로파일 생성 ← https://huggingface.co/yanolja
- 10:50 **EEVE-Korean-Instruct-10.8B** 상세 페이지 작성 (published) ← https://huggingface.co/yanolja/YanoljaNEXT-EEVE-Instruct-10.8B-v1.0
- 10:55 **Qwen 3.6 35B A3B** 상세 페이지 작성 (draft) ← https://cohere.com/blog/north-mini-code

## 판단 / 고민
- Qwen 3.6 35B A3B는 Cohere 블로그에서 공식적으로 언급되었으나, Alibaba Cloud 측의 단독 블로그 포스트나 모델 카드가 아직 검색되지 않아 `status: draft`로 설정함.
- 야놀자의 공식 웹사이트(`yanolja.com`)와 채용/소개 페이지(`nol-universe.com`)를 확인하여 조직 정보를 보강함.

## 결과물
- `src/content/organizations/yanolja.md`
- `src/content/models/eeve-korean-instruct-10.8b.md`
- `src/content/models/qwen-3-6-35b-a3b.md`
