import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { apiCall } from "@/services/apiCall";

export const createClinic = async (
   clinic: Partial<Omit<ClinicRequest, "is_active">>,
) => {
   const res = await apiCall<StaffApiResponseWithPagination<Clinic[]>>(
      `${BACKEND_SERVICES_BASE_ROUTES.STAFF}/clinics`,
      {
         method: "POST",
         body: JSON.stringify(clinic),
      },
   );

   return res;
};
