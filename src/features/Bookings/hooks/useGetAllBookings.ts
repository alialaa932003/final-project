import { QUERY_KEYS } from "@/constants";
import { useCustomQuery } from "@/hooks/useCustomQuery";
import { getAllBookings } from "@/services/bookings/getAllBookings";
import { useSearchParams } from "react-router-dom";

export const useGetAllBookings = () => {
   const searchParams = useSearchParams()[0];
   const page = searchParams.get("page") || "1";
   const search = searchParams.get("search") || "";
   const { data, isPending } = useCustomQuery(
      [QUERY_KEYS.BOOKINGS, page, search],
      getAllBookings({ page, search }),
   );
   return {
      data,
      isPending,
   };
};
