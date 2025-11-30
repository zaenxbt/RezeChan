import Navbar from "../components/Navbar";

export default function Tokenomics() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="mt-20 px-10">
        <h1 className="text-4xl font-bold mb-4">Tokenomics</h1>

        <div className="mt-6 text-gray-300 leading-relaxed">
          <p>Total Supply: 1,000,000,000</p>
          <p>Liquidity: 70%</p>
          <p>Community Rewards: 20%</p>
          <p>Development: 10%</p>
        </div>
      </div>
    </div>
  );
}
