import Image from "next/image";
import { motion } from "framer-motion";


export default function Hero() {
return (
<section className="w-full flex flex-col items-center text-center mt-10 px-6">
<motion.h1
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
className="text-5xl md:text-7xl font-bold max-w-3xl leading-tight"
>
The Privacy Native Meme Revolution
</motion.h1>


<p className="mt-6 text-lg max-w-2xl opacity-80">
Reze-Chan is powered by the x402 Protocol — bringing the next era of
Zero-Knowledge, on-chain privacy, and unstoppable meme energy.
</p>


<div className="mt-10">
<Image
src="/reze-chan-hero.png"
alt="Reze Chan Hero"
width={800}
height={800}
className="rounded-2xl shadow-lg"
/>
</div>


<button className="mt-10 px-10 py-4 bg-pink-500 hover:bg-pink-600 rounded-full text-xl font-semibold shadow-lg">
Join the Revolution
</button>
</section>
);
}
```
