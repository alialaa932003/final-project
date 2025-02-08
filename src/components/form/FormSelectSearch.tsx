import { ErrorMessage, Field } from "formik";
import React, { useMemo } from "react";
import SelectSearch from "../SelectSearch";

interface Option {
   [key: string]: any;
}

interface Props {
   label?: string;
   options: Option[];
   name: string;
   placeholder?: string;
   multiple?: boolean;
   isDisabled?: boolean;
   valueKey?: string;
   optionValue?: string;
   optionLabel?: string;
}

const FormSelectSearch = ({
   label,
   options,
   name,
   placeholder,
   multiple = false,
   isDisabled = false,
   valueKey = "value",
   optionValue = "value",
   optionLabel = "label",
}: Props) => {
   const transformedOptions = useMemo(
      () =>
         options.map((option) => ({
            label: option[optionLabel],
            value: option[optionValue],
            originalData: option,
         })),
      [options, optionLabel, optionValue],
   );

   const compareValues = (fieldValue: any, optionValue: any) => {
      if (!fieldValue) return false;
      return fieldValue[valueKey] === optionValue || fieldValue === optionValue;
   };

   return (
      <Field name={name}>
         {({ field }: { field: any }) => {
            console.log(field.value);
            const getCurrentValue = () => {
               if (!field.value) return multiple ? [] : null;

               if (multiple) {
                  return transformedOptions.filter((item) =>
                     field.value.some((val: any) =>
                        compareValues(val, item.value),
                     ),
                  );
               }

               return transformedOptions.find((item) =>
                  compareValues(field.value, item.value),
               );
            };

            const handleChange = (value: any) => {
               if (multiple) {
                  const selectedValues =
                     value?.map((item: any) => ({
                        [valueKey]: item.value,
                        // Spread the original data in case we need other properties
                        ...item.originalData,
                     })) || [];

                  field.onChange({
                     target: {
                        name: name,
                        value: selectedValues,
                     },
                  });
               } else {
                  // Single select remains the same
                  field.onChange({
                     target: {
                        name: name,
                        value: value?.originalData || null,
                     },
                  });
               }
            };

            return (
               <div>
                  {label && (
                     <label className="mb-3 block font-medium text-gray-400">
                        {label}
                     </label>
                  )}
                  <SelectSearch
                     multiple={multiple}
                     value={getCurrentValue()}
                     isDisabled={isDisabled}
                     onChange={handleChange}
                     options={transformedOptions}
                     placeholder={placeholder}
                  />
                  <ErrorMessage
                     className="mt-4 text-red-600"
                     component="p"
                     name={name}
                  />
               </div>
            );
         }}
      </Field>
   );
};

export default FormSelectSearch;
