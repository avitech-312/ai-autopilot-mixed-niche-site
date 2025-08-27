export default function SuccessPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-green-50">
      <h1 className="text-4xl font-bold text-green-700 mb-4">Path to Success</h1>
      <p className="text-lg text-gray-700 max-w-2xl text-center mb-6">
        Success doesn’t happen overnight. It’s the result of daily discipline,
        resilience in the face of challenges, and the courage to keep moving
        forward no matter what.
      </p>
      <ol className="list-decimal list-inside text-gray-600 space-y-2">
        <li>Define your vision clearly.</li>
        <li>Work hard and smart.</li>
        <li>Learn from failures quickly.</li>
        <li>Celebrate small wins along the way.</li>
      </ol>
    </main>
  );
}
