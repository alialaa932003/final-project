export interface UserResponse {
   address: string;
   age: number;
   createdAt: string;
   dateOfBirth: string;
   displayName: string;
   email: string;
   firstName: string;
   gender: string;
   id: string;
   lastName: string;
   maritalStatus: string;
   nationalId: string;
   phoneNumber: string;
   refreshToken: string;
   refreshTokenExpiration: string;
   role: string;
   token: string;
}

export interface Creadentials {
   password: string;
   email: string;
}
