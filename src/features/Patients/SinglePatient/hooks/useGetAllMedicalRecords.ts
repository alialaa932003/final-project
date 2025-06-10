import { QUERY_KEYS } from "@/constants";
import { useCustomQuery } from "@/hooks/useCustomQuery";
import { getAllMedicalRecordForUser } from "@/services/patient-related/medical-record/getAllMedicalRecordForUser";
import { getAllPatients } from "@/services/patient-related/patient/getAllPatients";
import { useSearchParams } from "react-router-dom";

export const useGetAllMedicalRecords = (patientId: string) => {
   const searchParams = useSearchParams()[0];
   const page = searchParams.get("page") || "1";
   const search = searchParams.get("search") || "";
   const queryResult = useCustomQuery(
      [QUERY_KEYS.MEDICAL_RECORDS, page, search],
      getAllMedicalRecordForUser({ patientId, page, search }),
   );

   return queryResult;
};
