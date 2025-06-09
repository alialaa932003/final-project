import { QUERY_KEYS } from "@/constants";
import { useCustomQuery } from "@/hooks/useCustomQuery";
import { getAllDoctorsLookup } from "@/services/bookings/getAllDoctorsLookup";

export const useGetAllDoctorsLookup = () => {
   const queryResult = useCustomQuery(
      [QUERY_KEYS.DOCTORS_LOOKUP],
      getAllDoctorsLookup(),
   );

   return queryResult;
};
