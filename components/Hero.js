import Image from 'next/image'
export default function Hero(){
return (
<section className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
<div>
<motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-5xl font-extrabold leading-tight">Reze-Chan
<span className="text-rezeMint"> — Privacy Native Meme Revolution</span>
</motion.h1>
<p className="mt-6 text-lg opacity-80 max-w-lg">Born from the x402 Protocol. Reze-Chan brings private, ZK-powered memetics back to the wild. No KYC. No gatekeepers. Pure anonymous culture.</p>


<div className="mt-8 flex gap-4">
<a href="#" className="bg-white text-black px-6 py-3 rounded-full font-semibold shadow">Get Started</a>
<a href="#community" className="border border-white/30 px-6 py-3 rounded-full">Join Community</a>
</div>


<div className="mt-8 flex gap-6 text-sm opacity-80">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-md bg-white/5 flex items-center justify-center">🔥</div>
<div>
<div className="font-semibold">Stealth Drops</div>
<div className="text-xs">Encrypted airdrops & ZK missions</div>
</div>
</div>


<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-md bg-white/5 flex items-center justify-center">🔒</div>
<div>
<div className="font-semibold">Privacy-first</div>
<div className="text-xs">x402 native primitives</div>
</div>
</div>
</div>
</div>


<div className="flex justify-center lg:justify-end">
<div className="relative w-full max-w-md rounded-2xl shadow-2xl overflow-hidden">
<Image src={heroImg} alt="Reze-Chan" priority />
<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
</div>
</div>
</section>
)
}
