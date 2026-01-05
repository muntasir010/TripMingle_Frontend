"use client";

import { UserPlus, MapPinned, Users2, PlaneTakeoff } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Create Account",
    description: "Sign up and complete your profile to let others know about your travel interests.",
    icon: <UserPlus size={32} />,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Post Travel Plan",
    description: "Share your destination, dates, and budget to find like-minded companions.",
    icon: <MapPinned size={32} />,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 3,
    title: "Find Your Buddy",
    description: "Browse through travelers heading to the same place and send a join request.",
    icon: <Users2 size={32} />,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 4,
    title: "Start Adventure",
    description: "Connect, plan the details together, and start your memorable journey.",
    icon: <PlaneTakeoff size={32} />,
    color: "bg-orange-100 text-orange-600",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600">
            Getting started with TripMingle is easy. Just follow these four simple steps to find your next travel companion.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connector Line (Hidden on Mobile) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                {/* Icon Circle */}
                <div className={`w-20 h-20 rounded-3xl ${step.color} flex items-center justify-center mb-6 shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300`}>
                  {step.icon}
                </div>

                {/* Step Number */}
                <div className="bg-gray-900 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-md">
                  {step.id}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed px-4">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}