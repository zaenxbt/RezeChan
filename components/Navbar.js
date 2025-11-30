import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  const isActive = (path) =>
    router.pathname === path ? "text-blue-400 font-bold" : "text-white";

  return (
    <nav className="w-full flex justify-between px-10 py-6 bg-black border-b border-gray-800">
      <div className="text-white text-2xl font-bold">BASE PROJECT</div>

      <div className="flex gap-8 text-lg">
        <Link href="/" className={isActive("/")}>Home</Link>
        <Link href="/features" className={isActive("/features")}>Features</Link>
        <Link href="/community" className={isActive("/community")}>Community</Link>
        <Link href="/tokenomics" className={isActive("/tokenomics")}>Tokenomics</Link>
        <Link href="/roadmap" className={isActive("/roadmap")}>Roadmap</Link>
      </div>

      <Link
        href="/features"
        className="bg-blue-500 px-5 py-2 rounded-lg text-white font-semibold hover:bg-blue-600"
      >
        Get Started
      </Link>
    </nav>
  );
}
