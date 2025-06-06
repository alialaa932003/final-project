import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { createQueryString } from "@/lib/createQueryString";
import { apiCall } from "@/services/apiCall";

type GetAllReceptionistsParams = {
   page?: string;
   searchTerm?: string;
};

export const getAllReceptionists =
   ({ page, searchTerm }: GetAllReceptionistsParams = {}) =>
   async () => {
      const params = createQueryString({
         page,
         searchTerm,
      });

      const res = await apiCall<StaffApiResponseWithPagination<Receptionist[]>>(
         `${BACKEND_SERVICES_BASE_ROUTES.STAFF}/receptionists?${params}`,
      );

      return res;
   };
