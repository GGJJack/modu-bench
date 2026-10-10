import os
import re
import subprocess

domains = ["llm", "image-gen", "tts", "stt", "multimodal"]
missing_all = []

for domain in domains:
    out = subprocess.check_output(["bun", "run", "skills/manage-benchmark/scripts/benchmark.ts", "list", domain]).decode('utf-8')
    lines = out.split('\n')
    benchmark_ids = []
    for line in lines:
        match = re.search(r'\s*-\s*([a-zA-Z0-9_-]+)\s*\|', line)
        if match:
            benchmark_ids.append(match.group(1))

    files = os.listdir("src/content/benchmarks")
    file_ids = [f.replace(".md", "") for f in files if f.endswith(".md")]

    missing = set(benchmark_ids) - set(file_ids)
    if missing:
        missing_all.append((domain, missing))

print("Missing benchmarks:", missing_all)
