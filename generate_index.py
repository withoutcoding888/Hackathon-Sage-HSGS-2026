import json
from pathlib import Path

DATA_DIR = Path("problems")

index = {}

for topic_dir in DATA_DIR.iterdir():
    if not topic_dir.is_dir():
        continue

    files = []

    for file in topic_dir.glob("*.json"):
        files.append(file.stem)

    files.sort()
    index[topic_dir.name] = files

with open(DATA_DIR / "index.json", "w", encoding="utf-8") as f:
    json.dump(index, f, indent=4, ensure_ascii=False)

print("Generated problems/index.json")