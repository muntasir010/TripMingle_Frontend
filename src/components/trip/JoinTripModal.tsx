/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import axiosInstance from "@/utils/axiosInstance";
import toast from "react-hot-toast";

type Props = {
  open: boolean;
  onClose: () => void;
  travelPlanId: number;
};

export default function JoinTripModal({ open, onClose, travelPlanId }: Props) {
  if (!open) return null;

  const handleJoin = async () => {
  try {
    await axiosInstance.post(
      `/travel-request/${travelPlanId}/join`
    );
    toast.success("Join request sent");
    onClose();
  } catch (err: any) {
    toast.error(err.response?.data?.message || "Failed");
  }
};


  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-3">Confirm Join</h2>
        <p className="text-gray-600 mb-6">
          Do you want to join this trip?
        </p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border"
          >
            Cancel
          </button>
          <button
            onClick={handleJoin}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg"
          >
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
}
