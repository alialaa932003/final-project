import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { createQueryString } from "@/lib/createQueryString";
import { apiCall } from "@/services/apiCall";

type GetAllReceptionistsParams = {
   page?: string;
   search?: string;
};

export const getAllReceptionists =
   ({ page, search }: GetAllReceptionistsParams = {}) =>
   async () => {
      const params = createQueryString({
         page,
         search,
      });

      const res = await apiCall<StaffApiResponseWithPagination<Receptionist[]>>(
         `${BACKEND_SERVICES_BASE_ROUTES.STAFF}/receptionists?${params}`,
      );

      return res;
   };
