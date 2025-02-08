export interface User {
   id: string;
   email: string;
   phone: string;
   image: string;
   roles: {
      id: string;
      name: string;
   }[];
   locale: string;
   last_name: string;
   first_name: string;
   gender: string;
}
export interface UserResponse {
   token: string;
   user: User;
}
export interface Creadentials {
   password: string;
   email: string;
}

export interface ResetPassword {
   password: string;
   token: string;
   email: string;
   signature: string;
   password_confirmation: string;
}
