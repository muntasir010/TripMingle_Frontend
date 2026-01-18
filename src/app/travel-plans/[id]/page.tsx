/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import JoinTripModal from "@/components/trip/JoinTripModal";
import { use, useEffect, useState } from "react";

export default function TravelPlanDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [openJoin, setOpenJoin] = useState(false);
  const planId = use(params).id;
  const [plan, setPlan] = useState<any>(null);
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/travel-plans/${id}`)
      .then((res) => res.json())
      .then((data) => setPlan(data.data));
  }, []);

  if (!plan) return null;

  return (
    <div className="max-w-5xl my-10 md:my-20 mx-auto p-6 border border-gray-100 rounded-xl shadow-2xl">
      <img
        src={`${process.env.NEXT_PUBLIC_API_URL}${plan.photoURL}`}
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

      <div className="flex justify-center">
        <button
          onClick={() => setOpenJoin(true)}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold"
        >
          Join This Trip
        </button>

        {/* JOIN MODAL */}
        <JoinTripModal
          open={openJoin}
          onClose={() => setOpenJoin(false)}
          travelPlanId={Number(planId)}
        />
      </div>
    </div>
  );
}
