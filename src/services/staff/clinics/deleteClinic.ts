import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { apiCall } from "@/services/apiCall";

type DeleteClinicParams = {
   id: string;
};

export const deleteClinic = async ({ id }: DeleteClinicParams) => {
   const res = await apiCall<StaffApiResponse<Clinic>>(
      `${BACKEND_SERVICES_BASE_ROUTES.STAFF}/clinics/${id}`,
      {
         method: "DELETE",
      },
   );

   return res;
};
