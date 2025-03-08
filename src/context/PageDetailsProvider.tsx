import { createContext, useContext, useState } from "react";

const PageDetailsContext = createContext({
   pageName: "",
   setPageName: (param: string) => {},
   searchKey: "",
   setSearchKey: (param: string) => {},
});

function PageDetailsProvider({ children }: any) {
   const [pageName, setPageName] = useState("");
   const [searchKey, setSearchKey] = useState("");

   return (
      <PageDetailsContext.Provider
         value={{ pageName, setPageName, searchKey, setSearchKey }}
      >
         {children}
      </PageDetailsContext.Provider>
   );
}

function usePageDetails() {
   const context = useContext(PageDetailsContext);
   if (context === undefined)
      throw new Error(
         "PageDetailsContext was used outside of PageDetailsProvider",
      );
   return context;
}

export { PageDetailsProvider, usePageDetails };
