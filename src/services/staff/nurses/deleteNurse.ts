import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { apiCall } from "@/services/apiCall";

type DeleteNurseParams = {
   id: string;
};

export const deleteNurse = async ({ id }: DeleteNurseParams) => {
   const res = await apiCall<StaffApiResponse<Nurse>>(
      `${BACKEND_SERVICES_BASE_ROUTES.STAFF}/nurses/${id}`,
      {
         method: "DELETE",
      },
   );

   return res;
};
