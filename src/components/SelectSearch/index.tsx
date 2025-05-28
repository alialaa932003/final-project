import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useDarkMode } from "@/context/DarkModeContext";
import debounce from "lodash.debounce";
import { SelectSearchProps } from "./types";
import { createSelectStyles } from "./styles";
import VirtualizedMenuList from "./VirtualizedMenuList";
import { cn } from "@/lib/utils";

const SelectSearch: React.FC<SelectSearchProps> = ({
   className,
   options,
   value,
   onChange,
   placeholder,
   multiple,
   isDisabled = false,
}) => {
   const { isDarkMode } = useDarkMode();
   const [inputValue, setInputValue] = useState("");
   const [filteredOptions, setFilteredOptions] = useState(
      options.slice(0, 1000),
   );

   // Simple debounced filter function
   useEffect(() => {
      const handler = debounce(() => {
         if (!inputValue.trim()) {
            setFilteredOptions(options.slice(0, 1000));
            return;
         }

         const lowercasedInput = inputValue.toLowerCase();
         const filtered = options
            .filter((option) =>
               option.label.toLowerCase().includes(lowercasedInput),
            )
            .slice(0, 1000);

         setFilteredOptions(filtered);
      }, 150);

      handler();
      return () => handler.cancel();
   }, [inputValue, options]);

   return (
      <div
         className={cn(
            `w-full flex-col [&>div>div]:py-0 xl:[&>div>div]:py-[0.44rem]`,
            className,
         )}
      >
         <Select
            value={value || null}
            onChange={onChange}
            options={inputValue ? filteredOptions : options.slice(0, 1000)}
            isDisabled={isDisabled}
            placeholder={placeholder}
            isMulti={multiple}
            isClearable
            hideSelectedOptions={false}
            styles={createSelectStyles(isDarkMode)}
            components={{ MenuList: VirtualizedMenuList }}
            classNamePrefix="react-select"
            onInputChange={setInputValue}
            closeMenuOnSelect={!multiple}
         />
      </div>
   );
};

export default SelectSearch;
