export default function AffiliatePage() {
  const picks = [
    { name: "Fast Hosting", why: "Great for Next.js deployments", url: "#" },
    { name: "Keyword Tool", why: "Find topics your audience searches for", url: "#" },
    { name: "Email Service", why: "Automated newsletters & sequences", url: "#" },
  ];

  return (
    <main>
      <h1 className="text-4xl font-bold mb-6">🛒 Affiliate Picks</h1>
      <p className="text-gray-700 mb-6">Curated products/services that pair well with our content.</p>

      <div className="grid md:grid-cols-2 gap-6">
        {picks.map(p => (
          <a key={p.name} href={p.url} className="block p-5 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h2 className="text-lg font-semibold">{p.name}</h2>
            <p className="text-gray-600 mt-1">{p.why}</p>
            <span className="text-blue-600 underline mt-2 inline-block">Check it out →</span>
          </a>
        ))}
      </div>

      <p className="text-xs text-gray-500 mt-6">
        Disclosure: links may be affiliate links. You pay the same price; we may earn a commission.
      </p>
    </main>
  );
}
