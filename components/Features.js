export default function Features(){
const items = [
{ title: 'ZK Missions', desc: 'Proof-based missions using lightweight ZK technology.' },
{ title: 'Stealth Addresses', desc: 'One-time addresses for private incoming transfers.' },
{ title: 'Encrypted Drops', desc: 'XMTP & Lit-style gated encrypted content delivery.' },
]


return (
<section id="features" className="py-20">
<div className="max-w-6xl mx-auto px-8 text-center">
<h3 className="text-3xl font-bold">Core Features</h3>
<p className="mt-2 text-white/80">Privacy-first building blocks to power Reze-Chan.</p>


<div className="mt-10 grid md:grid-cols-3 gap-6">
{items.map((it, idx) => (
<div key={idx} className="p-6 bg-white/5 rounded-xl">
<h4 className="font-semibold text-xl">{it.title}</h4>
<p className="mt-2 text-white/80 text-sm">{it.desc}</p>
</div>
))}
</div>
</div>
</section>
)
}
```
