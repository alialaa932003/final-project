import { ErrorMessage, Field } from "formik";
import React from "react";
import FileInput from "./FileInput";
import { IoCloudUploadOutline } from "react-icons/io5";
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
   label?: string;
   name: string;
}
const FileField = ({ name, label, placeholder, disabled }: Props) => {
   return (
      <Field name={name}>
         {({ field }: any) => (
            <div>
               {label && (
                  <label
                     className="mb-3 block font-medium text-gray-400"
                     htmlFor=""
                  >
                     {label}
                  </label>
               )}
               <FileInput
                  disabled={disabled}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                     const file = event.target.files?.[0];

                     field.onChange({
                        target: {
                           name: field.name,
                           value: file,
                        },
                     });
                  }}
                  placeholder={field.value?.name || field.value || placeholder}
                  icon={<IoCloudUploadOutline />}
               />
               <ErrorMessage
                  className="mt-4 text-red-600"
                  component={"p"}
                  name={name}
               />
            </div>
         )}
      </Field>
   );
};

export default FileField;
