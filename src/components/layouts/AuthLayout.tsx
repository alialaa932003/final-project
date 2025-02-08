import { Navigate, Outlet } from "react-router-dom";
import { UserResponse } from "@/types/auth";
import { useQueryClient } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

const AuthLayout = () => {
   const queryClient = useQueryClient();
   const { i18n } = useTranslation();
   const data = queryClient.getQueryData<{ data: UserResponse }>([
      "current-user",
      i18n.language,
   ]);
   const user = data?.data?.user;
   if (user) {
      return <Navigate to="/" />;
   }
   return <Outlet />;
};

export default AuthLayout;
