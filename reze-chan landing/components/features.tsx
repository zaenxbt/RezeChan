import { motion } from "framer-motion";
const items = [
{
title: "ZK-Powered Identity",
desc: "Private by default. Your wallet and activity remain protected through the x402 protocol.",
},
{
title: "Encrypted Messaging",
desc: "Built-in secure chat that keeps every conversation private and resistant to tracing.",
},
{
title: "Meme-Ready & Community First",
desc: "A character-driven movement created for culture, anonymity, and pure degen rebellion.",
},
];


return (
<section id="features" className="w-full py-24 px-8 max-w-5xl mx-auto">
<h2 className="text-4xl font-bold text-center mb-16">Core Features</h2>


<div className="grid md:grid-cols-3 gap-12">
{items.map((f, i) => (
<motion.div
key={i}
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.4, delay: i * 0.1 }}
viewport={{ once: true }}
className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-lg"
>
<h3 className="text-2xl font-semibold mb-4">{f.title}</h3>
<p className="opacity-80">{f.desc}</p>
</motion.div>
))}
</div>
</section>
);
}
```
