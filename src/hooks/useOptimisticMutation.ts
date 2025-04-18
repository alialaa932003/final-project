import { useQueryClient } from "@tanstack/react-query";
import useCustomMutation from "./useCustomMutation";
import { toast } from "react-toastify";
import { debounce } from "@/utils/debounce";

interface UseOptimisticMutationParams<TData = unknown, TVariables = unknown> {
   mutationFn: (mutationData: TVariables) => Promise<TData>; // The mutation function (API call)
   mutationType?: "add" | "edit" | "delete"; // Type of mutation
   queryKey: string[]; // Query key for the data to be updated
   dataPath?: string[]; // Path to the data inside the query cache
   filterKey?: string; // Key to identify items for deletion or updating
   options?: {
      onSuccess?: (data: TData) => void; // Optional success callback
      successMessage?: string; // Optional success message
      onError?: (error: Error) => void; // Optional error callback
      errorMessage?: string; // Optional error message
      onSettled?: () => void; // Optional settled callback
   };
}

// Add a type for expected response that includes message
interface ResponseWithMessage {
   message?: string;
}

// Define a Record type for items that can be indexed with string keys
interface IndexableItem {
   [key: string]: any;
}

export const useOptimisticMutation = <
   TData extends ResponseWithMessage = ResponseWithMessage,
   TVariables extends IndexableItem = IndexableItem,
>({
   mutationFn,
   mutationType = "delete",
   queryKey,
   dataPath = ["data"],
   filterKey = "id",
   options,
}: UseOptimisticMutationParams<TData, TVariables>) => {
   const queryClient = useQueryClient();

   const mutationResult = useCustomMutation<TData, TVariables>(
      (mutationData: TVariables) => mutationFn(mutationData),
      {
         onMutate: async (mutationData: TVariables) => {
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
                     ].map((item: IndexableItem) =>
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
                        (item: IndexableItem) =>
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
         onError: (error: Error) => {
            toast.error(
               options?.errorMessage || error.message || "An error occurred",
            );
            options?.onError?.(error);
         },
         onSuccess: (data: TData) => {
            toast.success(options?.successMessage || data.message);
            options?.onSuccess?.(data);
         },
         onSettled: () => {
            debounce(() => {
               queryClient.invalidateQueries({
                  queryKey: queryKey,
               });
            }, 500);
            options?.onSettled?.();
         },
      },
   );

   return mutationResult;
};
