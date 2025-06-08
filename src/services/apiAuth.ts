import { Creadentials, UserResponse } from "@/types/auth";
import { apiCall, ApiResponse } from "./apiCall";

export const me = async () => {
   return apiCall<ApiResponse<UserResponse>>("auth/api/Account/get-user", {
      method: "GET",
      headers: {
         tokenRequest: `Bearer ${localStorage.getItem("token")}`,
      },
   });
};

export const login = async (data: Creadentials) => {
   return apiCall<ApiResponse<UserResponse>>("auth/api/Account/login", {
      method: "POST",
      body: JSON.stringify(data),
   });
};
export const logout = async () => {
   return apiCall<any>("auth/api/Account/logout", {
      method: "POST",
      body: JSON.stringify({
         refreshToken: localStorage.getItem("refreshToken"),
      }),
   });
};
