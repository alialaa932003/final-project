import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { apiCall } from "@/services/apiCall";

export const getAllDoctorsLookup = () => async () => {
   const res = await apiCall<StaffApiResponse<DoctorLookup[]>>(
      `${BACKEND_SERVICES_BASE_ROUTES.BOOKING}/lookup/doctors`,
   );

   return res;
};
