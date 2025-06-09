import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { apiCall, ApiResponse } from "@/services/apiCall";

export const getStaffAnalytics = () => async () => {
   const res = await apiCall<ApiResponse<StaffAnalytics>>(
      `${BACKEND_SERVICES_BASE_ROUTES.STAFF}/analytics `,
   );

   return res;
};
