interface MedicalRecordRequest {
   diagnosis: string;
   notes: string;
   medications: Omit<Medication, "medicalRecordId">[];
   conditions: Omit<Condition, "medicalRecordId" | "createdAt">[];
   observations: Omit<Observation, "medicalRecordId" | "createdAt">[];
}

interface MedicalRecordRequestWithPatientId extends MedicalRecordRequest {
   patientId: string;
}
