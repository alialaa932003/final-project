import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { apiCall } from "@/services/apiCall";

type UpdatePatientParams = {
   id: number | string;
   newData: Partial<PatientRequest>;
};

export const updatePatient = async ({ id, newData }: UpdatePatientParams) => {
   const res = await apiCall<StaffApiResponse<Patient>>(
      `${BACKEND_SERVICES_BASE_ROUTES.PATIENT}/Patient`,
      {
         method: "PUT",
         body: JSON.stringify({ id, ...newData }),
      },
   );

   return res;
};
