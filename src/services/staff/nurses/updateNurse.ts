import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { apiCall } from "@/services/apiCall";

type UpdateNurseParams = {
   id: string;
   newData: Partial<NurseRequest>;
};

export const updateNurse = async ({ id, newData }: UpdateNurseParams) => {
   const res = await apiCall<StaffApiResponse<Nurse>>(
      `${BACKEND_SERVICES_BASE_ROUTES.STAFF}/nurses/${id}`,
      {
         method: "PATCH",
         body: JSON.stringify(newData),
      },
   );

   return res;
};
