import MedicationsItem from "./MedicationsItem";

type MedicationsListProps = {
   medications: Medication[];
};

function MedicationsList({ medications }: MedicationsListProps) {
   return (
      <ul className="mx-1 max-h-60 space-y-4 overflow-y-auto p-1">
         {medications.map((medication, index) => (
            <MedicationsItem
               key={
                  medication.medicalRecordId +
                  medication.name +
                  medication.frequency +
                  index
               }
               medication={medication}
            />
         ))}
      </ul>
   );
}

export default MedicationsList;
