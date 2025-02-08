import Select, { components } from "react-select";

import React from "react";
import { useDarkMode } from "@/context/DarkModeContext";
import { cn } from "@/lib/utils";
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
   options: { label: string; value: string | number }[];
   value: any;
   onChange: (value: any) => void;
   isDisabled?: boolean;
}

const SelectSearch: React.FC<Props> = ({
   className,
   options,
   value,
   onChange,
   placeholder,
   multiple,
   isDisabled = false,
}) => {
   const { isDarkMode } = useDarkMode();
   return (
      <div
         className={cn(
            `w-full [&>div>div]:py-0 xl:[&>div>div]:py-[0.44rem]`,
            className,
         )}
      >
         <Select
            value={value || null}
            onChange={(option) => onChange(option)}
            options={options}
            isDisabled={isDisabled}
            placeholder={placeholder}
            isMulti={multiple}
            isClearable
            hideSelectedOptions={false}
            styles={{
               control: (provided, state) => ({
                  ...provided,
                  width: "100%",
                  background: `${isDarkMode ? "#5F666A" : "#fff"}`,
                  zIndex: 5,
                  position: "relative",
                  display: "flex",
                  padding: "1rem",
                  borderRadius: "1rem",
                  fontSize: "1.6rem",
                  color: "rgb(var(--text-gray-500))",
                  border: "1px solid rgb(var(--gray-100)) !important",
                  boxShadow: state.isFocused
                     ? "0 0 0 1px rgb(var(--primary-500))"
                     : "none",
                  outline: "none !important",
                  cursor: state.isDisabled ? "not-allowed" : "default",
                  opacity: state.isDisabled ? 0.5 : 1,
                  "&:focus-visible": {
                     outline: "none",
                     boxShadow: "0 0 0 1px rgb(var(--primary-500))", // focus-visible:ring-primary-600
                  },
               }),
               placeholder: (provided) => ({
                  ...provided,
                  color: "rgb(var(--gray-200))",
               }),
               menu: (provided) => ({
                  ...provided,
                  background: `${isDarkMode ? "#5F666A" : "#fff"}`,
                  zIndex: 55,
               }),

               option: (provided, state) => ({
                  ...provided,
                  background: state.isSelected
                     ? "rgb(var(--primary-200))"
                     : state.isFocused
                       ? "rgb(var(--primary-500),0.2)"
                       : `${isDarkMode ? "#5F666A" : "#fff"}`,
                  color: state.isSelected
                     ? "rgb(var(--text-gray-500))"
                     : "rgb(var(--text-gray-500))",
                  cursor: "pointer",
               }),
               valueContainer: (provided) => ({
                  ...provided,
                  flexWrap: "nowrap",
                  overflow: "auto",
               }),

               multiValue: (provided) => ({
                  ...provided,
                  background: "rgb(var(--primary-500))",
                  minWidth: "fit-content",
               }),
               multiValueLabel: (provided) => ({
                  ...provided,
                  color: "white",
               }),
               singleValue: (provided) => ({
                  ...provided,
                  color: "rgb(var(--text-gray-500))",
                  overflow: "auto",
               }),
               input: (provided) => ({
                  ...provided,
                  color: "rgb(var(--text-gray-500))",
               }),
            }}
            components={{ MenuList }}
         />
      </div>
   );
};
const MenuList = (props: any) => {
   return (
      <components.MenuList {...props}>
         {Array.isArray(props.children)
            ? props.children.slice(0, 50)
            : props.children}
      </components.MenuList>
   );
};
export default SelectSearch;
