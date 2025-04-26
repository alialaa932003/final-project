import { QUERY_KEYS } from "@/constants";
import { useOptimisticMutation } from "@/hooks/useOptimisticMutation";
import { deleteSpecialization } from "@/services/staff/specializations/deleteSpecialization";
import { useSearchParams } from "react-router-dom";

export const useDeleteSpecialization = () => {
   const [searchParams] = useSearchParams();
   const page = searchParams.get("page") || "1";
   const search = searchParams.get("search") || "";

   const { mutate, isPending } = useOptimisticMutation({
      mutationFn: ({ id }: { id: number }) => deleteSpecialization({ id }),
      queryKey: [QUERY_KEYS.SPECIALIZATIONS, page, search],
      dataPath: ["data", "items"],
   });

   return {
      deleteSpecialization: mutate,
      isDeleting: isPending,
   };
};
