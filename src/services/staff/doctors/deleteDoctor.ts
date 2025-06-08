import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { apiCall } from "@/services/apiCall";

type DeleteDoctorParams = {
   id: string;
};

export const deleteDoctor = async ({ id }: DeleteDoctorParams) => {
   const res = await apiCall<StaffApiResponse<DoctorFullInfo>>(
      `${BACKEND_SERVICES_BASE_ROUTES.STAFF}/doctors/${id}`,
      {
         method: "DELETE",
      },
   );

   return res;
};
