interface MedicalRecord {
   id: string;
   diagnosis: string;
   notes: string;
   createdAt: string;
   patientId: string;
   medications: Medication[];
   conditions: Condition[];
   observations: Observation[];
}
