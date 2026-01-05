"use client";

import { useState, useEffect } from "react";
import { Search, MapPin, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-150 md:h-162.5 w-full flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${images[currentImage]}')` }}
          >
            <div className="absolute inset-0 bg-black/50 md:bg-black/40" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Heading - Responsive Font Sizes */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 leading-tight">
            Find Your Perfect <br className="hidden sm:block" />
            <span className="text-blue-400">Travel Buddy</span>
          </h1>
          
          {/* Subtext - Responsive Width and Font */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-12 text-gray-200 max-w-xs sm:max-w-md md:max-w-2xl mx-auto leading-relaxed">
            Transform your solo journeys into shared adventures. Connect with like-minded travelers worldwide.
          </p>

          {/* Fully Responsive Search Bar */}
          <div className="bg-white p-2 sm:p-3 md:p-4 rounded-2xl sm:rounded-3xl md:rounded-full shadow-2xl max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2 md:gap-0">
              
              {/* Destination Field */}
              <div className="flex items-center gap-3 px-4 py-3 md:py-0 w-full md:border-r border-gray-100 text-gray-800">
                <MapPin className="text-blue-500 shrink-0" size={20} />
                <input 
                  type="text" 
                  placeholder="Where to go?" 
                  className="w-full bg-transparent focus:outline-none placeholder:text-gray-500 text-sm md:text-base"
                />
              </div>

              {/* Date Field */}
              <div className="flex items-center gap-3 px-4 py-3 md:py-0 w-full md:border-r border-gray-100 text-gray-800">
                <Calendar className="text-blue-500 shrink-0" size={20} />
                <input 
                  type="text" 
                  placeholder="When?" 
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                  className="w-full bg-transparent focus:outline-none placeholder:text-gray-500 text-sm md:text-base"
                />
              </div>

              {/* Search Button */}
              <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 lg:px-12 py-3 md:py-4 rounded-xl sm:rounded-2xl md:rounded-full font-bold flex items-center justify-center gap-2 transition-all duration-300">
                <Search size={20} className="shrink-0" />
                <span className="md:hidden lg:inline">Find Buddies</span>
                <span className="hidden md:inline lg:hidden">Search</span>
              </button>
            </div>
          </div>

          {/* Trust Badges / Stats - Hidden on Small Mobile for Cleanliness */}
          <div className="mt-10 hidden sm:flex justify-center items-center gap-6 text-sm text-gray-300">
            <div className="flex -space-x-2">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-400 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                </div>
              ))}
            </div>
            <p className="font-medium">10k+ Travelers matched this month</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}