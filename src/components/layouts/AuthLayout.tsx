import { Navigate, Outlet } from "react-router-dom";
import { UserResponse } from "@/types/auth";
import { useQueryClient } from "@tanstack/react-query";

const AuthLayout = () => {
   const queryClient = useQueryClient();
   const data = queryClient.getQueryData<{ data: UserResponse }>([
      "current-user",
   ]);
   const user = data?.data;
   if (user) {
      return <Navigate to="/" />;
   }
   return <Outlet />;
};

export default AuthLayout;
