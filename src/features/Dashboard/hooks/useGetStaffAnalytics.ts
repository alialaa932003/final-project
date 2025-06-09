import { QUERY_KEYS } from "@/constants";
import { useCustomQuery } from "@/hooks/useCustomQuery";
import { getStaffAnalytics } from "@/services/dashboard/getStaffAnalytics";

export const useGetStaffAnalytics = () => {
   const queryResult = useCustomQuery(
      [QUERY_KEYS.SAFF_ANALYTICS],
      getStaffAnalytics(),
   );

   return queryResult;
};
