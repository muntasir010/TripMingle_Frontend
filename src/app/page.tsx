"use client";

import CommunityStats from "./components/home/CommunityStats";
import Hero from "./components/home/Hero";
import HowItWorks from "./components/home/HowItWorks";
import PopularDestinations from "./components/home/PopularDestination";
import RecommendedMatches from "./components/home/RecommendedMatches";
import Testimonials from "./components/home/Testimonials";

export default function Home() {
  return (
    <div className="p-3 md:p-6 lg:p-12">
      <Hero/>
      <PopularDestinations/>
      <HowItWorks/>
      <RecommendedMatches/>
      <Testimonials/>
      <CommunityStats/>
    </div>
  );
}
