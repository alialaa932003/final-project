import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { apiCall } from "@/services/apiCall";

type UpdateReceptionistParams = {
   id: string;
   newData: Partial<ReceptionistRequest>;
};

export const updateReceptionist = async ({
   id,
   newData,
}: UpdateReceptionistParams) => {
   const res = await apiCall<StaffApiResponse<Receptionist>>(
      `${BACKEND_SERVICES_BASE_ROUTES.STAFF}/receptionists/${id}`,
      {
         method: "PATCH",
         body: JSON.stringify(newData),
      },
   );

   return res;
};
