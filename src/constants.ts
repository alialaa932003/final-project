export const supportedLanguages = ["ar", "en"];

export const API_URL = "http://167.71.45.177/";
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
   BOOKING: "booking",
   BOOKINGS: "bookings",
} as const;
