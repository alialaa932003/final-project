import { useQueryClient } from "@tanstack/react-query";
import useCustomMutation from "./useCustomMutation";
import { toast } from "react-toastify";
import { debounce } from "@/utils/debounce";

export const useOptimisticMutation = (
   mutationFn: (mutationData: any) => Promise<any>, // The mutation function (API call)
   queryKey: string[], // Query key for the data to be updated
   dataPath: string[] = ["data", "data"], // Path to the data inside the query cache
   filterKey: string = "id", // Key to identify items for deletion or updating
   options?: any,
   mutationType: "add" | "edit" | "delete" = "delete", // Type of mutation
) => {
   const queryClient = useQueryClient();

   const { mutate: optimisticMutate, isPending } = useCustomMutation(
      (mutationData: any) => mutationFn(mutationData),
      {
         onMutate: async (mutationData: any) => {
            // Cancel ongoing queries to avoid race conditions
            await queryClient.cancelQueries({
               queryKey: queryKey,
            });

            // Snapshot the previous state of the data
            const previousData = queryClient.getQueryData(queryKey);
            queryClient.setQueryData(queryKey, (old: any) => {
               if (!old) return old;

               // Traverse the object to find the data array dynamically
               let newData = { ...old };
               let nested = newData;
               for (let i = 0; i < dataPath.length - 1; i++) {
                  nested = nested[dataPath[i]];
               }

               // Handle different mutation types
               switch (mutationType) {
                  case "add":
                     // Add new item
                     nested[dataPath[dataPath.length - 1]] = [
                        ...nested[dataPath[dataPath.length - 1]],
                        mutationData,
                     ];
                     break;

                  case "edit":
                     // Edit existing item
                     nested[dataPath[dataPath.length - 1]] = nested[
                        dataPath[dataPath.length - 1]
                     ].map((item: any) =>
                        item[filterKey] === mutationData[filterKey]
                           ? { ...item, ...mutationData }
                           : item,
                     );
                     break;

                  case "delete":
                     // Delete item
                     nested[dataPath[dataPath.length - 1]] = nested[
                        dataPath[dataPath.length - 1]
                     ].filter(
                        (item: any) =>
                           item[filterKey] !== mutationData[filterKey],
                     );
                     break;

                  default:
                     break;
               }

               return {
                  ...newData,
                  date: new Date().toISOString(),
               };
            });

            // Return the previous snapshot for rollback in case of error
            return { previousData };
         },
         onError: (error) => {
            toast.error(error.message);
         },
         onSuccess: (data) => {
            toast.success(data.message);
            if (options?.onSuccess) {
               options.onSuccess(data);
            }
         },
         onSettled: () => {
            debounce(() => {
               queryClient.invalidateQueries({
                  queryKey: queryKey,
               });
            }, 500);
         },
      },
   );

   return { optimisticMutate, isPending };
};
