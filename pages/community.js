import Navbar from "../components/Navbar";

export default function Community() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="mt-20 px-10">
        <h1 className="text-4xl font-bold">Community</h1>

        <p className="text-gray-300 mt-4 max-w-2xl">
          Join a vibrant ecosystem of builders and creators.
        </p>
      </div>
    </div>
  );
}
