export default function AiToolsPage() {
  const tools = [
    { name: "WriterPro", blurb: "Draft blogs, emails, and summaries fast.", url: "#" },
    { name: "CodePilot", blurb: "AI pair programmer for JS/Python.", url: "#" },
    { name: "ResearchAid", blurb: "Turn long PDFs into key points.", url: "#" },
    { name: "ImageForge", blurb: "Create illustrations for posts.", url: "#" },
  ];
  return (
    <main>
      <h1 className="text-4xl font-bold mb-6">💡 AI Tools</h1>
      <p className="text-gray-700 mb-6">Curated, beginner-friendly tool picks by category.</p>
      <div className="grid md:grid-cols-2 gap-6">
        {tools.map(t => (
          <a key={t.name} href={t.url} className="block p-5 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h2 className="text-lg font-semibold">{t.name}</h2>
            <p className="text-gray-600 mt-1">{t.blurb}</p>
            <span className="text-blue-600 underline mt-2 inline-block">Learn more →</span>
          </a>
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-6">
        Note: Links may include affiliates in the future. Always evaluate tools yourself.
      </p>
    </main>
  );
}
