import { QUERY_KEYS } from "@/constants";
import { useCustomQuery } from "@/hooks/useCustomQuery";
import { getAllReceptionists } from "@/services/staff/receptionists/getAllReceptionists";
import { useSearchParams } from "react-router-dom";

export const useGetAllReceptionists = () => {
   const searchParams = useSearchParams()[0];
   const page = searchParams.get("page") || "1";
   const searchTerm = searchParams.get("search") || "";
   const queryResult = useCustomQuery(
      [QUERY_KEYS.RECEPTIONISTS, page, searchTerm],
      getAllReceptionists({ page, searchTerm }),
   );

   return queryResult;
};
