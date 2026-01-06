"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Map, ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        {/* Animated Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <Map size={120} className="text-blue-100" />
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, -5, 0] 
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="text-7xl md:text-9xl font-black text-blue-600 drop-shadow-xl">
                404
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Oops! You&apos;re Lost in Adventure
          </h1>
          <p className="text-gray-600 mb-10 max-w-md mx-auto leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let&apos;s get you back on track!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-200"
            >
              <Home size={18} />
              Back to Home
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 text-gray-600 px-8 py-3 rounded-full font-bold transition-all"
            >
              <ArrowLeft size={18} />
              Go Back
            </button>
          </div>
        </motion.div>

        {/* Quick Help Tags */}
        <div className="mt-16">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            Try searching for
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Find Buddy", "Top Destinations", "Support", "Premium"].map((tag) => (
              <span key={tag} className="text-sm bg-white px-4 py-1.5 rounded-full border border-gray-100 text-gray-500 shadow-sm">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}