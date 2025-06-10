import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { apiCall } from "@/services/apiCall";

type GetOneMedicalRecordParams = {
   id?: number | string;
};

export const getOneMedicalRecord =
   ({ id }: GetOneMedicalRecordParams) =>
   async () => {
      if (!id) {
         throw new Error("MedicalRecord ID is required");
      }

      const res = await apiCall<PatientApiResponse<MedicalRecord>>(
         `${BACKEND_SERVICES_BASE_ROUTES.PATIENT}/MedicalRecords/${id}`,
      );

      return res;
   };
