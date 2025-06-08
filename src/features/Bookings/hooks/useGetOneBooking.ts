import { QUERY_KEYS } from "@/constants";
import { useCustomQuery } from "@/hooks/useCustomQuery";
import { getOneBookings } from "@/services/bookings/getOneBooking";

export const useGetOneBooking = ({
   id,
   isOpen,
}: {
   id?: number;
   isOpen: boolean;
}) => {
   const { data, isFetching } = useCustomQuery(
      [QUERY_KEYS.BOOKING, id],
      getOneBookings({ id }),
      {
         enabled: Boolean(id) && isOpen,
      },
   );
   return { data, isFetching };
};
