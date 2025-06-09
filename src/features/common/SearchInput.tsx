import { ChangeEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { IoIosSearch } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

interface SearchInputProps {
   searchKey: string;
   placeholder?: string;
   className?: string;
}

export default function SearchInput({
   searchKey,
   placeholder,
   className,
}: SearchInputProps) {
   const [searchParams, setSearchParams] = useSearchParams();
   const [searchValue, setSearchValue] = useState(
      searchParams.get(searchKey) || "",
   );
   const { t } = useTranslation("global");
   const defaultPlaceholder = t("search-here");

   const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearchValue(value);
   };

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // setSearchParams((prevSearchParams) => {
      //    if (!searchValue) {
      //       prevSearchParams.delete(searchKey);
      //       return prevSearchParams;
      //    }

      //    prevSearchParams.set(searchKey, searchValue);
      //    return prevSearchParams;
      // });
      setSearchParams({
         [searchKey]: searchValue,
      });
   };

   return (
      <form
         className={cn("relative w-full md:w-[640px]", className)}
         onSubmit={handleSubmit}
      >
         <Input
            defaultValue={searchValue}
            onChange={handleSearchChange}
            placeholder={placeholder || defaultPlaceholder}
            className="w-full pe-16 sm:pe-20"
         />
         <Button
            type="submit"
            className="absolute end-2 top-1/2 z-10 -translate-y-1/2 rounded-2xl sm:end-6"
            size="icon"
         >
            <IoIosSearch className="size-6" />
         </Button>
      </form>
   );
}
