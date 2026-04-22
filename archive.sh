#!/usr/bin/env bash
# modu-bench 작업트리 스냅샷 압축 스크립트
# - 미커밋 변경사항 + .git/ + .env/.claude/.vscode 등 로컬 설정까지 포함
# - node_modules, dist, .astro 등 재생성 가능한 산출물은 제외
# - 출력은 프로젝트 내부에 생성 (SFTP 루트가 프로젝트 내부이므로)
# - 이전 zip과 자기 자신은 자동으로 제외됨
# - zip 포맷: macOS/Windows/Linux 모두 추가 설치 없이 해제 가능
#
# 사용법:
#   ./archive.sh                    # 기본: ./modu-bench.zip (덮어쓰기)
#   ARCHIVE_OUT=/path ./archive.sh  # 출력 디렉터리 지정

set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_NAME="$(basename "$PROJECT_DIR")"
PARENT_DIR="$(dirname "$PROJECT_DIR")"
OUT_DIR="${ARCHIVE_OUT:-$PROJECT_DIR}"
OUT_FILE="${OUT_DIR%/}/${PROJECT_NAME}.zip"

# zip -x 패턴: 경로는 ZIP 내부 기준(프로젝트 이름 프리픽스 포함)
EXCLUDES=(
  "${PROJECT_NAME}/node_modules/*"
  "${PROJECT_NAME}/dist/*"
  "${PROJECT_NAME}/.astro/*"
  "*.DS_Store"
  "*.log"
  "${PROJECT_NAME}/npm-debug.log*"
  "${PROJECT_NAME}/yarn-debug.log*"
  "${PROJECT_NAME}/yarn-error.log*"
  "${PROJECT_NAME}/pnpm-debug.log*"
  "${PROJECT_NAME}/${PROJECT_NAME}.zip"
)

echo "▸ 프로젝트   : $PROJECT_DIR"
echo "▸ 출력 파일  : $OUT_FILE"
echo "▸ 제외 대상  : node_modules, dist, .astro, 로그, .DS_Store"
echo "▸ 포함 대상  : .git, .env, .claude, .vscode 등 미커밋·로컬 설정 전체"
echo

cd "$PARENT_DIR"

# 기존 zip 삭제 (zip은 기본적으로 append/update 모드라 덮어쓰기 필요)
rm -f "$OUT_FILE"

# -r 재귀, -y 심볼릭링크 보존, -1 최고 속도, -q 조용히
zip -r -y -1 -q "$OUT_FILE" "./${PROJECT_NAME}" -x "${EXCLUDES[@]}"

echo "✓ 완료"
du -sh "$OUT_FILE" | awk '{printf "  크기: %s\n", $1}'
echo "  경로: $OUT_FILE"
echo
echo "집에서 복원:"
echo "  unzip $(basename "$OUT_FILE")       # 또는 Finder에서 더블클릭"
echo "  cd ${PROJECT_NAME} && bun install"
