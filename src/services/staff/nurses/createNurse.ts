import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { apiCall } from "@/services/apiCall";

export const createNurse = async (data: NurseRequest) => {
   const res = await apiCall<StaffApiResponseWithPagination<Nurse[]>>(
      `${BACKEND_SERVICES_BASE_ROUTES.STAFF}/nurses`,
      {
         method: "POST",
         body: JSON.stringify(data),
      },
   );

   return res;
};
