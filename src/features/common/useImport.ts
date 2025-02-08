import useCustomMutation from "@/hooks/useCustomMutation";
import { apiImport } from "@/services/apiExportImport";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useImport = (apiUrl: string, queryKey?: string[]) => {
   const queryClient = useQueryClient();
   const {
      isPending: isImporting,
      mutate: ImportFun,
      error,
   } = useCustomMutation((data: FormData) => apiImport(apiUrl, data), {
      onSuccess: (data: any) => {
         toast.success(data?.message);
         queryClient.invalidateQueries({
            queryKey,
         });
      },
      onError: (err) => toast.error(err.message),
   });

   return { isImporting, ImportFun, error };
};
