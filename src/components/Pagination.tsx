import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";

interface Props {
   pageCount: number;
}

export default function Pagination({ pageCount }: Props) {
   const [searchParams, setSearchParams] = useSearchParams();
   const currentPage = Number(searchParams.get("page")) || 1;

   const handlePageClick = ({ selected }: { selected: number }) => {
      searchParams.set("page", (selected + 1).toString());
      setSearchParams(searchParams);
   };
   if (pageCount <= 1) return null;
   return (
      <ReactPaginate
         nextLabel={
            <button
               className={`border border-primary-100 ${currentPage === pageCount ? "cursor-not-allowed bg-primary-50 text-primary-500 dark:bg-[#5F666A] dark:text-white" : "bg-primary-500 text-white"} hidden items-center gap-1.5 rounded-xl px-5 py-3 text-base md:flex`}
            >
               Next
               <FaArrowRight className="text-base lang-ar:rotate-180" />
            </button>
         }
         onPageChange={handlePageClick}
         pageRangeDisplayed={4}
         marginPagesDisplayed={1}
         pageCount={pageCount}
         previousLabel={
            <button
               className={`border border-primary-100 ${currentPage === 1 ? "cursor-not-allowed bg-primary-50 text-primary-500 dark:bg-[#5F666A] dark:text-white" : "bg-primary-500 text-white"} hidden items-center gap-1.5 rounded-xl px-5 py-3 text-base md:flex`}
            >
               <FaArrowLeft className="text-sm lang-ar:rotate-180" /> Previous
            </button>
         }
         // pageClassName="h-11 w-11 grid place-items-center rounded-xl cursor-pointer text-gray-800"
         pageLinkClassName=" text-lg w-12 h-12 flex justify-center items-center transition-all border border-primary-100  rounded-[1rem] bg-primary-50  dark:bg-[#5F666A] dark:text-white hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 dark:hover:text-white "
         breakLabel={"....."}
         containerClassName="flex w-full justify-end  items-center gap-1.5"
         activeLinkClassName="bg-primary-500 text-[#fff] dark:bg-primary-500"
         initialPage={currentPage - 1}
      />
   );
}
