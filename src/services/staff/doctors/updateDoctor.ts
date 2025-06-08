import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { apiCall } from "@/services/apiCall";

type UpdateDoctorParams = {
   id: string;
   newData: Partial<DoctorRequest>;
};

export const updateDoctor = async ({ id, newData }: UpdateDoctorParams) => {
   const res = await apiCall<StaffApiResponse<DoctorFullInfo>>(
      `${BACKEND_SERVICES_BASE_ROUTES.STAFF}/doctors/${id}`,
      {
         method: "PATCH",
         body: JSON.stringify(newData),
      },
   );

   return res;
};
