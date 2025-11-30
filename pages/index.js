import { useEffect, useState } from "react";

export default function Home() {
  const [mints, setMints] = useState([]);
  const [loading, setLoading] = useState(true);

  const [nfts, setNfts] = useState([]);
  const [loadingNfts, setLoadingNfts] = useState(true);

  // =========================
  // FETCH MINT TRACKER
  // =========================
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

  // =========================
  // FETCH ZORA FEED VIA GRAPHQL
  // =========================
  async function fetchNFTs() {
    try {
      const query = `
        query WalletActivity($address: String!) {
          wallet(address: $address) {
            activities(limit: 40) {
              title
              description
              imageURL
              permalink
              token {
                imageURL
                name
              }
            }
          }
        }
      `;

      const res = await fetch("https://api.zora.co/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": "zora-public"
        },
        body: JSON.stringify({
          query,
          variables: {
            address: "0x4d9b44633fe12a25dcfdbfe4558805ff89a4da0b"
          }
        })
      });

      const json = await res.json();
      const items = json?.data?.wallet?.activities || [];

      setNfts(
        items
          .map((i) => ({
            image: i.imageURL || i?.token?.imageURL,
            title: i.title || i?.token?.name,
            permalink: i.permalink
          }))
          .filter((i) => i.image)
      );
    } catch (err) {
      console.error("NFT Feed Error:", err);
    }

    setLoadingNfts(false);
  }

  useEffect(() => {
    fetchMints();
    fetchNFTs();

    const intervalMints = setInterval(fetchMints, 15000);
    const intervalNFTs = setInterval(fetchNFTs, 20000);

    return () => {
      clearInterval(intervalMints);
      clearInterval(intervalNFTs);
    };
  }, []);

  return (
    <main className="min-h-screen bg-blue-950 text-white">

      {/* ======================= */}
      {/* CA TOP RIGHT */}
      {/* ======================= */}
      <div className="ca-box fixed top-5 right-5 px-4 py-2 bg-blue-800/40 rounded-lg border border-blue-400/40 backdrop-blur-md shadow-lg shadow-blue-500/20">
        CA: 0xa1dc9aaeb9a3e2202053099e55984054b6cb15d0
      </div>

      {/* ======================= */}
      {/* HERO V2 */}
      {/* ======================= */}
      <section className="relative w-full h-[92vh] flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-700/40 via-blue-900/60 to-blue-950"></div>

        <img
          src="/reze-hero.png"
          alt="Reze-Chan Hero"
          className="relative z-10 w-full max-w-[400px] mb-4 drop-shadow-[0_0_25px_rgba(30,144,255,0.5)]"
        />

        <h1 className="relative z-10 text-6xl font-extrabold mb-4 drop-shadow-[0_0_10px_rgba(0,150,255,1)]">
          Reze-Chan V2
        </h1>

        <p className="relative z-10 text-xl opacity-90 max-w-xl mx-auto">
          The Privacy-Native Meme Revolution on x402.
        </p>

        <p className="relative z-10 opacity-70 max-w-xl mx-auto mt-4 mb-10">
          Built on encrypted rails. Anime-powered. On-chain unstoppable.
        </p>

        <div className="relative z-10 flex flex-col items-center gap-4">
          <a
            href="https://x.com/RezeChan_base"
            target="_blank"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 transition rounded-xl text-lg font-semibold shadow-lg shadow-blue-400/30"
          >
            Join Community
          </a>

          <a
            href="https://zora.co/rezechanx402"
            target="_blank"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 transition rounded-xl text-lg font-semibold shadow-lg shadow-blue-400/30"
          >
            Mint on Zora
          </a>
        </div>
      </section>

      {/* ======================= */}
      {/* ABOUT V2 */}
      {/* ======================= */}
      <section className="px-6 py-20 border-t border-blue-400/20 bg-blue-900/30">
        <h2 className="text-4xl font-bold text-center mb-10 drop-shadow-[0_0_10px_rgba(50,150,255,0.8)]">
          Powered by x402 Protocol
        </h2>

        <div className="max-w-3xl mx-auto text-center opacity-80 text-lg leading-relaxed">
          <p>
            x402 is the next-generation privacy execution layer enabling encrypted transactions & zk-powered primitives.
          </p>
          <p className="mt-4">
            Reze-Chan V2 becomes the first meme ecosystem built natively on these encrypted rails.
          </p>
        </div>
      </section>

      {/* ======================= */}
      {/* MINT TRACKER V2 */}
      {/* ======================= */}
      <section className="px-6 py-24 bg-blue-900/20 border-y border-blue-400/20">
        <h2 className="text-4xl font-bold text-center mb-12">Live Mint Tracker</h2>

        {loading ? (
          <p className="text-center opacity-60 text-lg">Loading...</p>
        ) : mints.length === 0 ? (
          <p className="text-center opacity-60 text-lg">No mints yet.</p>
        ) : (
          <div className="max-w-2xl mx-auto space-y-4">
            {mints.map((mint, i) => (
              <div
                key={i}
                className="bg-blue-800/40 p-5 rounded-xl border border-blue-300/20 flex justify-between"
              >
                <div>
                  <p className="font-semibold">{mint.owner}</p>
                  <p className="text-sm opacity-60">
                    {new Date(mint.timestamp).toLocaleString()}
                  </p>
                </div>
                <span className="text-green-400 font-bold">Minted ✔</span>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ======================= */}
      {/* NFT GALLERY V2 */}
      {/* ======================= */}
      <section className="px-6 py-24 border-t border-blue-400/20">
        <h2 className="text-4xl font-bold text-center mb-10">NFT Gallery</h2>

        {loadingNfts ? (
          <p className="text-center opacity-60 text-lg">Loading gallery...</p>
        ) : nfts.length === 0 ? (
          <p className="text-center opacity-60 text-lg">No Zora posts yet!</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {nfts.map((item, i) => (
              <a key={i} href={item.permalink} target="_blank">
                <div className="bg-blue-800/40 p-4 rounded-xl border border-blue-300/20 hover:bg-blue-700/40 transition">
                  <img
                    src={item.image}
                    className="w-full rounded-lg mb-4 shadow-md shadow-blue-500/20"
                    alt="NFT"
                  />
                  <p className="font-semibold">{item.title}</p>
                </div>
              </a>
            ))}
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-10 text-center opacity-60 text-sm">
        Reze-Chan V2 © {new Date().getFullYear()} — Powered by x402 Protocol
      </footer>
    </main>
  );
}
