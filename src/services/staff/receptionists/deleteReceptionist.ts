import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { apiCall } from "@/services/apiCall";

type DeleteReceptionistParams = {
   id: string;
};

export const deleteReceptionist = async ({ id }: DeleteReceptionistParams) => {
   const res = await apiCall<StaffApiResponse<Receptionist>>(
      `${BACKEND_SERVICES_BASE_ROUTES.STAFF}/receptionists/${id}`,
      {
         method: "DELETE",
      },
   );

   return res;
};
