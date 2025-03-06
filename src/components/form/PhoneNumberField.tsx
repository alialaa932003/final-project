import { ErrorMessage, Field } from "formik";
import React from "react";
import { CiMobile2 } from "react-icons/ci";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
interface PhoneNumberFieldProps {
   name: string;
   placeholder: string;
}
const PhoneNumberField = ({ name, placeholder }: PhoneNumberFieldProps) => {
   return (
      <Field name={name}>
         {({ field, form }: any) => (
            <div className="relative">
               <PhoneInput
                  className="bg-gray-base/60 z-0 flex h-[5rem] w-full rounded-full bg-white px-7 py-6 text-base font-light text-gray-500 ring-1 ring-gray-100 dark:bg-[#5F666A] dark:placeholder:text-[#B5B8BA] xl:h-[5.5rem] xl:py-8 [&_input]:bg-transparent [&_input]:pe-12 [&_input]:outline-none [&_input]:placeholder:text-gray-200 [&_input]:lang-ar:pe-0 [&_input]:lang-ar:ps-12 [&_input]:lang-ar:text-end"
                  value={field.value}
                  onChange={(value) =>
                     field.onChange({
                        target: {
                           name: field.name,
                           value,
                        },
                     })
                  }
                  placeholder={placeholder}
               />
               <CiMobile2 className="absolute bottom-0 end-8 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center text-[1.7em] opacity-50" />
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

export default PhoneNumberField;
