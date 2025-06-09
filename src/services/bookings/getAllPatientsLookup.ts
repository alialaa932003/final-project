import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { apiCall } from "@/services/apiCall";

export const getAllPatientsLookup = () => async () => {
   const res = await apiCall<StaffApiResponse<PatientLookup[]>>(
      `${BACKEND_SERVICES_BASE_ROUTES.PATIENT}/Patient/lookup-patients`,
   );

   return res;
};
