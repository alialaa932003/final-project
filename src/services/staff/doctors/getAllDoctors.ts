import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { createQueryString } from "@/lib/createQueryString";
import { apiCall } from "@/services/apiCall";

type GetAllDoctorsParams = {
   page?: string;
};

export const getAllDoctors =
   ({ page }: GetAllDoctorsParams = {}) =>
   async () => {
      const params = createQueryString({
         page,
      });

      const res = await apiCall<StaffApiResponseWithPagination<Doctor[]>>(
         `${BACKEND_SERVICES_BASE_ROUTES.STAFF}/doctors?${params}`,
      );

      return res;
   };
