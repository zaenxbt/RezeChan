export default function Header(){
return (
<header className="w-full px-8 py-6 flex items-center justify-between">
<div className="text-white text-2xl font-bold">Reze-Chan</div>
<nav className="hidden md:flex gap-8 text-white/90">
<a href="#" className="hover:underline">Home</a>
<a href="#features" className="hover:underline">Feature</a>
<a href="#community" className="hover:underline">Community</a>
</nav>
<div className="hidden md:block">
<button className="border border-white/40 px-4 py-2 rounded-md">Connect Wallet</button>
</div>
</header>
)
}
```
