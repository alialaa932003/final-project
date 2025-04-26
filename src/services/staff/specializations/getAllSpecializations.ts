import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { createQueryString } from "@/lib/createQueryString";
import { apiCall } from "@/services/apiCall";

type GetAllSpecializationsParams = {
   page?: string;
   search?: string;
};

export const getAllSpecializations =
   ({ page, search }: GetAllSpecializationsParams = {}) =>
   async () => {
      const params = createQueryString({
         page,
         search,
      });

      const res = await apiCall<
         StaffApiResponseWithPagination<Specialization[]>
      >(`${BACKEND_SERVICES_BASE_ROUTES.STAFF}/specializations?${params}`);

      return res;
   };
