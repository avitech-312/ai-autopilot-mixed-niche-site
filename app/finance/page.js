export default function FinancePage() {
  return (
    <main>
      <h1 className="text-4xl font-bold mb-6">💰 Finance (Educational Only)</h1>
      <p className="text-gray-700 mb-6">
        Learn simple frameworks to understand budgeting, risk, and investing basics.
        This content is educational — not financial advice.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-5 bg-white rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">The 50/30/20 Rule</h2>
          <ul className="list-disc ml-5 text-gray-700">
            <li>50% needs</li>
            <li>30% wants</li>
            <li>20% savings/investing</li>
          </ul>
        </div>
        <div className="p-5 bg-white rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-2">Stocks vs. Funds</h2>
          <p className="text-gray-700">Stocks = single company exposure. Funds/ETFs = basket diversification.</p>
        </div>
      </div>

      <p className="text-xs text-gray-500 mt-6">
        Investing involves risk. Do your own research before making decisions.
      </p>
    </main>
  );
}
