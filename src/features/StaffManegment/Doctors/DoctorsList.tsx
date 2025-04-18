import UserAvatar1 from "@/../public/images/user.jpg";
import UserAvatar2 from "@/../public/images/user-2.png";
import DoctorCard from "./DoctorCard";
import WithLoadingAndError from "@/components/WithLoadingAndError";
import { useTranslation } from "react-i18next";
import TableWrapper from "@/components/TableWrapper";
import { useGetAllDoctors } from "./hooks/useGetAllDoctors";

function DoctorsList() {
   const { t } = useTranslation("staff");
   const { data, isLoading, isError } = useGetAllDoctors();

   return (
      <WithLoadingAndError
         isLoading={isLoading}
         hasError={isError}
         errorText={t("no-doctors-found")}
      >
         <TableWrapper
            totalPages={data?.data.meta.last_page}
            noContainerStyle
            className="space-y-8"
         >
            <ul className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4">
               {data?.data.items.map((doctor) => (
                  <li key={doctor.id}>
                     <DoctorCard data={doctor} />
                  </li>
               ))}
            </ul>
         </TableWrapper>
      </WithLoadingAndError>
   );
}

export default DoctorsList;
