import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { apiCall } from "@/services/apiCall";

type UpdateMedicalRecordParams = {
   id: string;
   newData: MedicalRecordRequestWithPatientId;
};

export const updateMedicalRecord = async ({
   id,
   newData,
}: UpdateMedicalRecordParams) => {
   const res = await apiCall<PatientApiResponse<MedicalRecord>>(
      `${BACKEND_SERVICES_BASE_ROUTES.PATIENT}/MedicalRecords`,
      {
         method: "PUT",
         body: JSON.stringify({ id, ...newData }),
      },
   );

   return res;
};
