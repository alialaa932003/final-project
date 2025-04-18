import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { apiCall } from "@/services/apiCall";

export const createDoctor = async (data: DoctorRequest) => {
   const res = await apiCall<StaffApiResponseWithPagination<Doctor[]>>(
      `${BACKEND_SERVICES_BASE_ROUTES.STAFF}/doctors`,
      {
         method: "POST",
         body: JSON.stringify(data),
      },
   );

   return res;
};
