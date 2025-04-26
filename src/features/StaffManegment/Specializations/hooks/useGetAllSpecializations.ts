import { QUERY_KEYS } from "@/constants";
import { useCustomQuery } from "@/hooks/useCustomQuery";
import { getAllSpecializations } from "@/services/staff/specializations/getAllSpecializations";
import { useSearchParams } from "react-router-dom";

export const useGetAllSpecializations = () => {
   const searchParams = useSearchParams()[0];
   const page = searchParams.get("page") || "1";
   const search = searchParams.get("search") || "";
   const { data, isPending } = useCustomQuery(
      [QUERY_KEYS.SPECIALIZATIONS, page, search],
      getAllSpecializations({ page, search }),
   );
   return {
      data,
      isPending,
   };
};
