import React from "react";
import Loading from "./Loading";

interface WithLoadingAndErrorProps {
   isLoading: boolean;
   errorText?: string;
   hasError?: boolean;
   children: React.ReactNode;
}
const WithLoadingAndError = ({
   children,
   isLoading,
   errorText,
   hasError,
}: WithLoadingAndErrorProps) => {
   return (
      <div>
         {isLoading ? (
            <Loading />
         ) : (
            <>
               {hasError ? (
                  <p className="my-10 text-center text-xl font-medium text-red-500">
                     {errorText}
                  </p>
               ) : (
                  <>{children}</>
               )}
            </>
         )}
      </div>
   );
};

export default WithLoadingAndError;
