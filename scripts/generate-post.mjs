// scripts/generate-post.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";
import OpenAI from "openai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BLOG_DIR = path.join(__dirname, "..", "content", "blog");

// ------- settings you can tweak -------
const TAG_BUCKETS = {
  ai: ["ai", "tools", "automation", "productivity"],
  finance: ["finance", "money", "investing", "savings"],
  health: ["health", "fitness", "habits", "nutrition"],
  motivation: ["motivation", "mindset", "growth"],
  focus: ["focus", "deep work", "attention"],
  success: ["success", "career", "learning"],
};

const TOPICS = [
  { section: "ai", prompt: "Top useful AI tools and real-world workflows for solopreneurs." },
  { section: "finance", prompt: "Practical personal finance tips for beginners in India." },
  { section: "health", prompt: "Simple daily health habits for desk workers." },
  { section: "motivation", prompt: "Short motivational guide to beat procrastination." },
  { section: "focus", prompt: "Tactical focus routine for 60-minute deep work blocks." },
  { section: "success", prompt: "Habits that compound career success for developers." },
];

const WORD_COUNT = 900; // target length
// -------------------------------------

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function todayISO() {
  const d = new Date();
  // ensure IST date label if you prefer:
  const offsetMs = 5.5 * 60 * 60 * 1000; // IST offset from UTC
  const ist = new Date(d.getTime() + offsetMs);
  return ist.toISOString().split("T")[0];
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

async function main() {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.error("❌ Missing OPENAI_API_KEY env var.");
    process.exit(1);
  }

  if (!fs.existsSync(BLOG_DIR)) fs.mkdirSync(BLOG_DIR, { recursive: true });

  const topic = pick(TOPICS);
  const client = new OpenAI({ apiKey });

  // Ask model for: title, description, tags, and full Markdown body
  const system = `You are a senior content editor. Write clear, practical, SEO-friendly blog posts in Markdown. Use H2/H3 headings, short paragraphs, bullet lists, and a takeaway section.`;

  const user = `
Write a ${WORD_COUNT}-word Markdown blog post for the topic:

"${topic.prompt}"

Constraints:
- Audience: beginners to intermediate readers
- Region: global, but examples can include India where helpful
- Style: practical, friendly, credible
- Include an intro, multiple sections (##), bullet points, examples, and a conclusion with action steps.
- Add 3-5 actionable "Key Takeaways" at the end as a list.
- DO NOT include a title in the body; we'll set the title in front matter.
Provide also:
- an engaging SEO title (<= 65 chars)
- a meta description (<= 155 chars)
- 4-6 tags from this set: ${Object.values(TAG_BUCKETS).flat().join(", ")}

Return JSON with keys: title, description, tags (array of strings), body (markdown, no triple backticks).
`;

  const resp = await client.chat.completions.create({
    model: "gpt-4o-mini",
    temperature: 0.7,
    messages: [
      { role: "system", content: system },
      { role: "user", content: user },
    ],
    response_format: { type: "json_object" },
  });

  let data;
  try {
    data = JSON.parse(resp.choices[0].message.content);
  } catch (e) {
    console.error("❌ Failed to parse model JSON:", e);
    process.exit(1);
  }

  // Build front matter + markdown
  const date = todayISO();
  const safeTitle = (data.title || "Daily Post").trim();
  const slug = `${date}-${slugify(safeTitle)}`;
  const filePath = path.join(BLOG_DIR, `${slug}.md`);

  const fm = matter.stringify(data.body || "", {
    title: safeTitle,
    description: (data.description || "").trim(),
    date,
    section: topic.section,
    tags: Array.isArray(data.tags) && data.tags.length ? data.tags : TAG_BUCKETS[topic.section],
  });

  fs.writeFileSync(filePath, fm, "utf8");
  console.log(`✅ Wrote ${path.relative(process.cwd(), filePath)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
