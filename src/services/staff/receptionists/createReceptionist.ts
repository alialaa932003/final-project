import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { apiCall } from "@/services/apiCall";

export const createReceptionist = async (data: ReceptionistRequest) => {
   const res = await apiCall<StaffApiResponseWithPagination<Receptionist[]>>(
      `${BACKEND_SERVICES_BASE_ROUTES.STAFF}/receptionists`,
      {
         method: "POST",
         body: JSON.stringify(data),
      },
   );

   return res;
};
