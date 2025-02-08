import { useSearchParams } from "react-router-dom";

export const useGetTableRowIndex = (limit: number, index: number) => {
    const [searchParams] = useSearchParams();
    const page = searchParams.get("page");
    const tableNum = (((page && +page) || 1) - 1) * limit + index;
    return tableNum;
};
