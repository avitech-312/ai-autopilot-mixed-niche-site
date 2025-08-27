#!/usr/bin/env python3
# Autogenerate mixed-niche posts using an LLM (OpenAI-compatible).
# Environment variables required:
# - OPENAI_API_KEY: your API key
# Optional:
# - MODEL: model name (defaults to 'gpt-4o-mini' or 'gpt-4o')
# - MAX_TOKENS: integer limit
# This script creates 5 markdown posts (one per category) under content/<category>/<slug>.md

import os, sys, json, pathlib, datetime, re
from typing import List, Dict

try:
    import requests
except Exception as e:
    print("Please 'pip install requests' if missing.", file=sys.stderr)

ROOT = pathlib.Path(__file__).resolve().parents[1]
CONTENT = ROOT / "content"
CATEGORIES = {
    "tech": "Tech & AI",
    "finance": "Finance & Investing",
    "health": "Health & Wellness",
    "motivation": "Motivation & Quotes",
    "ai-tools": "AI Tools Directory"
}

OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY", "").strip()
MODEL = os.environ.get("MODEL", "gpt-4o-mini")
MAX_TOKENS = int(os.environ.get("MAX_TOKENS", "1000"))

def slugify(s: str) -> str:
    s = s.lower().strip()
    s = re.sub(r"[^a-z0-9]+", "-", s).strip("-")
    return s[:80] if s else datetime.datetime.utcnow().strftime("%Y%m%d%H%M%S")

def llm_generate(title: str, instruction: str) -> str:
    assert OPENAI_API_KEY, "OPENAI_API_KEY env var is required"
    url = "https://api.openai.com/v1/chat/completions"
    headers = {
        "Authorization": f"Bearer {OPENAI_API_KEY}",
        "Content-Type": "application/json"
    }
    system_prompt = "You are an expert editor who writes clear, SEO-friendly, factual blog posts with headings, bullet points, and concise summaries."
    user_prompt = f"""Write a 700-900 word post titled: "{title}".
{instruction}

Structure:
- Catchy H1
- 3-5 H2 sections with short paragraphs and bullet points
- One 'Key Takeaways' section
- Add 3 suggested tags (hashtags without #) at the end as a comma list
Keep it evergreen, avoid regional laws or time-sensitive claims. Avoid medical or financial advice; share educational information only.
"""
    body = {
        "model": MODEL,
        "messages": [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_prompt}
        ],
        "max_tokens": MAX_TOKENS,
        "temperature": 0.7
    }
    resp = requests.post(url, headers=headers, json=body, timeout=60)
    if resp.status_code != 200:
        raise RuntimeError(f"LLM error {resp.status_code}: {resp.text[:200]}")
    data = resp.json()
    content = data["choices"][0]["message"]["content"]
    return content

def write_post(category: str, title: str, body_md: str):
    date = datetime.datetime.utcnow().replace(microsecond=0).isoformat() + "Z"
    slug = slugify(title)
    target_dir = CONTENT / category
    target_dir.mkdir(parents=True, exist_ok=True)
    out = target_dir / f"{slug}.md"
    # excerpt from first paragraph
    first_para = body_md.strip().split("\n\n")[0]
    excerpt = re.sub(r"\s+", " ", first_para)[:160]
    front = f"""---
title: "{title.replace('"','\\\"')}"
date: "{date}"
excerpt: "{excerpt}"
---

"""
    with open(out, "w", encoding="utf-8") as f:
        f.write(front + body_md.strip() + "\n")
    print(f"Wrote {out}")

def main():
    if not OPENAI_API_KEY:
        print("ERROR: OPENAI_API_KEY not set. Skipping generation.", file=sys.stderr)
        sys.exit(1)

    tasks = [
        ("tech", "5 practical ways AI and DevOps intersect in 2025",
         "Focus on CI/CD acceleration, testing, cost optimization, guardrails, and platform engineering. Include simple examples and tools."),
        ("finance", "Simple frameworks for beginners to understand stocks vs. mutual funds",
         "Educational only. Explain risk, diversification, time horizon, and common mistakes. No personalized advice."),
        ("health", "Build a sustainable 20-minute daily routine for busy professionals",
         "General wellness only. Include mobility, light cardio, breathing, sleep hygiene, and hydration. Avoid medical claims."),
        ("motivation", "Atomic habits for tech professionals: tiny routines that stick",
         "Give 10 actionable micro-habits for learning, deep work, interviewing, and wellbeing."),
        ("ai-tools", "Top 10 AI tools to boost productivity (curated and categorized)",
         "Provide categories (writing, coding, research, images). Give a one-line use case for each tool. Avoid affiliate language; educational tone.")
    ]

    for cat, title, instr in tasks:
        try:
            md = llm_generate(title, instr)
            write_post(cat, title, md)
        except Exception as e:
            print(f"Failed to generate for {cat}: {e}", file=sys.stderr)

if __name__ == "__main__":
    main()
