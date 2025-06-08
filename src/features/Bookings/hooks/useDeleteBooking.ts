import { QUERY_KEYS } from "@/constants";
import { useOptimisticMutation } from "@/hooks/useOptimisticMutation";
import { deleteBooking } from "@/services/bookings/deleteBooking";
import { useSearchParams } from "react-router-dom";

export const useDeleteBooking = () => {
   const [searchParams] = useSearchParams();
   const page = searchParams.get("page") || "1";
   const search = searchParams.get("search") || "";

   const { mutate, isPending } = useOptimisticMutation({
      mutationFn: ({ id }: { id: number }) => deleteBooking({ id }),
      queryKey: [QUERY_KEYS.BOOKINGS, page, search],
      dataPath: ["data", "items"],
   });

   return {
      deleteBooking: mutate,
      isDeleting: isPending,
   };
};
