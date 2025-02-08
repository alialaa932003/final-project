import { create } from "zustand";

interface ErrorState {
   errors: {
      row_number: number;
      errors: string[];
   }[];

   setErrors: (errors: { row_number: number; errors: string[] }[]) => void;
   clearErrors: () => void;
}

export const useErrorStore = create<ErrorState>((set) => ({
   errors: [],
   setErrors: (errors: { row_number: number; errors: string[] }[]) =>
      set({ errors }),
   clearErrors: () => set({ errors: [] }),
}));
