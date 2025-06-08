interface Nurse {
   id: string;
   national_id: string;
   first_name: string;
   last_name: string;
   email: string;
   phone: string;
   is_active: number;
   clinic: Clinic;
   created_at: string;
   updated_at: string;
}
