import { QUERY_KEYS } from "@/constants";
import { useCustomQuery } from "@/hooks/useCustomQuery";
import { getAllPatients } from "@/services/patient-related/patient/getAllPatients";
import { useSearchParams } from "react-router-dom";

export const useGetAllPatients = () => {
   const searchParams = useSearchParams()[0];
   const page = searchParams.get("page") || "1";
   const search = searchParams.get("search") || "";
   const queryResult = useCustomQuery(
      [QUERY_KEYS.PATIENTS, page, search],
      getAllPatients({ page, search }),
   );

   return queryResult;
};
