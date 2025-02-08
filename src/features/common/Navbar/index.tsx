import FormInput from "@/components/form/FormInput";
import MobileGlobalSearch from "@/components/MobileGlobalSearch";
import { usePageDeitals } from "@/context/PageDeitalsContext";
import { Form, Formik } from "formik";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ChangeLanguageBtn from "./ChangeLanguageBtn";

const Navbar = ({
   setOpenRespomsiveSidebar,
}: {
   openResponsiveSidebar: boolean;
   setOpenRespomsiveSidebar: (open: boolean) => void;
}) => {
   const { t } = useTranslation("global");
   const { pageName } = usePageDeitals();
   const [searchParams, setSearchParams] = useSearchParams();

   return (
      <div className="flex h-16 items-center border-b border-transparent bg-gray-0 px-7 shadow-md xl:h-24 2xl:px-10">
         <div className="flex w-full items-center justify-between gap-[3%]">
            <div className="hidden flex-auto items-center gap-4 text-base text-primary-800 lg:flex">
               <span className="text-2xl font-bold 2xl:text-4xl">
                  {pageName}
               </span>
               <div className="hidden flex-1 xl:block">
                  <Formik
                     enableReinitialize
                     initialValues={{ q: searchParams.get("q") || "" }}
                     onSubmit={(values: { q: string }) => {
                        searchParams.set("q", values.q);
                        setSearchParams(searchParams);
                     }}
                  >
                     {({ submitForm }) => (
                        <Form className="max-w-[20rem]">
                           <FormInput
                              className="py-4"
                              name="q"
                              type="text"
                              placeholder={t("search-placeholder")}
                              icon={<IoIosSearch />}
                              iconAction={() => {
                                 submitForm();
                              }}
                           />
                        </Form>
                     )}
                  </Formik>
               </div>
            </div>

            <div className="relative flex flex-auto flex-row-reverse items-center justify-end gap-3 md:gap-6 lg:flex-row">
               <button
                  onClick={() => {
                     setOpenRespomsiveSidebar(true);
                  }}
               >
                  <div className="text-2xl text-primary-500 lg:hidden">
                     <RxHamburgerMenu />
                  </div>
               </button>

               <ChangeLanguageBtn />
               <MobileGlobalSearch className="block lg:block xl:hidden" />
            </div>
         </div>
      </div>
   );
};

export default Navbar;
