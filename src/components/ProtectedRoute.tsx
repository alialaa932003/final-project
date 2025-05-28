import { Navigate, Outlet } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { UserResponse } from "@/types/auth";

interface ProtectedRouteProps {
   allowedRoles: string[];
}

const ProtectedRoute = ({ allowedRoles }: ProtectedRouteProps) => {
   const queryClient = useQueryClient();
   const data = queryClient.getQueryData<{ data: UserResponse }>([
      "current-user",
   ]);
   const user = data?.data;
   // if (!user) {
   //    return <Navigate replace={true} to="/login" />;
   // }
   // if (user.role.toLocaleLowerCase() !== "admin") {
   //    return <Navigate replace={true} to="/unauthorized" />;
   // }
   return (
      <div>
         <Outlet />
      </div>
   );
};

export default ProtectedRoute;
