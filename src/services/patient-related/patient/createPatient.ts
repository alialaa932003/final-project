import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { apiCall } from "@/services/apiCall";

export const createPatient = async (data: PatientRequest) => {
   const res = await apiCall<PatientApiResponse<Patient>>(
      `${BACKEND_SERVICES_BASE_ROUTES.PATIENT}/Patient`,
      {
         method: "POST",
         body: JSON.stringify(data),
      },
   );

   return res;
};
