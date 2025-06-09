import { Navigate, Outlet } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { UserResponse } from "@/types/auth";

interface ProtectedRouteProps {
   allowedRoles: string[];
   children: React.ReactNode;
}

const ProtectedRoute = ({ allowedRoles, children }: ProtectedRouteProps) => {
   const queryClient = useQueryClient();
   const data = queryClient.getQueryData<{ data: UserResponse }>([
      "current-user",
   ]);
   const user = data?.data;
   if (!user) {
      return <Navigate replace={true} to="/login" />;
   }
   if (!allowedRoles.includes(user.role.toLocaleLowerCase())) {
      return <Navigate replace={true} to="/unauthorized" />;
   }
   return <div>{children}</div>;
};

export default ProtectedRoute;
