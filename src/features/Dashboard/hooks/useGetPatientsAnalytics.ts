import { QUERY_KEYS } from "@/constants";
import { useCustomQuery } from "@/hooks/useCustomQuery";
import { getPatientsAnalytics } from "@/services/dashboard/getPatientsAnalytics";

export const useGetPatientsAnalytics = () => {
   const queryResult = useCustomQuery(
      [QUERY_KEYS.PATIENTS_ANALYTICS],
      getPatientsAnalytics(),
   );

   return queryResult;
};
