import { useQueryClient } from "@tanstack/react-query";
import useCustomMutation from "./useCustomMutation";
import { toast } from "react-toastify";
import { debounce } from "@/utils/debounce";
import { useTranslation } from "react-i18next";

interface UseOptimisticMutationParams<TData = unknown, TVariables = unknown> {
   mutationFn: (mutationData: TVariables) => Promise<TData>; // The mutation function (API call)
   mutationType?: "add" | "edit" | "delete"; // Type of mutation
   queryKey: string[]; // Query key for the data to be updated
   dataPath?: string[]; // Path to the data inside the query cache
   filterKey?: string; // Key to identify items for deletion or updating
   options?: {
      onSuccess?: (data: TData) => void; // Optional success callback
      successMessageKey?: string; // Optional success message
      onError?: (error: Error) => void; // Optional error callback
      errorMessageKey?: string; // Optional error message
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
   dataPath = ["data", "items"],
   filterKey = "id",
   options,
}: UseOptimisticMutationParams<TData, TVariables>) => {
   const { t } = useTranslation();
   const queryClient = useQueryClient();

   const mutationResult = useCustomMutation<TData, TVariables>(mutationFn, {
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
                  ].map((item: IndexableItem) => {
                     console.log(item, mutationData);
                     return item[filterKey] === mutationData[filterKey]
                        ? { ...item, ...mutationData.newData }
                        : item;
                  });
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
      onSuccess: (data: TData) => {
         const messageKey =
            options?.successMessageKey ||
            data.message ||
            "global:the-action-done-successfully";
         toast.success(t(messageKey));

         options?.onSuccess?.(data);
      },
      onError: (error: Error) => {
         const messageKey =
            options?.errorMessageKey ||
            error.message ||
            "global:something-went-wrong";
         console.error("error", error);
         toast.error(t(messageKey));

         options?.onError?.(error);
      },
      onSettled: () => {
         debounce(() => {
            queryClient.invalidateQueries({
               queryKey: queryKey,
            });
         }, 500);
         options?.onSettled?.();
      },
   });

   return mutationResult;
};
