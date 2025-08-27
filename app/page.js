// app/page.js
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Hero Section */}
        <h1 className="text-4xl font-bold mb-6">🚀 AI Autopilot Business Hub</h1>
        <p className="text-lg text-gray-600 mb-12">
          One site. Unlimited niches. AI-generated blogs, health tips, finance insights, motivation, focus, success, and affiliate products — all in one place, running on autopilot.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a
            href="/aitools"
            className="block bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">💡 AI Tools</h2>
            <p className="text-gray-600">
              Discover the latest AI tools that can save you time and boost productivity.
            </p>
          </a>

          <a
            href="/finance"
            className="block bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">💰 Finance</h2>
            <p className="text-gray-600">
              Smart money tips, investment guides, and strategies for financial freedom.
            </p>
          </a>

          <a
            href="/health"
            className="block bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">💪 Health</h2>
            <p className="text-gray-600">
              Daily health hacks, workout plans, and nutrition advice powered by AI.
            </p>
          </a>

          <a
            href="/motivation"
            className="block bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">🔥 Motivation</h2>
            <p className="text-gray-600">
              Daily motivational quotes and success stories to keep you inspired.
            </p>
          </a>

          <a
            href="/focus"
            className="block bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">🎯 Focus</h2>
            <p className="text-gray-600">
              Improve your concentration and productivity with proven strategies.
            </p>
          </a>

          <a
            href="/success"
            className="block bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">🏆 Success</h2>
            <p className="text-gray-600">
              Discover habits and mindsets that drive long-term success.
            </p>
          </a>

          <a
            href="/affiliate"
            className="block bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">🛒 Affiliate Picks</h2>
            <p className="text-gray-600">
              Carefully selected products that solve problems and earn commissions.
            </p>
          </a>

          <a
            href="/blog"
            className="block bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">📚 Blog</h2>
            <p className="text-gray-600">
              Fresh AI-generated articles on trending topics for SEO traffic.
            </p>
          </a>
        </div>

        {/* Ad Section */}
        <div className="mt-12 bg-yellow-100 p-6 rounded-2xl shadow-inner">
          <h2 className="text-lg font-semibold mb-2">📢 Ad Space</h2>
          <p className="text-gray-700">
            Your Google AdSense banner or affiliate ads will appear here.
          </p>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-gray-500 text-sm">
          © 2025 AI Autopilot Business. All rights reserved.
        </footer>
      </div>
    </main>
  );
}

