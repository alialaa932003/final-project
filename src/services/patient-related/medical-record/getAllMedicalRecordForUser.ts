import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { createQueryString } from "@/lib/createQueryString";
import { apiCall } from "@/services/apiCall";

type GetAllMedicalRecordForUserParams = {
   patientId?: string;
   page?: string;
   search?: string;
};

export const getAllMedicalRecordForUser =
   ({ patientId, page, search }: GetAllMedicalRecordForUserParams = {}) =>
   async () => {
      const params = createQueryString({
         page,
         search,
      });

      const res = await apiCall<
         PatientApiResponseWithPagination<MedicalRecord[]>
      >(
         `${BACKEND_SERVICES_BASE_ROUTES.PATIENT}/MedicalRecords/get-all-medical-records-for-patient-by-Id/${patientId}?${params}`,
      );

      return res;
   };
