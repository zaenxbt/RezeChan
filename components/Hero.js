import Image from 'next/image'


export default function Hero(){
return (
<section className="min-h-[72vh] flex items-center">
<div className="max-w-7xl mx-auto w-full px-8 grid lg:grid-cols-2 items-center gap-8">
<div className="text-left">
<h1 className="text-6xl font-extrabold text-white leading-tight">Reze-Chan</h1>
<h2 className="text-2xl text-white/90 mt-4">The Privacy Native Meme Revolution Powered by x402 Protocol</h2>


<p className="mt-6 text-lg text-white/80 max-w-xl">At Reze-chan, we're pioneering Privacy Native Memes. We ensure your memes remain a mystery until you choose to unveil their secrets. Join us in preserving the rare, irreversible nature of online content.</p>


<div className="mt-8 flex items-center gap-4">
<a className="bg-white text-blue-700 px-6 py-3 rounded-md font-semibold" href="#">Get Started</a>
<a className="border border-white/40 px-6 py-3 rounded-md hover:bg-white/10" href="#community">Explore Community</a>
</div>
</div>


<div className="flex justify-end">
{/* Place the provided image in /public/reze-chan-hero.png */}
<div className="w-full max-w-lg">
<Image src="/reze-chan-hero.png" alt="Reze-Chan" width={900} height={900} className="object-contain" priority/>
</div>
</div>
</div>
</section>
)
}
```
