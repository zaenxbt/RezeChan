export default function Header() {
return (
<header className="w-full py-6 px-8 flex justify-between items-center">
<div className="text-2xl font-bold tracking-tight">Reze-Chan</div>
<nav className="hidden md:flex gap-8 text-lg">
<a href="#features" className="hover:text-pink-400">Features</a>
<a href="#docs" className="hover:text-pink-400">Docs</a>
<a href="#buy" className="hover:text-pink-400">Buy Token</a>
</nav>
</header>
);
}
```
