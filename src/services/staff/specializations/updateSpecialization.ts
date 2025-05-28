import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { apiCall } from "@/services/apiCall";

type UpdateSpecializationParams = {
   id: number;
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
            color: newData.color?.value,
         }),
      },
   );

   return res;
};
