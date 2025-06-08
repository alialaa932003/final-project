interface NurseRequest {
   national_id: string;
   first_name: string;
   last_name: string;
   email: string;
   phone: string;
   is_active?: boolean;
   clinic_id: string;
}
