import useCustomMutation from "@/hooks/useCustomMutation";
import { logout as logoutApi } from "@/services/apiAuth";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export const useLogout = () => {
   const queryClient = useQueryClient();
   const navigate = useNavigate();
   const { mutate: logout, isPending } = useCustomMutation(() => logoutApi(), {
      onSuccess: (data: { message: string }) => {
         queryClient.clear();
         toast.success(data?.message);
         localStorage.removeItem("token");
         localStorage.removeItem("refreshToken");
         navigate("/login");
      },
      onError: (err) => {
         toast.error(err?.message);
      },
   });
   return { logout, isPending };
};
