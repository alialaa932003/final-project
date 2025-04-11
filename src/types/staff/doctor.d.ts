interface Doctor {
   id: number;
   first_name: string;
   last_name: string;
   email: string;
   phone: string;
   profile_picture: string;
   specialization: Specialization;
   created_at: string;
   updated_at: string;
}

interface DoctorFullInfo extends Doctor {
   availabilities: Availability[];
}
