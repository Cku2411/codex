import Header from "@/components/header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-game flex flex-col items-center">
      {/* Header / Navbar */}
      <Header />
      {/* Hero section */}
      <Hero />
    </div>
  );
}
