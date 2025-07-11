import { QUERY_KEYS } from "@/constants";
import { useCustomQuery } from "@/hooks/useCustomQuery";
import { getAllDoctors } from "@/services/staff/doctors/getAllDoctors";
import { useSearchParams } from "react-router-dom";

export const useGetAllDoctors = () => {
   const searchParams = useSearchParams()[0];
   const page = searchParams.get("page") || "1";
   const search = searchParams.get("search") || "";
   const queryResult = useCustomQuery(
      [QUERY_KEYS.DOCTORS, page, search],
      getAllDoctors({ page, search }),
   );

   return queryResult;
};
