import { Creadentials, ResetPassword, UserResponse } from "@/types/auth";
import { apiCall } from "./apiCall";

export const me = async () => {
   return apiCall<any>("auth/me");
};

export const login = async (data: Creadentials) => {
   return apiCall<UserResponse>("auth/login", {
      method: "POST",
      body: JSON.stringify(data),
   });
};
export const logout = async () => {
   return apiCall("auth/logout", {
      method: "POST",
   });
};
export const forgotPassword = async (email: string) => {
   return apiCall<void>("auth/forgot-password", {
      method: "POST",
      body: JSON.stringify({ email }),
   });
};
export const resetPassword = async (data: ResetPassword) => {
   return apiCall<any>(`auth/reset-password?signature=${data.signature}`, {
      method: "POST",
      body: JSON.stringify(data),
   });
};
export const editPassword = async (data: {
   new_password: string;
   old_password: string;
}) => {
   return apiCall<any>("auth/update-password", {
      method: "POST",
      body: JSON.stringify(data),
   });
};

export const verify = async (data: { otp: string }) => {
   return apiCall<any>("auth/verify", {
      method: "POST",
      body: JSON.stringify(data),
   });
};
export const resendOtp = async () => {
   return apiCall<any>("auth/resend-otp", {
      method: "POST",
   });
};

export const completeProfile = async (data: FormData) => {
   return apiCall<any>("auth/update", {
      method: "POST",
      contentType: "multipart/form-data",
      body: data,
   });
};
