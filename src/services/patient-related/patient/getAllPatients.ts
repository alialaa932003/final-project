import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { createQueryString } from "@/lib/createQueryString";
import { apiCall } from "@/services/apiCall";

type GetAllPatientsParams = {
   page?: string;
   searchTerm?: string;
};

export const getAllPatients =
   ({ page, searchTerm }: GetAllPatientsParams = {}) =>
   async () => {
      const params = createQueryString({
         page,
         searchTerm,
      });

      const res = await apiCall<StaffApiResponseWithPagination<Patient[]>>(
         `${BACKEND_SERVICES_BASE_ROUTES.PATIENT}/Patient/get-all-patients?${params}`,
      );

      return res;
   };
