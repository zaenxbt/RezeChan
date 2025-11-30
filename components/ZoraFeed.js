import { useEffect, useState } from "react";

export default function ZoraFeed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const WALLET = "0x4d9b44633fe12a25dcfdbfe4558805ff89a4da0b";

  useEffect(() => {
    async function fetchFeed() {
      try {
        const res = await fetch(`https://api.zora.co/feed/${WALLET}`);
        const data = await res.json();

        // Format
        const formatted = data.feed.map((item) => ({
          id: item.id,
          type: item.type,
          image:
            item?.image?.uri ||
            item?.content?.media?.[0]?.uri ||
            null,
          title: item?.title || "No Title",
          description: item?.description || null,
          zoraUrl: item?.permalink || null,
          timestamp: item?.timestamp
        }));

        setPosts(formatted);
      } catch (e) {
        console.error("Zora feed error:", e);
      }
      setLoading(false);
    }

    fetchFeed();
  }, []);

  if (loading)
    return <div className="text-center py-20 opacity-60">Loading Zora feed...</div>;

  return (
    <section className="px-6 py-24">
      <h2 className="text-4xl font-bold text-center mb-14">Zora Feed</h2>

      {posts.length === 0 ? (
        <p className="text-center opacity-60">No posts found...</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {posts.map((post) => (
            <div key={post.id} className="bg-white/5 p-5 rounded-xl">
              
              {post.image && (
                <img
                  src={post.image}
                  alt="Zora Item"
                  className="rounded-lg mb-4 w-full object-cover"
                />
              )}

              <h3 className="font-semibold mb-1">{post.title}</h3>

              {post.description && (
                <p className="opacity-70 text-sm mb-3">{post.description}</p>
              )}

              {post.zoraUrl && (
                <a
                  href={post.zoraUrl}
                  target="_blank"
                  className="inline-block px-4 py-2 bg-blue-600 rounded-lg text-sm"
                >
                  View on Zora
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
