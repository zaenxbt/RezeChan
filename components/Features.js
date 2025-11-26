export default function Features(){
const items = [
{ title: 'ZK Missions', desc: 'Proof-based missions using circom + snarkjs for private claims.' },
{ title: 'Stealth Addresses', desc: 'One-time addresses for private incoming transfers.' },
{ title: 'Encrypted Drops', desc: 'XMTP & Lit for gated, encrypted content delivery.' },
]


return (
<section id="features" className="py-20 px-6">
<div className="max-w-5xl mx-auto text-center">
<h2 className="text-3xl font-bold">Core Features</h2>
<p className="mt-3 opacity-80">Privacy-first building blocks to power Reze-Chan and the x402 narrative.</p>


<div className="mt-10 grid md:grid-cols-3 gap-6">
{items.map((it, idx)=> (
<div key={idx} className="p-6 bg-white/3 rounded-2xl border border-white/5">
<h3 className="font-semibold text-xl">{it.title}</h3>
<p className="mt-2 opacity-80 text-sm">{it.desc}</p>
</div>
))}
</div>
</div>
</section>
)
}
