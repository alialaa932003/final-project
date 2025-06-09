import { QUERY_KEYS } from "@/constants";
import { useCustomQuery } from "@/hooks/useCustomQuery";
import { getAllPatientsLookup } from "@/services/bookings/getAllPatientsLookup";

export const useGetAllPatientsLookup = () => {
   const queryResult = useCustomQuery(
      [QUERY_KEYS.PATIENTS_LOOKUP],
      getAllPatientsLookup(),
   );

   return queryResult;
};
