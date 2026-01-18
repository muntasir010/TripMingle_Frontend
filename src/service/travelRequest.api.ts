import axiosInstance from '@/utils/axiosInstance';

export const joinTripApi = async (travelPlanId: string) => {
  const res = await axiosInstance.post('/travel-request/join', {
    travelPlanId,
  });
  return res.data;
};

export const confirmJoinApi = async (requestId: string) => {
  const res = await axiosInstance.post('/travel-request/confirm', {
    requestId,
  });
  return res.data;
};
