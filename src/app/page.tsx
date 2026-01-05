"use client";
import Hero from "./components/home/Hero";
import PopularDestinations from "./components/home/PopularDestination";

export default function Home() {
  return (
    <div className="p-10">
      <Hero/>
      <PopularDestinations/>
    </div>
  );
}
