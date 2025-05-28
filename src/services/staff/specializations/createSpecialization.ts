import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { apiCall } from "@/services/apiCall";

export const createSpecialization = async (
   specialization: Partial<Omit<Specialization, "createdAt" | "updatedAt">>,
) => {
   const res = await apiCall<StaffApiResponseWithPagination<Specialization[]>>(
      `${BACKEND_SERVICES_BASE_ROUTES.STAFF}/specializations`,
      {
         method: "POST",
         body: JSON.stringify({
            ...specialization,
         }),
      },
   );

   return res;
};
