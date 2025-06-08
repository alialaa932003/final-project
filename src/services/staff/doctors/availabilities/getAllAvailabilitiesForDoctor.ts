import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { createQueryString } from "@/lib/createQueryString";
import { apiCall } from "@/services/apiCall";

type GetAllAvailabilitiesForDoctorParams = {
   doctorId?: string;
};

export const getAllAvailabilitiesForDoctor =
   ({ doctorId }: GetAllAvailabilitiesForDoctorParams = {}) =>
   async () => {
      const res = await apiCall<StaffApiResponseWithPagination<Availability[]>>(
         `${BACKEND_SERVICES_BASE_ROUTES.STAFF}/doctors/${doctorId}/availabilities`,
      );

      return res;
   };
