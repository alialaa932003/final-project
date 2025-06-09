interface Doctor {
   id: string;
   national_id: string;
   first_name: string;
   last_name: string;
   email: string;
   phone: string;
   specialization: Specialization;
   created_at: string;
   updated_at: string;
}

interface DoctorFullInfo extends Doctor {
   availabilities: Availability[];
}

interface DoctorLookup {
   id: string;
   name: string;
}
