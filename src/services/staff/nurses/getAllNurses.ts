import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { createQueryString } from "@/lib/createQueryString";
import { apiCall } from "@/services/apiCall";

type GetAllNursesParams = {
   page?: string;
   search?: string;
};

export const getAllNurses =
   ({ page, search }: GetAllNursesParams = {}) =>
   async () => {
      const params = createQueryString({
         page,
         search,
      });

      const res = await apiCall<StaffApiResponseWithPagination<Nurse[]>>(
         `${BACKEND_SERVICES_BASE_ROUTES.STAFF}/nurses?${params}`,
      );

      return res;
   };
