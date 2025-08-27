"use client";

import { useState } from "react";

const QUOTES = [
  "Small steps, every day.",
  "Consistency beats intensity.",
  "You don’t need more time — you need a tiny start.",
  "Done is better than perfect.",
  "Focus on the next 10 minutes.",
];

const TIPS = [
  "Take a 5-minute walk to reset your focus.",
  "Write down tomorrow’s 3 priorities before bed.",
  "Turn off notifications for 1 hour of deep work.",
  "Celebrate small wins to stay motivated.",
  "Replace ‘I can’t’ with ‘How can I?’",
];

export default function MotivationPage() {
  const [q, setQ] = useState(QUOTES[0]);
  const [tip, setTip] = useState(TIPS[0]);

  const nextQuote = () =>
    setQ(QUOTES[Math.floor(Math.random() * QUOTES.length)]);
  const nextTip = () =>
    setTip(TIPS[Math.floor(Math.random() * TIPS.length)]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-orange-600">🔥 Motivation</h1>

      {/* Quote Card */}
      <div className="p-6 bg-white rounded-2xl shadow text-center">
        <p className="text-xl font-medium text-gray-800">{q}</p>
        <button
          onClick={nextQuote}
          className="mt-4 px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition"
        >
          New Quote
        </button>
      </div>

      {/* Daily Tip */}
      <div className="mt-8 p-6 bg-white rounded-2xl shadow text-center">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">💡 Daily Tip</h2>
        <p className="text-gray-700">{tip}</p>
        <button
          onClick={nextTip}
          className="mt-4 px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition"
        >
          New Tip
        </button>
      </div>

      {/* Extra Motivation Sections */}
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <div className="p-5 bg-white rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            Micro-habits for Tech Pros
          </h2>
          <ul className="list-disc ml-5 text-gray-700">
            <li>10-minute deep work timer</li>
            <li>1 leetcode or code review daily</li>
            <li>Write one paragraph summary of what you learned</li>
          </ul>
        </div>

        <div className="p-5 bg-white rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            Keep it Simple
          </h2>
          <p className="text-gray-700">
            Lower the barrier to start; increase the chance you’ll return
            tomorrow.
          </p>
        </div>
      </div>
    </main>
  );
}
