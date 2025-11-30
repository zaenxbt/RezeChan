import { useEffect, useState } from "react";

export default function ZoraFeed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const WALLET = "0x4d9b44633fe12a25dcfdbfe4558805ff89a4da0b";

  useEffect(() => {
    async function fetchFeed() {
      try {
        const query = `
          query WalletActivity($address: String!) {
            wallet(address: $address) {
              activities(limit: 50) {
                type
                timestamp
                permalink
                title
                description
                imageURL
                token {
                  tokenId
                  name
                  description
                  imageURL
                  contract
                }
              }
            }
          }
        `;

        const res = await fetch("https://api.zora.co/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // **Wajib** karena Zora butuh header utk GraphQL modern API
            "X-API-KEY": "zora-public", 
          },
          body: JSON.stringify({
            query,
            variables: { address: WALLET },
          }),
        });

        const json = await res.json();
        const items = json?.data?.wallet?.activities || [];

        const formatted = items.map((i, index) => ({
          id: index,
          type: i.type,
          title: i.title || i?.token?.name || "Untitled",
          description: i.description || i?.token?.description || null,
          image:
            i.imageURL ||
            i?.token?.imageURL ||
            null,
          permalink: i.permalink,
          timestamp: i.timestamp,
        }));

        setPosts(formatted);
      } catch (e) {
        console.error("GraphQL feed error:", e);
      }
      setLoading(false);
    }

    fetchFeed();
  }, []);

  if (loading)
    return (
      <div className="text-center py-20 opacity-60">
        Loading Zora feed...
      </div>
    );

  return (
    <section className="px-6 py-24">
      <h2 className="text-4xl font-bold text-center mb-14">Zora Feed</h2>

      {posts.length === 0 ? (
        <p className="text-center opacity-60">No activity found...</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white/5 p-5 rounded-xl border border-white/10"
            >
              {post.image && (
                <img
                  src={post.image}
                  alt="Zora Activity"
                  className="rounded-lg mb-4 w-full object-cover"
                />
              )}

              <h3 className="font-semibold mb-2">{post.title}</h3>

              {post.description && (
                <p className="opacity-70 text-sm mb-4">{post.description}</p>
              )}

              {post.permalink && (
                <a
                  href={post.permalink}
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

