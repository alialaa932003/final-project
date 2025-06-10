import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { createQueryString } from "@/lib/createQueryString";
import { apiCall } from "@/services/apiCall";

type GetAllPatientsParams = {
   page?: string;
   search?: string;
};

export const getAllPatients =
   ({ page, search }: GetAllPatientsParams = {}) =>
   async () => {
      const params = createQueryString({
         page,
         search,
      });

      const res = await apiCall<PatientApiResponseWithPagination<Patient[]>>(
         `${BACKEND_SERVICES_BASE_ROUTES.PATIENT}/Patient/get-all-patients?${params}`,
      );

      return res;
   };
