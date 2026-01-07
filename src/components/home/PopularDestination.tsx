"use client";

import { MapPin, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const destinations = [
  {
    id: 1,
    name: "Sajek Valley",
    location: "Rangamati, Bangladesh",
    image: "https://images.unsplash.com/photo-1623492701902-47dc207df5dc?q=80&w=2070",
    buddies: "12+ Buddies",
    category: "Mountain",
  },
  {
    id: 2,
    name: "Bali",
    location: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2070",
    buddies: "25+ Buddies",
    category: "Beach",
  },
  {
    id: 3,
    name: "Santorini",
    location: "Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2070",
    buddies: "8+ Buddies",
    category: "Island",
  },
  {
    id: 4,
    name: "Cox's Bazar",
    location: "Chittagong, Bangladesh",
    image: "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?q=80&w=2070",
    buddies: "40+ Buddies",
    category: "Beach",
  },
];

export default function PopularDestinations() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Destinations
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Explore the most trending places where other travelers are planning their next meetups. Join them and make new friends!
            </p>
          </div>
          <button className="flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all">
            Explore All <ArrowRight size={20} />
          </button>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-blue-600 uppercase">
                    {dest.category}
                  </span>
                </div>
                {/* Floating Buddy Count */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/20 backdrop-blur-md rounded-2xl p-3 text-white flex items-center gap-2">
                  <Users size={16} className="text-blue-400" />
                  <span className="text-xs font-medium">{dest.buddies} are looking for buddies</span>
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                <div className="flex items-start gap-2 mb-2">
                  <MapPin size={18} className="text-blue-500 shrink-0 mt-1" />
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {dest.name}
                  </h3>
                </div>
                <p className="text-gray-500 text-sm pl-7">{dest.location}</p>
                
                <div className="mt-6 pt-6 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-sm font-semibold text-gray-400">View Details</span>
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}