import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { apiCall } from "@/services/apiCall";

type UpdateSpecializationParams = {
   id: string;
   newData: Partial<Omit<Specialization, "createdAt" | "updatedAt">>;
};

export const updateSpecialization = async ({
   id,
   newData,
}: UpdateSpecializationParams) => {
   const res = await apiCall<StaffApiResponse<Specialization>>(
      `${BACKEND_SERVICES_BASE_ROUTES.STAFF}/specializations/${id}`,
      {
         method: "PATCH",
         body: JSON.stringify({
            ...newData,
         }),
      },
   );

   return res;
};
