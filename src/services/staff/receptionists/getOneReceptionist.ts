import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { apiCall } from "@/services/apiCall";

type GetOneReceptionistParams = {
   id?: number | string;
};

export const getOneReceptionist =
   ({ id }: GetOneReceptionistParams) =>
   async () => {
      if (!id) {
         throw new Error("Receptionist ID is required");
      }

      const res = await apiCall<StaffApiResponse<Receptionist>>(
         `${BACKEND_SERVICES_BASE_ROUTES.STAFF}/receptionists/${id}`,
      );

      return res;
   };
