import React from "react";
import Loading from "./Loading";

interface WithLoadingAndErrorProps {
   isLoading: boolean;
   errorText?: string;
   error?: boolean;
   children: React.ReactNode;
}
const WithLoadingAndError = ({
   children,
   isLoading,
   errorText,
   error,
}: WithLoadingAndErrorProps) => {
   return (
      <div>
         {isLoading ? (
            <Loading />
         ) : (
            <>
               {error ? (
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
