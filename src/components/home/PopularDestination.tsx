/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { MapPin, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PopularDestinations() {
   const [plans, setPlans] = useState<any[]>([]);
   console.log(plans)

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/travel-plans")
      .then((res) => res.json())
      .then((data) => setPlans(data.data));
  }, []);
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
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src={`http://localhost:5000${plan.photoURL}`}
                  alt={plan.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-blue-600 uppercase">
                    {plan.travelType}
                  </span>
                </div>
                {/* Floating Buddy Count */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/20 backdrop-blur-md rounded-2xl p-3 text-white flex items-center gap-2">
                  <Users size={16} className="text-blue-400" />
                  <span className="text-xs font-medium">{plan.buddies} We are looking for buddies</span>
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                <div className="flex items-start gap-2 mb-2">
                  <MapPin size={18} className="text-blue-500 shrink-0 mt-1" />
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {plan.title}
                  </h3>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {plan.destination}
                  </h3>
                </div>
                <p className="text-gray-500 text-lg pl-7">৳: {plan.budget}</p>
                
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