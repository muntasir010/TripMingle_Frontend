/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  DollarSign,
  FileText,
  MapPin,
  Upload,
  Users,
  Calendar,
  Plane,
  Heading,
} from "lucide-react";
import toast from "react-hot-toast";

export default function CreatePlanPage() {
  const router = useRouter();
  const [form, setForm] = useState<any>({
    travelType: "Solo",
  });
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const submit = async () => {
    if (!image) return toast.error("Please upload a cover photo!");

    setLoading(true);
    try {
      const formData = new FormData();

      formData.append("title", form.title);
      formData.append("destination", form.destination);
      formData.append("budget", String(form.budget));
      formData.append("capacity", String(form.capacity));
      formData.append("description", form.description);
      formData.append("startDate", new Date(form.startDate).toISOString());
      formData.append("endDate", new Date(form.endDate).toISOString());
      formData.append("travelType", form.travelType);

      formData.append("file", image);

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/travel-plans`, {
        method: "POST",
        credentials: "include",
        body: formData,
      });

      const result = await res.json();

      if (res.ok) {
        toast.success("Travel Plan Created Successfully!");
        router.push("/dashboard/host");
      } else {
        toast.error(result.message || "Failed to create plan");
      }
    } catch (error: any) {
      console.error("Submit Error:", error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-md border border-gray-100 mb-10">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">
          Create New Travel Plan
        </h1>
        <p className="text-gray-500">
          Fill in all required fields according to your plan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2 space-y-2">
          <div>
            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <Heading size={16} /> Title
            </label>
            <input
              required
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
              placeholder="e.g. Cox's Bazar, Saint Martin"
              onChange={(e) =>
                setForm({ ...form, title: e.target.value })
              }
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <MapPin size={16} /> Destination
            </label>
            <input
              required
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
              placeholder="e.g. Cox's Bazar, Saint Martin"
              onChange={(e) =>
                setForm({ ...form, destination: e.target.value })
              }
            />
          </div>
        </div>

        {/* Start Date */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <Calendar size={16} /> Start Date
          </label>
          <input
            type="date"
            required
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
            onChange={(e) => setForm({ ...form, startDate: e.target.value })}
          />
        </div>

        {/* End Date */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <Calendar size={16} /> End Date
          </label>
          <input
            type="date"
            required
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
            onChange={(e) => setForm({ ...form, endDate: e.target.value })}
          />
        </div>

        {/* Budget */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <DollarSign size={16} /> Budget (Total)
          </label>
          <input
            type="number"
            required
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
            placeholder="0.00"
            onChange={(e) => setForm({ ...form, budget: e.target.value })}
          />
        </div>

        {/* Capacity */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <Users size={16} /> Max Capacity
          </label>
          <input
            type="number"
            required
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
            placeholder="e.g. 15"
            onChange={(e) => setForm({ ...form, capacity: e.target.value })}
          />
        </div>

        {/* Travel Type (Enum) */}
        <div className="md:col-span-2 space-y-2">
          <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <Plane size={16} /> Travel Type
          </label>
          <select
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white"
            onChange={(e) => setForm({ ...form, travelType: e.target.value })}
          >
            <option value="SOLO">Solo</option>
            <option value="FRIENDS">Friends</option>
            <option value="FAMILY">Family</option>
          </select>
        </div>

        {/* Image Upload Area */}
        <div className="md:col-span-2 space-y-2">
          <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <Upload size={16} /> Cover Photo
          </label>
          <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-200 rounded-2xl cursor-pointer hover:bg-gray-50 transition-all overflow-hidden relative">
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt="preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex flex-col items-center text-gray-400">
                <Upload size={32} strokeWidth={1.5} />
                <span className="text-sm mt-2 font-medium">
                  Click to select photo
                </span>
              </div>
            )}
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleImageChange}
            />
          </label>
        </div>

        {/* Description */}
        <div className="md:col-span-2 space-y-2">
          <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
            <FileText size={16} /> Description
          </label>
          <textarea
            rows={4}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
            placeholder="Write details about the trip..."
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
        </div>
      </div>

      <button
        disabled={loading}
        onClick={submit}
        className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-100 transition-all active:scale-[0.98] disabled:bg-gray-400"
      >
        {loading ? "Creating..." : "Publish Plan"}
      </button>
    </div>
  );
}
