interface MedicalRecord {
   id: string;
   diagnosis: string;
   notes: string;
   createdAt: string;
   patientId: string;
   cachedDoctorId: string;
   medications: Medication[];
   conditions: Condition[];
   observations: Observation[];
}
