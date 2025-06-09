import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { apiCall } from "@/services/apiCall";

type GetOneSpecializationParams = {
   id?: string;
};

export const getOneSpecialization =
   ({ id }: GetOneSpecializationParams) =>
   async () => {
      const res = await apiCall<StaffApiResponse<Specialization>>(
         `${BACKEND_SERVICES_BASE_ROUTES.STAFF}/specializations/${id}`,
      );

      return res;
   };
