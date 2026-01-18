"use client";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Check, MapPin, Users, DollarSign, Info, Loader2 } from "lucide-react";

interface TravelPlan {
  id: number;
  title: string;
  capacity: number;
  budget: number;
  status: "PENDING" | "APPROVED" | "REJECTED";
}

export default function AdminTravelPlans() {
  const [plans, setPlans] = useState<TravelPlan[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchPlans = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/travel-plans/approved?pending=true`,
        { credentials: "include", cache: "no-store" }
      );

      if (!res.ok) throw new Error("Server error");

      const data = await res.json();
      setPlans(Array.isArray(data.data) ? data.data : []);
    } catch (err) {
      console.error("Fetch error:", err);
      toast.error("Failed to load plans");
      setPlans([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPlans();
  }, [fetchPlans]);

  const handlePublish = async (id: number) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/travel-plans/${id}/publish/admin`,
        {
          method: "PATCH",
          credentials: "include",
        }
      );

      if (!res.ok) throw new Error("Publish failed");

      toast.success("Travel Plan Published!");

      setPlans((prevPlans) => prevPlans.filter((plan) => plan.id !== id));
    } catch (error) {
      toast.error("Could not publish the plan");
    }
  };
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Admin Approval Panel
          </h1>
          <p className="text-gray-500 text-sm">
            Review travel plans and publish them to the platform.
          </p>
        </div>
        <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-100">
          Pending: {plans.length}
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50/50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Title
                </th>
                <th className="px-6 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Capacity
                </th>
                <th className="px-6 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Budget
                </th>
                <th className="px-6 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Status
                </th>
                <th className="px-6 py-5 text-xs font-bold text-gray-400 uppercase tracking-widest text-right">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-50">
              {loading ? (
                <tr>
                  <td colSpan={5} className="py-20 text-center">
                    <Loader2
                      className="animate-spin mx-auto text-blue-500 mb-2"
                      size={30}
                    />
                    <span className="text-gray-400 text-sm font-medium">
                      Fetching plans...
                    </span>
                  </td>
                </tr>
              ) : plans.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="py-20 text-center text-gray-400 italic"
                  >
                    No pending plans to display.
                  </td>
                </tr>
              ) : (
                plans.map((plan) => (
                  <tr
                    key={plan.id}
                    className="hover:bg-blue-50/30 transition-all duration-200"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                          <MapPin size={18} />
                        </div>
                        <span className="font-bold text-gray-700">
                          {plan.title}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      <div className="flex items-center gap-2">
                        <Users size={16} className="text-gray-400" />{" "}
                        {plan.capacity} Person
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1 font-semibold text-green-600">
                        <DollarSign size={16} />
                        {plan.budget.toLocaleString()}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-amber-100 text-amber-600 rounded-full text-[10px] font-black tracking-widest uppercase">
                        {plan.status || "PENDING"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => handlePublish(plan.id)}
                        className="group relative flex items-center gap-2 ml-auto bg-gray-900 text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-green-600 transition-all active:scale-95 shadow-lg shadow-gray-200"
                      >
                        <Check
                          size={16}
                          className="group-hover:scale-125 transition-transform"
                        />
                        Approve & Publish
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-2xl flex items-start gap-3 border border-gray-100">
        <Info className="text-gray-400 shrink-0 mt-0.5" size={18} />
        <p className="text-sm text-gray-500 leading-relaxed">
          Once you click <b>Approve & Publish</b>, the travel plan will be
          visible to all tourists on the homepage. This action updates the plan
          status to `APPROVED`.
        </p>
      </div>
    </div>
  );
}
