import { useEffect, useState } from "react";

export default function ZoraFeed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Wallet Address
  const WALLET = "0x4d9b44633fe12a25dcfdbfe4558805ff89a4da0b";

  useEffect(() => {
    async function fetchFeed() {
      try {
        const res = await fetch(
         "https://api.zora.co/discovery/feed?ownerAddresses=0x4d9b44633fe12a25dcfdbfe4558805ff89a4da0b"
);
        const data = await res.json();

        const formatted = data?.feed?.map((item) => ({
          id: item.id,
          type: item.type,
          title: item.title || "Untitled",
          content: item.content?.text || null,
          image:
            item.content?.media?.[0]?.url ||
            item.content?.images?.[0]?.url ||
            null,
          timestamp: item.timestamp,
          zoraUrl: item.zoraUrl,
        }));

        setPosts(formatted || []);
      } catch (err) {
        console.error("Zora Feed error:", err);
      }
      setLoading(false);
    }

    fetchFeed();
  }, []);

  if (loading)
    return (
      <div className="text-center py-20 opacity-60">Loading Zora feed...</div>
    );

  return (
    <section className="px-6 py-24 bg-gray-900/40 border-y border-white/10">
      <h2 className="text-4xl font-bold text-center mb-14">Zora Feed</h2>

      {posts.length === 0 ? (
        <p className="text-center opacity-60">No posts found yet...</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white/5 p-5 rounded-xl shadow-lg border border-white/10"
            >
              {post.image && (
                <img
                  src={post.image}
                  alt="Zora Post"
                  className="rounded-lg mb-4 w-full object-cover"
                />
              )}

              <h3 className="font-semibold mb-2">{post.title}</h3>

              {post.content && (
                <p className="opacity-70 text-sm mb-3">{post.content}</p>
              )}

              <a
                href={post.zoraUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-semibold"
              >
                View on Zora
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
