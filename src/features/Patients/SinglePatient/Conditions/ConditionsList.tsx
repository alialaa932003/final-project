import ConditionsItem from "./ConditionsItem";

type ConditionsListProps = {
   conditions: Condition[];
};

function ConditionsList({ conditions }: ConditionsListProps) {
   return (
      <ul className="mx-1 max-h-60 space-y-4 overflow-y-auto p-1">
         {conditions.map((condition) => (
            <ConditionsItem
               key={condition.code + condition.createdAt}
               condition={condition}
            />
         ))}
      </ul>
   );
}

export default ConditionsList;
