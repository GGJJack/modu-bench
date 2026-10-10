import os
import re

with open("llm_benchmarks.txt", "r") as f:
    out = f.read()

lines = out.split('\n')
benchmark_ids = []
for line in lines:
    match = re.search(r'\s*-\s*([a-zA-Z0-9_-]+)\s*\|', line)
    if match:
        benchmark_ids.append(match.group(1))

files = os.listdir("src/content/benchmarks")
file_ids = [f.replace(".md", "") for f in files if f.endswith(".md")]

missing = set(benchmark_ids) - set(file_ids)
print("Missing benchmarks:", missing)
