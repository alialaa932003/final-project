import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { UserResponse } from "@/types/auth";
import { useTranslation } from "react-i18next";

interface ProtectedRouteProps {
   allowedRoles: string[];
}

const ProtectedRoute = ({ allowedRoles }: ProtectedRouteProps) => {
   const queryClient = useQueryClient();
   const { i18n } = useTranslation();
   const data = queryClient.getQueryData<{ data: UserResponse }>([
      "current-user",
      i18n.language,
   ]);
   const user = data?.data?.user;

   // if (!user) {
   //    return <Navigate replace={true} to="/login" />;
   // }
   // console.log(user.roles);
   // if (!user.roles.some((role) => allowedRoles.includes(role.name))) {
   //    return <Navigate replace={true} to="/unauthorized" />;
   // }
   return (
      <div>
         <Outlet />
      </div>
   );
};

export default ProtectedRoute;
