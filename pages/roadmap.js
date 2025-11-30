import Navbar from "../components/Navbar";

export default function Roadmap() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="mt-20 px-10">
        <h1 className="text-4xl font-bold">Roadmap</h1>

        <div className="mt-6 text-gray-300 space-y-4">
          <p>Q1 — Launch Website</p>
          <p>Q2 — Community Expansion</p>
          <p>Q3 — Token Launch + Utility</p>
          <p>Q4 — Full Ecosystem Deployment</p>
        </div>
      </div>
    </div>
  );
}
