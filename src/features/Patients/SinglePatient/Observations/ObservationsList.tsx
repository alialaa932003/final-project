import ObservationItem from "./ObservationItem";

type ObservationsListProps = {
   observations: Observation[];
};

function ObservationsList({ observations }: ObservationsListProps) {
   return (
      <ul className="mx-1 max-h-60 space-y-4 overflow-y-auto p-1">
         {observations.map((observation) => (
            <ObservationItem
               key={observation.testName + observation.value + observation.unit}
               observation={observation}
            />
         ))}
      </ul>
   );
}

export default ObservationsList;
