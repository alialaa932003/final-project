import { QUERY_KEYS } from "@/constants";
import { useOptimisticMutation } from "@/hooks/useOptimisticMutation";
import { createSpecialization } from "@/services/staff/specializations/createSpecialization";
import { useSearchParams } from "react-router-dom";

export const useCreateSpecialization = () => {
   const [searchParams] = useSearchParams();
   const page = searchParams.get("page") || "1";
   const search = searchParams.get("search") || "";

   const { mutate: createSpecializationMutate, isPending: isCreatePending } =
      useOptimisticMutation({
         mutationFn: createSpecialization,
         queryKey: [QUERY_KEYS.SPECIALIZATIONS, page, search],
         mutationType: "add",
      });
   return {
      createSpecializationMutate,
      isCreatePending,
   };
};
