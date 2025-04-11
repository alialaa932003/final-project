import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { apiCall } from "@/services/apiCall";

type GetOneDoctorsParams = {
   id: number;
};

export const getOneDoctors =
   ({ id }: GetOneDoctorsParams) =>
   async () => {
      const res = await apiCall<StaffApiResponse<DoctorFullInfo>>(
         `${BACKEND_SERVICES_BASE_ROUTES.STAFF}/doctors/${id}`,
      );

      return res;
   };
