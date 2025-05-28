interface Specialization {
   id: number;
   name: string;
   description: string;
   color: {
      value: SpecializationColor;
      label: string;
   };
   createdAt: string;
   updatedAt: string;
}

type SpecializationColor = "green" | "yellow" | "sky" | "purple";
