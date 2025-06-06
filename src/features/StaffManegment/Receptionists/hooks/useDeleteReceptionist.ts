import { QUERY_KEYS } from "@/constants";
import { useOptimisticMutation } from "@/hooks/useOptimisticMutation";
import { deleteNurse } from "@/services/staff/nurses/deleteNurse";
import { deleteReceptionist } from "@/services/staff/receptionists/deleteReceptionist";

export const useDeleteReceptionist = () => {
   const mutationResult = useOptimisticMutation({
      mutationFn: deleteReceptionist,
      queryKey: [QUERY_KEYS.RECEPTIONISTS],
      dataPath: ["data", "items"],
      options: {
         successMessageKey: "staff:receptionist-deleted-successfully",
         errorMessageKey: "staff:receptionist-deletion-failed",
      },
   });

   return mutationResult;
};
