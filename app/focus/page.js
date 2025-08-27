export default function FocusPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-blue-50">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Stay Focused</h1>
      <p className="text-lg text-gray-700 max-w-2xl text-center mb-6">
        Focus is the hidden superpower. In a world full of distractions,
        the ability to concentrate on one thing at a time is what separates
        the successful from the average.
      </p>
      <ul className="list-disc list-inside text-gray-600 space-y-2">
        <li>Eliminate distractions around you.</li>
        <li>Set clear, measurable goals.</li>
        <li>Take breaks to recharge your brain.</li>
        <li>Stay consistent with your priorities.</li>
      </ul>
    </main>
  );
}
