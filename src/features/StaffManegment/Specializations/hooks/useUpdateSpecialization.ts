import { QUERY_KEYS } from "@/constants";
import { useOptimisticMutation } from "@/hooks/useOptimisticMutation";
import { updateSpecialization } from "@/services/staff/specializations/updateSpecialization";
import { useSearchParams } from "react-router-dom";

export const useUpdateSpecialization = () => {
   const [searchParams] = useSearchParams();
   const page = searchParams.get("page") || "1";
   const search = searchParams.get("search") || "";

   const { mutate: updateSpecializationMutate, isPending: isUpdatePending } =
      useOptimisticMutation({
         mutationFn: updateSpecialization,
         queryKey: [QUERY_KEYS.SPECIALIZATIONS, page, search],
         mutationType: "edit",
      });
   return {
      updateSpecializationMutate,
      isUpdatePending,
   };
};
