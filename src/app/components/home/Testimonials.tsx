"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Emily Watson",
    location: "United States",
    image: "https://i.pravatar.cc/150?u=emily",
    text: "Found an amazing trekking partner for my Nepal trip! This platform made it so easy to connect with someone who shares the same pace and interests.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rahat Chowdhury",
    location: "Sylhet, BD",
    image: "https://i.pravatar.cc/150?u=rahat",
    text: "I was hesitant about solo traveling to Sajek. Through TripMingle, I met three other travelers and we had the best time of our lives together!",
    rating: 5,
  },
  {
    id: 3,
    name: "Sophia Muller",
    location: "Germany",
    image: "https://i.pravatar.cc/150?u=sophia",
    text: "The verification system gives me peace of mind. I've met a verified buddy for my Europe tour and everything was perfectly planned and safe.",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block p-3 bg-blue-50 rounded-2xl text-blue-600 mb-4"
          >
            <Quote size={32} fill="currentColor" className="opacity-20" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Traveler Success Stories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how our community members are finding their perfect companions and creating unforgettable memories together.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:bg-blue-600 group transition-all duration-500"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`${
                      i < review.rating 
                        ? "fill-yellow-400 text-yellow-400" 
                        : "text-gray-300"
                    } group-hover:text-white group-hover:fill-white transition-colors`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-lg italic mb-8 group-hover:text-white transition-colors">
                {review.text}
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full border-2 border-white group-hover:border-blue-400 transition-all"
                />
                <div>
                  <h4 className="font-bold text-gray-900 group-hover:text-white transition-colors">
                    {review.name}
                  </h4>
                  <p className="text-sm text-gray-500 group-hover:text-blue-100 transition-colors">
                    {review.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}