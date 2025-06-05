import { QUERY_KEYS } from "@/constants";
import { useOptimisticMutation } from "@/hooks/useOptimisticMutation";
import { deleteNurse } from "@/services/staff/nurses/deleteNurse";

export const useDeleteNurse = () => {
   const mutationResult = useOptimisticMutation({
      mutationFn: deleteNurse,
      queryKey: [QUERY_KEYS.NURSES],
      dataPath: ["data", "items"],
      options: {
         successMessageKey: "staff:nurse-deleted-successfully",
         errorMessageKey: "staff:nurse-deletion-failed",
      },
   });

   return mutationResult;
};
