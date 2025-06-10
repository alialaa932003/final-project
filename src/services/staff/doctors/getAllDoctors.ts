import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { createQueryString } from "@/lib/createQueryString";
import { apiCall } from "@/services/apiCall";

type GetAllDoctorsParams = {
   page?: string;
   search?: string;
};

export const getAllDoctors =
   ({ page, search }: GetAllDoctorsParams = {}) =>
   async () => {
      const params = createQueryString({
         page,
         search,
      });

      const res = await apiCall<StaffApiResponseWithPagination<Doctor[]>>(
         `${BACKEND_SERVICES_BASE_ROUTES.STAFF}/doctors?${params}`,
      );

      return res;
   };
