import axiosInstance from "@/utils/axiosInstance";


export const cancelJoinRequest = async (requestId: string) => {
  await axiosInstance.patch(`/travel-requests/${requestId}/cancel`);
};
