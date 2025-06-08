import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { apiCall } from "@/services/apiCall";

type UpdateClinicParams = {
   id: string;
   newData: ClinicRequest;
};

export const updateClinic = async ({ id, newData }: UpdateClinicParams) => {
   const res = await apiCall<StaffApiResponse<Clinic>>(
      `${BACKEND_SERVICES_BASE_ROUTES.STAFF}/clinics/${id}`,
      {
         method: "PATCH",
         body: JSON.stringify(newData),
      },
   );

   return res;
};
