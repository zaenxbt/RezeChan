import ZoraFeed from "../components/ZoraFeed";

import { useEffect, useState } from "react";

export default function Home() {
  const [mints, setMints] = useState([]);
  const [loading, setLoading] = useState(true);

  const [nfts, setNfts] = useState([]);
  const [loadingNfts, setLoadingNfts] = useState(true);

  async function fetchMints() {
    try {
      const res = await fetch(
        `https://api.zora.co/discovery/mints?contractAddress=0xa1dc9aaeb9a3e2202053099e55984054b6cb15d0`
      );
      const data = await res.json();
      setMints(data?.mints || []);
    } catch (err) {
      console.error("Mint Tracker Error:", err);
    }
    setLoading(false);
  }

  async function fetchNFTs() {
    try {
      const res = await fetch(
        `https://api.zora.co/discovery/feed?address=0x4d9b44633fe12a25dcfdbfe4558805ff89a4da0b`
      );
      const data = await res.json();
      setNfts(data?.feed || []);
    } catch (err) {
      console.error("NFT Gallery Error:", err);
    }
    setLoadingNfts(false);
  }

  useEffect(() => {
    fetchMints();
    fetchNFTs();

    const interval = setInterval(fetchMints, 15000);
    const intervalNFTs = setInterval(fetchNFTs, 30000);

    return () => {
      clearInterval(interval);
      clearInterval(intervalNFTs);
    };
  }, []);

  return (
    <main className="bg-black text-white min-h-screen">

      {/* CA TOP RIGHT */}
      <div className="ca-box">
        CA: 0xa1dc9aaeb9a3e2202053099e55984054b6cb15d0
      </div>

      {/* HERO */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        <img
          src="/reze-hero.png"
          alt="Reze-Chan Hero"
          width={600}
          height={600}
          className="w-full max-w-[380px] object-contain"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-6xl font-extrabold mb-6">Reze-Chan</h1>

          <p className="text-xl opacity-80 mb-6">
            The Privacy Native Meme Revolution Powered by x402 Protocol.
          </p>

          <p className="opacity-70 max-w-xl mx-auto mb-10">
            A new wave of privacy-native meme culture — encrypted, unstoppable,
            built directly on the rails of x402 technology.
          </p>

          <div className="flex flex-col items-center gap-4">
            <a
              href="https://x.com/RezeChan_base"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 transition rounded-xl text-lg font-semibold shadow-lg shadow-blue-500/30"
            >
              Join Community
            </a>

            <a
              href="https://zora.co/rezechanx402"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 transition rounded-xl text-lg font-semibold shadow-lg shadow-blue-500/30"
            >
              Mint on Zora
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT x402 */}
      <section className="px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold text-center mb-10">Powered by x402</h2>

        <div className="max-w-3xl mx-auto text-center opacity-70 text-lg leading-relaxed">
          <p>
            x402 is the next generation privacy execution layer enabling 
            encrypted transactions, encrypted mempools, and zero-knowledge interaction primitives.
          </p>
          <p className="mt-4">
            Reze-Chan uses this to build the first meme ecosystem born directly
            from privacy-native rails — instead of adding privacy later.
          </p>
        </div>
      </section>

      {/* WHY PRIVACY MATTERS */}
      <section className="px-6 py-24 bg-gray-900/40 border-y border-white/10">
        <h2 className="text-4xl font-bold text-center mb-14">Why Privacy Matters</h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto text-center">
          <div className="p-6 bg-white/5 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">No Surveillance</h3>
            <p className="opacity-70">Your meme moves stay hidden.</p>
          </div>

          <div className="p-6 bg-white/5 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">ZK-Powered Freedom</h3>
            <p className="opacity-70">Zero-knowledge rails without revealing identity.</p>
          </div>

          <div className="p-6 bg-white/5 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">Degen-First</h3>
            <p className="opacity-70">Privacy is the foundation.</p>
          </div>
        </div>
      </section>

      {/* TOKENOMICS */}
      <section className="px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-14">Tokenomics</h2>

        <div className="max-w-xl mx-auto space-y-6 text-lg">
          <div className="bg-white/5 p-6 rounded-xl flex justify-between">
            <span>Total Supply</span><span className="font-semibold">100%</span>
          </div>

          <div className="bg-white/5 p-6 rounded-xl flex justify-between">
            <span>Locked (5 Years)</span><span className="font-semibold">50%</span>
          </div>

          <div className="bg-white/5 p-6 rounded-xl flex justify-between">
            <span>Liquidity + Ecosystem</span><span className="font-semibold">50%</span>
          </div>

          <div className="bg-white/5 p-6 rounded-xl flex justify-between">
            <span>Community + Rewards</span><span className="font-semibold">Airdrop</span>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="px-6 py-24 bg-gray-900/40 border-y border-white/10">
        <h2 className="text-4xl font-bold text-center mb-14">Roadmap</h2>

        <div className="max-w-2xl mx-auto space-y-10 text-lg">
          <div className="bg-white/5 p-6 rounded-xl">
            <h3 className="font-semibold text-xl mb-2">Phase 1 — Birth</h3>
            <p className="opacity-70">Launch + listing + community.</p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl">
            <h3 className="font-semibold text-xl mb-2">Phase 2 — Integration</h3>
            <p className="opacity-70">Encrypted swaps + zk utilities.</p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl">
            <h3 className="font-semibold text-xl mb-2">Phase 3 — Ecosystem</h3>
            <p className="opacity-70">Full privacy meme hub.</p>
          </div>
        </div>
      </section>

      {/* LIVE MINT TRACKER */}
      <section className="px-6 py-24 border-t border-white/10 bg-black/40">
        <h2 className="text-4xl font-bold text-center mb-10">Live Mint Tracker</h2>

        {loading ? (
          <p className="text-center opacity-60 text-lg">Loading latest mints...</p>
        ) : mints.length === 0 ? (
          <p className="text-center opacity-60 text-lg">No mints yet — be the first!</p>
        ) : (
          <div className="max-w-2xl mx-auto space-y-4">
            {mints.map((mint, i) => (
              <div key={i} className="bg-white/5 p-4 rounded-xl flex justify-between items-center">
                <div>
                  <p className="font-semibold">{mint?.owner || "Unknown"}</p>
                  <p className="opacity-60 text-sm">
                    {new Date(mint?.timestamp).toLocaleString()}
                  </p>
                </div>

                <span className="text-green-400 font-bold">Minted ✔</span>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* NFT GALLERY */}
      <section className="px-6 py-24 border-t border-white/10">
        <h2 className="text-4xl font-bold text-center mb-10">NFT Gallery</h2>

        {loadingNfts ? (
          <p className="text-center opacity-60 text-lg">Loading gallery...</p>
        ) : nfts.length === 0 ? (
          <p className="text-center opacity-60 text-lg">
            No posts yet — upload your first mint on Zora!
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {nfts.map((item, i) => (
              <div key={i} className="bg-white/5 p-4 rounded-xl">
                <img
                  src={item?.thumbnail || item?.image || "/placeholder.png"}
                  className="w-full rounded-lg mb-4"
                  alt="NFT"
                />
                <p className="font-semibold">{item?.title || "Untitled"}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-10 text-center opacity-60 text-sm">
        Reze-Chan © {new Date().getFullYear()} — Powered by x402 Protocol
      </footer>
    </main>
  );
}
