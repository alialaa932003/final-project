interface Patient {
   id: string;
   firstName: string;
   lastName: string;
   nationalID: string;
   age: number;
   address: string;
   phoneNumber: string;
   email: string;
   bloodType: BloodType;
   maritalStatus: MaritalStatus;
   gender: Gender;
   dateOfBirth: string;
   createdAt: string;
}
interface PatientLookup {
   id: string;
   firstName: string;
   lastName: string;
}