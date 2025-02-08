import { createContext, useContext, useState } from "react";

const PageDeitalsContext = createContext({
    pageName: "",
    setPageName: (param: string) => {},
    searchKey: "",
    setSearchKey: (param: string) => {},
});

function PageDeitalsProvider({ children }: any) {
    const [pageName, setPageName] = useState("");
    const [searchKey, setSearchKey] = useState("");

    return (
        <PageDeitalsContext.Provider
            value={{ pageName, setPageName, searchKey, setSearchKey }}
        >
            {children}
        </PageDeitalsContext.Provider>
    );
}

function usePageDeitals() {
    const context = useContext(PageDeitalsContext);
    if (context === undefined)
        throw new Error(
            "PageDeitalsContext was used outside of PageDeitalsProvider",
        );
    return context;
}

export { PageDeitalsProvider, usePageDeitals };
