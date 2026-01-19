/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import axiosInstance from "@/utils/axiosInstance";
import toast from "react-hot-toast";

type Props = {
  open: boolean;
  onClose: () => void;
  travelPlanId: number;
};

export default function JoinTripModal({ open, onClose, travelPlanId }: Props) {
  const [loading, setLoading] = useState(false);
  const [joined, setJoined] = useState(false);
  const [seats, setSeats] = useState(1);
  
  if (!open) return null;

  // 1️⃣ JOIN REQUEST
  const handleJoin = async () => {
    try {
      setLoading(true);
      await axiosInstance.post(`/travel-request/${travelPlanId}/join`);
      toast.success("Join request sent");
      setJoined(true); // 👉 payment button show
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Failed");
    } finally {
      setLoading(false);
    }
  };

  // 2️⃣ PAYMENT + CONFIRM
  const handlePayment = async () => {
    try {
      setLoading(true);

      const payRes = await axiosInstance.post(
        `/payments/travel-plans/${travelPlanId}/pay`,
        { seats },
      );

      await axiosInstance.post(
        `/payments/${payRes.data.data.paymentId}/confirm`,
      );

      toast.success("Payment successful! Seats booked.");
      onClose();
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Payment failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-3">Join Trip</h2>

        {!joined ? (
          <>
            <p className="text-gray-600 mb-6">
              Do you want to send a join request for this trip?
            </p>

            <div className="flex justify-end gap-3">
              <button onClick={onClose} className="px-4 py-2 rounded-lg border">
                Cancel
              </button>
              <button
                onClick={handleJoin}
                disabled={loading}
                className="px-5 py-2 bg-blue-600 text-white rounded-lg"
              >
                {loading ? "Processing..." : "Join Now"}
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="text-gray-600 mb-6">
              Join request sent. Complete payment to confirm your seat.
            </p>

            <div className="flex justify-end gap-3">
              <button onClick={onClose} className="px-4 py-2 rounded-lg border">
                Cancel
              </button>
              <button
                onClick={handlePayment}
                disabled={loading}
                className="px-5 py-2 bg-green-600 text-white rounded-lg"
              >
                {loading ? "Paying..." : "Pay & Confirm"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
