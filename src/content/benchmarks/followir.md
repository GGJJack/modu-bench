---
benchmarkId: followir
domain: llm
status: draft
updated: 2026-09-17
sources:
  - https://arxiv.org/abs/2403.15246
organization: johns-hopkins-university
paperUrl: https://arxiv.org/abs/2403.15246
highlights:
  - "Evaluating and Teaching Information Retrieval Models to Follow Instructions"
---

# FollowIR

## 개요
Modern Language Models (LMs) are capable of following long and complex instructions that enable a large and diverse set of user requests. While Information Retrieval (IR) models use these LMs as the backbone of their architectures, virtually none of them allow users to provide detailed instructions alongside queries, thus limiting their ability to satisfy complex information needs. In this work, we study the use of instructions in IR systems. First, we introduce our dataset FOLLOW IR, which contains a rigorous instruction evaluation benchmark as well as a training set for helping IR models learn to better follow real-world instructions.

## 평가 방법
FOLLOW IR repurposes detailed instructions—also known as narratives—developed for professional assessors to evaluate retrieval systems. In particular, we build our benchmark from three collections curated for shared tasks at the Text REtrieval Conference (TREC). These collections contains hundreds to thousands of labeled documents per query, making them suitable for our exploration. Through this process, we can measure how well IR models follow instructions, through a new pairwise evaluation framework.
