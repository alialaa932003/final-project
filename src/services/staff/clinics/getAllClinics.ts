import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { createQueryString } from "@/lib/createQueryString";
import { apiCall } from "@/services/apiCall";

type GetAllClinicsParams = {
   page?: string;
   search?: string;
};

export const getAllClinics =
   ({ page, search }: GetAllClinicsParams = {}) =>
   async () => {
      const params = createQueryString({
         page,
         search,
      });

      const res = await apiCall<StaffApiResponseWithPagination<Clinic[]>>(
         `${BACKEND_SERVICES_BASE_ROUTES.STAFF}/clinics?${params}`,
      );

      return res;
   };
