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

      // NORMALISASI DATA
      setNfts(
        items
          .map((i) => ({
            image: i.imageURL || i?.token?.imageURL,
            title: i.title || i?.token?.name,
            permalink: i.permalink
          }))
          .filter((i) => i.image) // buang yang ga ada gambar
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

      {/* ABOUT */}
      <section className="px-6 py-20 border-t border-white/10">
        <h2 className="text-4xl font-bold text-center mb-10">Powered by x402</h2>

        <div className="max-w-3xl mx-auto text-center opacity-70 text-lg leading-relaxed">
          <p>
            x402 is the next generation privacy execution layer enabling  
            encrypted transactions and zk primitives.
          </p>
          <p className="mt-4">
            Reze-Chan is the first meme ecosystem built natively on privacy rails.
          </p>
        </div>
      </section>

      {/* MINT TRACKER */}
      <section className="px-6 py-24 bg-black/40 border-t border-white/10">
        <h2 className="text-4xl font-bold text-center mb-10">Live Mint Tracker</h2>

        {loading ? (
          <p className="text-center opacity-60 text-lg">Loading...</p>
        ) : mints.length === 0 ? (
          <p className="text-center opacity-60 text-lg">No mints yet.</p>
        ) : (
          <div className="max-w-2xl mx-auto space-y-4">
            {mints.map((mint, i) => (
              <div key={i} className="bg-white/5 p-4 rounded-xl flex justify-between">
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

      {/* NFT GALLERY */}
      <section className="px-6 py-24 border-t border-white/10">
        <h2 className="text-4xl font-bold text-center mb-10">NFT Gallery</h2>

        {loadingNfts ? (
          <p className="text-center opacity-60 text-lg">Loading gallery...</p>
        ) : nfts.length === 0 ? (
          <p className="text-center opacity-60 text-lg">No posts yet on Zora!</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {nfts.map((item, i) => (
              <a key={i} href={item.permalink} target="_blank">
                <div className="bg-white/5 p-4 rounded-xl cursor-pointer hover:bg-white/10 transition">
                  <img
                    src={item.image}
                    className="w-full rounded-lg mb-4"
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
        Reze-Chan © {new Date().getFullYear()} — Powered by x402 Protocol
      </footer>
    </main>
  );
}
