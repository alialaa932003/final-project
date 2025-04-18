import { QUERY_KEYS } from "@/constants";
import { useOptimisticMutation } from "@/hooks/useOptimisticMutation";
import { deleteDoctor } from "@/services/staff/doctors/deleteDoctor";

export const useDeleteDoctor = () => {
   const mutationResult = useOptimisticMutation({
      mutationFn: deleteDoctor,
      queryKey: [QUERY_KEYS.DOCTORS],
      dataPath: ["data", "items"],
      options: {
         successMessageKey: "staff:doctor-deleted-successfully",
         errorMessageKey: "staff:doctor-deletion-failed",
      },
   });

   return mutationResult;
};
