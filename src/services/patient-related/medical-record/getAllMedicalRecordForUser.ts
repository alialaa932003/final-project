import { BACKEND_SERVICES_BASE_ROUTES } from "@/constants";
import { createQueryString } from "@/lib/createQueryString";
import { apiCall } from "@/services/apiCall";

type GetAllMedicalRecordForUserParams = {
   patientId?: string;
   page?: string;
   searchTerm?: string;
};

export const getAllMedicalRecordForUser =
   ({ patientId, page, searchTerm }: GetAllMedicalRecordForUserParams = {}) =>
   async () => {
      const params = createQueryString({
         page,
         searchTerm,
      });

      const res = await apiCall<
         StaffApiResponseWithPagination<MedicalRecord[]>
      >(
         `${BACKEND_SERVICES_BASE_ROUTES.PATIENT}/MedicalRecords/get-all-medical-records-for-patient-by-Id/${patientId}?${params}`,
      );

      return res;
   };
