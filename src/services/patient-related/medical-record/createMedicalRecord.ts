import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { apiCall } from "@/services/apiCall";

export const createMedicalRecord = async (
   data: MedicalRecordRequestWithPatientId,
) => {
   const res = await apiCall<PatientApiResponse<MedicalRecord>>(
      `${BACKEND_SERVICES_BASE_ROUTES.PATIENT}/MedicalRecords`,
      {
         method: "POST",
         body: JSON.stringify(data),
      },
   );

   return res;
};
