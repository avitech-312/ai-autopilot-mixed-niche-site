export default function HealthPage() {
  return (
    <main>
      <h1 className="text-4xl font-bold mb-6">💪 Health & Wellness</h1>
      <p className="text-gray-700 mb-6">General wellness ideas — not medical advice.</p>

      <div className="space-y-6">
        <div className="p-5 bg-white rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">20-Minute Daily Routine</h2>
          <ol className="list-decimal ml-5 text-gray-700 space-y-1">
            <li>5 min mobility (neck/shoulders/hips)</li>
            <li>10 min brisk walk</li>
            <li>2 min breathing</li>
            <li>3 min stretch & water</li>
          </ol>
        </div>
        <div className="p-5 bg-white rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">Sleep Basics</h2>
          <ul className="list-disc ml-5 text-gray-700">
            <li>Consistent sleep/wake time</li>
            <li>Dark, cool room</li>
            <li>Limit late caffeine/screens</li>
          </ul>
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-6">
        For medical questions, consult a qualified professional.
      </p>
    </main>
  );
}
