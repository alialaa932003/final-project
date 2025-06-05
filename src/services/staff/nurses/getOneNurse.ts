import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { apiCall } from "@/services/apiCall";

type GetOneNurseParams = {
   id?: number | string;
};

export const getOneNurse =
   ({ id }: GetOneNurseParams) =>
   async () => {
      if (!id) {
         throw new Error("Nurse ID is required");
      }

      const res = await apiCall<StaffApiResponse<Nurse>>(
         `${BACKEND_SERVICES_BASE_ROUTES.STAFF}/nurses/${id}`,
      );

      return res;
   };
