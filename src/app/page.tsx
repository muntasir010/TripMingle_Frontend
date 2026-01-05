"use client";
import Hero from "./components/home/Hero";
import HowItWorks from "./components/home/HowItWorks";
import PopularDestinations from "./components/home/PopularDestination";
import RecommendedMatches from "./components/home/RecommendedMatches";

export default function Home() {
  return (
    <div className="p-10">
      <Hero/>
      <PopularDestinations/>
      <HowItWorks/>
      <RecommendedMatches/>
    </div>
  );
}
