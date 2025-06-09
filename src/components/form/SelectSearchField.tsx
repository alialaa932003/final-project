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
   labelKey?: string;
   valueKey?: string;
   optionValue?: string;
   optionLabel?: string;
   onChangeSelect?: (value: any) => void;
}

const SelectSearchField = ({
   label,
   options = [],
   name,
   placeholder,
   multiple = false,
   isDisabled = false,
   labelKey = "label",
   valueKey = "value",
   optionValue = "value",
   optionLabel = "label",
   onChangeSelect,
}: Props) => {
   const transformedOptions = useMemo(
      () =>
         options.map((option) => ({
            label: option[optionLabel],
            value: option[optionValue],
            originalData: {
               [valueKey]: option[optionValue],
               [labelKey]: option[optionLabel],
            },
         })),
      [options, optionLabel, optionValue],
   );

   const compareValues = (fieldValue: any, optionValue: any) => {
      if (!fieldValue) return false;
      return fieldValue[valueKey] == optionValue || fieldValue == optionValue;
   };

   return (
      <Field name={name}>
         {({ field }: { field: any }) => {
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
               onChangeSelect && onChangeSelect(value?.originalData);

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
                        value: value?.originalData || "",
                     },
                  });
               }
            };

            return (
               <div className="relative mb-5 w-full pb-2">
                  {label && (
                     <label className="mb-2 block font-medium text-gray-600">
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
                     className="absolute top-full z-10 text-xs text-red-600"
                     component={"p"}
                     name={name}
                  />
               </div>
            );
         }}
      </Field>
   );
};

export default SelectSearchField;
