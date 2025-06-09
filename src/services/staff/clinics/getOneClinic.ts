import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { apiCall } from "@/services/apiCall";

type GetOneClinicsParams = {
   id?: string;
};

export const getOneClinics =
   ({ id }: GetOneClinicsParams) =>
   async () => {
      const res = await apiCall<StaffApiResponse<Clinic>>(
         `${BACKEND_SERVICES_BASE_ROUTES.STAFF}/clinics/${id}`,
      );

      return res;
   };
