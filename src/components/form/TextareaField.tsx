import { ErrorMessage, Field } from "formik";
import React from "react";
interface ITextareaField
   extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
   name: string;
   label?: string;
   className?: string;
   disabled?: boolean;
}
const TextareaField = ({
   name,
   label,
   placeholder,
   disabled,
}: ITextareaField) => {
   return (
      <Field name={name}>
         {({ field }: { field: any }) => {
            return (
               <div className="relative mb-5 w-full pb-1">
                  {label && (
                     <label
                        className="mb-3 block font-medium text-gray-400"
                        htmlFor=""
                     >
                        {label}
                     </label>
                  )}
                  <textarea
                     rows={2}
                     {...field}
                     placeholder={placeholder}
                     disabled={disabled}
                     className="w-full rounded-2xl bg-primary-50 p-4 text-gray-500 ring-1 ring-gray-100 file:border-0 file:bg-transparent placeholder:text-gray-200 focus-visible:outline-none focus-visible:ring-primary-500 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
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

export default TextareaField;
