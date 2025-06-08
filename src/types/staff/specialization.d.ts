interface Specialization {
   id: string;
   name: string;
   description: string;
   color: SpecializationColor;
   createdAt: string;
   updatedAt: string;
}

type SpecializationColor = "green" | "yellow" | "sky" | "purple";
