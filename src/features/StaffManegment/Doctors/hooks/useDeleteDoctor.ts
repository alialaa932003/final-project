import useCustomMutation from "@/hooks/useCustomMutation";
import { deleteDoctor } from "@/services/staff/doctors/deleteDoctor";
import { useQueryClient } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

export const useDeleteDoctor = () => {
   const { t } = useTranslation("staff");
   const queryClient = useQueryClient();
   const mutationResult = useCustomMutation(deleteDoctor, {
      onMutate: async (newDoctor) => {
         await queryClient.cancelQueries({ queryKey: ["doctors"] });

         const previousDoctors = queryClient.getQueryData([
            "doctors",
         ]) as StaffApiResponseWithPagination<Doctor[]>;

         queryClient.setQueryData(
            ["doctors"],
            (old: StaffApiResponseWithPagination<Doctor[]>) => ({
               ...old,
               data: {
                  ...old.data,
                  items: old?.data.items.filter(
                     (doctor) => doctor.id !== newDoctor.id,
                  ),
               },
            }),
         );

         return { previousDoctors };
      },
      onSuccess: () => {
         toast.success(t("doctor-deleted-successfully"));
      },
      onError: (error) => {
         console.error(error);
         toast.error(t("doctor-deleted-failed"));
      },
      onSettled: () => {
         queryClient.invalidateQueries({ queryKey: ["doctors"] });
      },
   });

   return mutationResult;
};
