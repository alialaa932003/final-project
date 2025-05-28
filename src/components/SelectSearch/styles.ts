export const createSelectStyles = (isDarkMode: boolean) => ({
   control: (provided: any, state: any) => ({
      ...provided,
      width: "100%",
      padding: "1rem",
      borderRadius: "1rem",
      height: "3.2rem",
      fontSize: "1rem",
      color: "rgb(var(--text-gray-500))",
      background: "rgb(var(--primary-50))",
      border: "1px solid rgb(var(--gray-100)) !important",
      boxShadow: state.isFocused ? "0 0 0 1px rgb(var(--primary-500))" : "none",
      outline: "none !important",
      cursor: state.isDisabled ? "not-allowed" : "default",
      opacity: state.isDisabled ? 0.5 : 1,
   }),
   placeholder: (provided: any) => ({
      ...provided,
      color: "rgb(var(--gray-200))",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap !important",
      overflow: "hidden",
   }),
   menu: (provided: any) => ({
      ...provided,
      background: isDarkMode ? "#5F666A" : "#fff",
      zIndex: 55,
   }),
   option: (provided: any, state: any) => ({
      ...provided,
      background: state.isSelected
         ? "rgb(var(--primary-200))"
         : state.isFocused
           ? "rgb(var(--primary-500),0.2)"
           : isDarkMode
             ? "#5F666A"
             : "#fff",
      color: "rgb(var(--text-gray-500))",
      cursor: "pointer",
   }),
   valueContainer: (provided: any) => ({
      ...provided,
      flexWrap: "nowrap",
      overflow: "auto",
   }),
   multiValue: (provided: any) => ({
      ...provided,
      background: "rgb(var(--primary-500))",
      minWidth: "fit-content",
   }),
   multiValueLabel: (provided: any) => ({
      ...provided,
      color: "white",
   }),
   singleValue: (provided: any) => ({
      ...provided,
      color: "rgb(var(--text-gray-500))",
      overflow: "auto",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap !important",
   }),
   multiValueRemove: (styles: any) => ({
      ...styles,
      color: "white",
   }),
   input: (provided: any) => ({
      ...provided,
      color: "rgb(var(--text-gray-500))",
   }),
});
