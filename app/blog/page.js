// app/blog/page.js
export const metadata = {
  title: "Blog | AI Autopilot Business Hub",
  description: "Fresh AI-generated articles on trending topics for SEO traffic.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">📚 Blog</h1>
        <p className="text-gray-600 mb-8">
          Welcome to the blog! Here you’ll find AI-generated articles across multiple niches —
          finance, health, motivation, focus, success, and more.
        </p>

        {/* Placeholder for posts */}
        <div className="space-y-6">
          <article className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2">🚀 Sample Blog Post</h2>
            <p className="text-gray-600">
              This is a placeholder blog post. Soon, your AI-generated or Markdown-powered
              posts will appear here automatically.
            </p>
          </article>
        </div>
      </div>
    </main>
  );
}
