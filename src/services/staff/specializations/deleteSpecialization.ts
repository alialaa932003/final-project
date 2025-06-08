import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { apiCall } from "@/services/apiCall";

type DeleteSpecializationParams = {
   id: string;
};

export const deleteSpecialization = async ({
   id,
}: DeleteSpecializationParams) => {
   const res = await apiCall<StaffApiResponse<Specialization>>(
      `${BACKEND_SERVICES_BASE_ROUTES.STAFF}/specializations/${id}`,
      {
         method: "DELETE",
      },
   );

   return res;
};
