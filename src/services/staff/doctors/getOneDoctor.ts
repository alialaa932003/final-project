import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { apiCall } from "@/services/apiCall";

type GetOneDoctorsParams = {
   id?: number | string;
};

export const getOneDoctors =
   ({ id }: GetOneDoctorsParams) =>
   async () => {
      if (!id) {
         throw new Error("Doctor ID is required");
      }

      const res = await apiCall<StaffApiResponse<DoctorFullInfo>>(
         `${BACKEND_SERVICES_BASE_ROUTES.STAFF}/doctors/${id}`,
      );

      return res;
   };
