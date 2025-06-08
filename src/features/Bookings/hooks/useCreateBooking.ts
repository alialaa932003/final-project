import { QUERY_KEYS } from "@/constants";
import { useOptimisticMutation } from "@/hooks/useOptimisticMutation";
import { createBooking } from "@/services/bookings/createBooking";
import { useSearchParams } from "react-router-dom";

export const useCreateBooking = () => {
   const [searchParams] = useSearchParams();
   const page = searchParams.get("page") || "1";
   const search = searchParams.get("search") || "";

   const { mutate: createBookingMutate, isPending: isCreatePending } =
      useOptimisticMutation({
         mutationFn: createBooking,
         queryKey: [QUERY_KEYS.BOOKINGS, page, search],
         mutationType: "add",
      });
   return {
      createBookingMutate,
      isCreatePending,
   };
};
