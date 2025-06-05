import { QUERY_KEYS } from "@/constants";
import { useCustomQuery } from "@/hooks/useCustomQuery";
import { getAllNurses } from "@/services/staff/nurses/getAllNurses";
import { useSearchParams } from "react-router-dom";

export const useGetAllNurses = () => {
   const searchParams = useSearchParams()[0];
   const page = searchParams.get("page") || "1";
   const searchTerm = searchParams.get("search") || "";
   const queryResult = useCustomQuery(
      [QUERY_KEYS.NURSES, page, searchTerm],
      getAllNurses({ page, searchTerm }),
   );

   return queryResult;
};
