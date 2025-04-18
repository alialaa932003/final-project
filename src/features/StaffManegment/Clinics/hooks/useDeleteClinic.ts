import { useOptimisticMutation } from "@/hooks/useOptimisticMutation";
import { deleteClinic } from "@/services/staff/clinics/deleteClinic";
import { useSearchParams } from "react-router-dom";

export const useDeleteClinic = () => {
   const [searchParams] = useSearchParams();
   const page = searchParams.get("page") || "1";
   const search = searchParams.get("search") || "";
   const { optimisticMutate, isPending } = useOptimisticMutation(
      ({ id }: { id: number }) => deleteClinic({ id }),
      ["clinics", page, search],
      ["data", "items"],
      "id",
      {
         onSuccess: () => {},
      },
   );
   return {
      deleteClinic: optimisticMutate,
      isDeleting: isPending,
   };
};
