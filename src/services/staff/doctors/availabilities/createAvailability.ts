import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { apiCall } from "@/services/apiCall";

type CreateAvailabilityParams = {
   doctorId: string;
   data: AvailabilityRequest;
};

export const createAvailability = async ({
   doctorId,
   data,
}: CreateAvailabilityParams) => {
   const res = await apiCall<StaffApiResponseWithPagination<Doctor[]>>(
      `${BACKEND_SERVICES_BASE_ROUTES.STAFF}/doctors/${doctorId}/availabilities`,
      {
         method: "POST",
         body: JSON.stringify(data),
      },
   );

   return res;
};
