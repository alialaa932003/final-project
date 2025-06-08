export const supportedLanguages = ["ar", "en"];

export const API_URL = "http://164.92.241.46/";
export const LIMIT = 20;
export const DEFAULT_LOCALE = "en";

export const BACKEND_SERVICES_BASE_ROUTES = {
   AUTH: "auth",
   STAFF: "staff/api/v1",
   PATIENT: "patient-profile/api",
   BOOKING: "booking/api",
} as const;

export const QUERY_KEYS = {
   DOCTOR: "doctor",
   DOCTORS: "doctors",
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
} as const;
