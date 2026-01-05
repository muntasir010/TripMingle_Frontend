"use client";

import { motion } from "framer-motion";
import { Star, MapPin, CheckCircle2 } from "lucide-react";

const matches = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Adventure Seeker",
    location: "London, UK",
    interests: ["Hiking", "Photography"],
    rating: 4.9,
    image: "https://i.pravatar.cc/150?u=alex",
    isVerified: true,
  },
  {
    id: 2,
    name: "Sarah Miller",
    role: "Food Explorer",
    location: "Paris, France",
    interests: ["Cooking", "History"],
    rating: 4.8,
    image: "https://i.pravatar.cc/150?u=sarah",
    isVerified: true,
  },
  {
    id: 3,
    name: "Tanvir Ahmed",
    role: "Mountain Lover",
    location: "Dhaka, BD",
    interests: ["Trekking", "Camping"],
    rating: 5.0,
    image: "https://i.pravatar.cc/150?u=tanvir",
    isVerified: false,
  },
];

export default function RecommendedMatches() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recommended Matches
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Based on your interests and recent searches, we found these perfect travel buddies for you.
          </p>
        </div>

        {/* Matches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {matches.map((user, index) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden"
            >
              {/* Profile Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <img 
                    src={user.image} 
                    alt={user.name} 
                    className="w-16 h-16 rounded-2xl object-cover"
                  />
                  {user.isVerified && (
                    <div className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full p-1 border-2 border-white">
                      <CheckCircle2 size={12} />
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 flex items-center gap-2">
                    {user.name}
                  </h3>
                  <p className="text-sm text-gray-500">{user.role}</p>
                </div>
                <div className="ml-auto flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
                  <Star size={14} className="fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-bold text-yellow-700">{user.rating}</span>
                </div>
              </div>

              {/* Location & Interests */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <MapPin size={16} className="text-blue-500" />
                  {user.location}
                </div>
                <div className="flex flex-wrap gap-2">
                  {user.interests.map((interest) => (
                    <span 
                      key={interest} 
                      className="bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-md"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button className="mt-8 w-full py-3 bg-gray-900 hover:bg-blue-600 text-white rounded-xl font-bold transition-colors text-sm">
                View Profile & Connect
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}