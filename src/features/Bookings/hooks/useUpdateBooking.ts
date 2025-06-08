import { QUERY_KEYS } from "@/constants";
import { useOptimisticMutation } from "@/hooks/useOptimisticMutation";
import { updateBooking } from "@/services/bookings/updateBooking";
import { useSearchParams } from "react-router-dom";

export const useUpdateBooking = () => {
   const [searchParams] = useSearchParams();
   const page = searchParams.get("page") || "1";
   const search = searchParams.get("search") || "";

   const { mutate: updateBookingMutate, isPending: isUpdatePending } =
      useOptimisticMutation({
         mutationFn: updateBooking,
         queryKey: [QUERY_KEYS.BOOKINGS, page, search],
         mutationType: "edit",
      });
   return {
      updateBookingMutate,
      isUpdatePending,
   };
};
