"use client";

import { motion } from "framer-motion";
import { Globe, Users, Map, ShieldCheck } from "lucide-react";

const stats = [
  { id: 1, label: "Total Travelers", value: "50,000+", icon: <Users size={32} />, color: "text-blue-600" },
  { id: 2, label: "Destinations Covered", value: "120+", icon: <Map size={32} />, color: "text-green-600" },
  { id: 3, label: "Countries Reached", value: "45+", icon: <Globe size={32} />, color: "text-purple-600" },
  { id: 4, label: "Verified Buddies", value: "15,000+", icon: <ShieldCheck size={32} />, color: "text-orange-600" },
];

export default function CommunityStats() {
  return (
    <section className="py-20 bg-blue-900 text-white overflow-hidden relative">
      {/* Background Decorative Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-800 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-700 rounded-full blur-3xl opacity-20 translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Side: Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
              Join the World&apos;s Largest <br className="hidden md:block" />
              Traveler Community
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              We connect explorers from all over the globe. Whether you&apos;re a solo backpacker or a group adventurer, your perfect travel partner is just a click away.
            </p>
            <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-lg">
              Explore More Stats
            </button>
          </div>

          {/* Right Side: Stats Grid */}
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/20 transition-all group"
                >
                  <div className={`${stat.color} mb-4 transform group-hover:scale-110 transition-transform`}>
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-black mb-1">{stat.value}</h3>
                  <p className="text-blue-100 font-medium text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}