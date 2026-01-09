/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { use, useEffect, useState } from "react";

export default function TravelPlanDetails({ params }: { params: Promise<{ id: string }> }) {
  const [plan, setPlan] = useState<any>(null);
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/travel-plans/${id}`)
      .then((res) => res.json())
      .then((data) => setPlan(data.data));
  }, []);

  if (!plan) return null;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <img
        src={`http://localhost:5000${plan.photoURL}`}
        className="w-full h-[400px] object-cover rounded-2xl"
      />

      <h1 className="text-3xl font-bold mt-6">{plan.destination}</h1>

      <div className="grid grid-cols-2 gap-6 mt-6">
        <div>Budget: ৳ {plan.budget}</div>
        <div>Capacity: {plan.capacity}</div>
        <div>Travel Type: {plan.travelType}</div>
        <div>
          Date: {new Date(plan.startDate).toDateString()} -{" "}
          {new Date(plan.endDate).toDateString()}
        </div>
      </div>
       <p className="text-gray-600 mt-2">Description: {plan.description}</p>
    </div>
  );
}
