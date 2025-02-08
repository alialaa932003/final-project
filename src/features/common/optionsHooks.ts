import { useCustomQuery } from "@/hooks/useCustomQuery";
import {
   getGroupsOptions,
   getHotelBookingsOptions,
   getHotelsOptions,
} from "@/services/apiOptions";

export const useGetHotelsOptions = () => {
   const { data, isPending } = useCustomQuery(["hotels-options"], () =>
      getHotelsOptions(),
   );
   return { data, isPending };
};
export const useGetGroupsOptions = () => {
   const { data, isPending } = useCustomQuery(["groups-options"], () =>
      getGroupsOptions(),
   );
   return { data, isPending };
};

export const useGetHotelBookingsOptions = (hotelId: string) => {
   const { data, isPending } = useCustomQuery(
      ["hotel-booking-options", hotelId],
      () => getHotelBookingsOptions(hotelId),
   );
   return { data, isPending };
};
