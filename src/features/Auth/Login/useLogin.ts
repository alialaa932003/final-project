import useCustomMutation from "@/hooks/useCustomMutation";
import { login as loginApi } from "@/services/apiAuth";
import { useQueryClient } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useLogin = () => {
   const { i18n } = useTranslation();
   const navigate = useNavigate();
   const queryClient = useQueryClient();
   const { mutate: login, isPending } = useCustomMutation(loginApi, {
      onSuccess: async (data) => {
         localStorage.setItem("token", data.data.token);
         localStorage.setItem("refreshToken", data.data.refreshToken);
         toast.success(data.message);
         await queryClient.invalidateQueries({
            queryKey: ["current-user"],
         });

         navigate("/dashboard");
      },
      onError: (err) => {
         toast.error(err.message);
      },
   });
   return { login, isPending };
};
