export const supportedLanguages = ["ar", "en"];

export const API_URL = import.meta.env.VITE_API_URL;
export const LIMIT = 20;
export const DEFAULT_LOCALE = "en";

export const BACKEND_SERVICES_BASE_ROUTES = {
   AUTH: "auth",
   STAFF: "staff/api/v1",
   PATIENT: "patient-profile/api",
   BOOKING: "booking/api/v1",
} as const;

export const QUERY_KEYS = {
   DOCTOR: "doctor",
   DOCTORS: "doctors",
   DOCTORS_LOOKUP: "doctorsLookup",
   DOCTOR_AVAILABILITIES: "doctorAvailabilities",
   DOCTOR_AVAILABILITY: "doctorAvailability",
   NURSE: "nurse",
   NURSES: "nurses",
   RECEPTIONIST: "receptionist",
   RECEPTIONISTS: "receptionists",
   CLINIC: "clinic",
   CLINICS: "clinics",
   SPECIALIZATIONS: "specializations",
   SPECIALIZATION: "specialization",
   PATIENT: "patient",
   PATIENTS: "patients",
   MEDICAL_RECORD: "medicalRecord",
   MEDICAL_RECORDS: "medicalRecords",
   PATIENTS_LOOKUP: "patientsLookup",
   BOOKING: "booking",
   BOOKINGS: "bookings",
   SAFF_ANALYTICS: "staffAnalytics",
   PATIENTS_ANALYTICS: "patientsAnalytics",
} as const;
