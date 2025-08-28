// app/blog/page.js
import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function getPosts() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith(".md"));
  const posts = files.map((file) => {
    const full = path.join(BLOG_DIR, file);
    const raw = fs.readFileSync(full, "utf8");
    const { data } = matter(raw);
    const slug = file.replace(/\.md$/, "");
    return {
      slug,
      title: data.title || slug,
      description: data.description || "",
      date: data.date || "",
      section: data.section || "",
      tags: data.tags || [],
    };
  });
  // newest first
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  return posts;
}

export default function BlogPage() {
  const posts = getPosts();

  return (
    <main className="min-h-screen py-10">
      <h1 className="text-4xl font-bold mb-6">📚 Blog</h1>
      {posts.length === 0 ? (
        <p className="text-gray-600">No posts yet. Check back tomorrow!</p>
      ) : (
        <ul className="grid md:grid-cols-2 gap-6">
          {posts.map((p) => (
            <li key={p.slug} className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-xl font-semibold mb-1">
                <Link href={`/blog/${p.slug}`} className="hover:underline">
                  {p.title}
                </Link>
              </h2>
              <p className="text-gray-500 text-sm">{p.date} {p.section ? `• ${p.section}` : ""}</p>
              <p className="text-gray-700 mt-2">{p.description}</p>
              {p.tags?.length ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs bg-gray-100 px-2 py-1 rounded">{t}</span>
                  ))}
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}


