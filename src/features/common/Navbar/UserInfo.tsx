import { UserResponse } from "@/types/auth";
import { useQueryClient } from "@tanstack/react-query";
import React from "react";

const UserInfo = () => {
   const queryClient = useQueryClient();
   const data = queryClient.getQueryData<{ data: UserResponse }>([
      "current-user",
   ]);
   const user = data?.data;
   return (
      <div className="flex items-center gap-3">
         <span className="h-12 w-12 overflow-hidden rounded-full">
            <img
               src="https://img.freepik.com/free-photo/half-length-close-up-portrait-young-man-white-shirt-blue-wall_155003-29407.jpg?t=st=1742029193~exp=1742032793~hmac=baccd03d90c3913e51f55c45a30541b28a9736006bdc667b134fd40f3fc3db8a&w=996"
               alt="user"
               className="h-full w-full object-cover"
            />
         </span>
         <div>
            <h3 className="font-medium text-gray-500">
               {user?.firstName} {user?.lastName}
            </h3>
            <span className="rounded-full bg-secondary-500 px-3 py-1 text-[.7rem] text-white">
               {user?.role}
            </span>
         </div>
      </div>
   );
};

export default UserInfo;
