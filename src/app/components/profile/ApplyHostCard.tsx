/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from 'react';
import axiosInstance from '@/utils/axiosInstance';
import { toast } from 'react-hot-toast';

const HostApplicationCard = ({ user }: { user: any }) => {
  const [loading, setLoading] = useState(false);

  const handleApply = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.post('/host/apply');
      if (res.data.success) {
        toast.success("Application submitted successfully! Please wait for admin approval.");
        window.location.reload(); // Refresh to update status
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Logic to hide/show based on user status
  if (user?.role === "HOST") {
    return (
      <div className="p-5 border rounded-xl bg-green-50 border-green-200">
        <h4 className="text-green-800 font-bold">Host Status: Active</h4>
        <p className="text-green-700 text-sm">You are a verified host. You can now create travel plans.</p>
      </div>
    );
  }

  if (user?.hostApplication?.status === "PENDING") {
    return (
      <div className="p-5 border rounded-xl bg-yellow-50 border-yellow-200">
        <h4 className="text-yellow-800 font-bold">Application Pending</h4>
        <p className="text-yellow-700 text-sm">Admin is currently reviewing your request. We will notify you soon.</p>
      </div>
    );
  }

  return (
    <div className="p-6 border rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-lg font-bold text-gray-800 mb-2">Want to lead trips?</h3>
      <p className="text-gray-600 text-sm mb-4">
        Apply to become a host and share your travel experiences with others while earning.
      </p>
      <button 
        onClick={handleApply}
        disabled={loading}
        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition"
      >
        {loading ? "Submitting Request..." : "Apply as Host"}
      </button>
    </div>
  );
};

export default HostApplicationCard;