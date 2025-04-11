import UserAvatar1 from "@/../public/images/user.jpg";
import UserAvatar2 from "@/../public/images/user-2.png";
import DoctorCard from "./DoctorCard";
import { useCustomQuery } from "@/hooks/useCustomQuery";
import { getAllDoctors } from "@/services/staff/doctors/getAllDoctors";
import WithLoadingAndError from "@/components/WithLoadingAndError";
import { useTranslation } from "react-i18next";
import TableWrapper from "@/components/TableWrapper";
import { useSearchParams } from "react-router-dom";

function DoctorsList() {
   const { t } = useTranslation("staff");
   const searchParams = useSearchParams()[0];
   const page = searchParams.get("page") || "1";
   const { data, isLoading, isError } = useCustomQuery(
      ["doctors"],
      getAllDoctors({ page }),
   );

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

const DUMMY_DATA: {
   id: number;
   name: string;
   position: {
      name: string;
      color: "green" | "yellow" | "sky" | "purple";
   };
   avatar: string;
}[] = [
   {
      id: 1,
      name: "Salah Mohamed",
      position: {
         name: "Dentist",
         color: "green",
      },
      avatar: UserAvatar1,
   },
   {
      id: 2,
      name: "Ahmed Ali",
      position: {
         name: "Surgeon",
         color: "yellow",
      },
      avatar: UserAvatar2,
   },
   {
      id: 3,
      name: "Ali Alaa",
      position: {
         name: "Surgeon",
         color: "sky",
      },
      avatar: UserAvatar1,
   },
   {
      id: 4,
      name: "Mohamed Salah",
      position: {
         name: "Dentist",
         color: "purple",
      },
      avatar: "",
   },
   {
      id: 5,
      name: "Karim Hassan",
      position: {
         name: "Neurologist",
         color: "sky",
      },
      avatar: UserAvatar1,
   },
   {
      id: 6,
      name: "Omar Khaled",
      position: {
         name: "Cardiologist",
         color: "yellow",
      },
      avatar: UserAvatar2,
   },
   {
      id: 7,
      name: "Yasser Ahmed",
      position: {
         name: "Pediatrician",
         color: "green",
      },
      avatar: UserAvatar1,
   },
   {
      id: 8,
      name: "Hossam Mohamed",
      position: {
         name: "Dentist",
         color: "yellow",
      },
      avatar: "",
   },
   {
      id: 9,
      name: "Tarek Mahmoud",
      position: {
         name: "Surgeon",
         color: "purple",
      },
      avatar: UserAvatar2,
   },
   {
      id: 10,
      name: "Mostafa Ibrahim",
      position: {
         name: "Neurologist",
         color: "sky",
      },
      avatar: UserAvatar1,
   },
   {
      id: 11,
      name: "Amr Samir",
      position: {
         name: "Cardiologist",
         color: "green",
      },
      avatar: "",
   },
   {
      id: 12,
      name: "Hassan Ali",
      position: {
         name: "Pediatrician",
         color: "yellow",
      },
      avatar: UserAvatar2,
   },
   {
      id: 13,
      name: "Mahmoud Khalil",
      position: {
         name: "Dentist",
         color: "purple",
      },
      avatar: UserAvatar1,
   },
   {
      id: 14,
      name: "Khaled Omar",
      position: {
         name: "Surgeon",
         color: "sky",
      },
      avatar: UserAvatar2,
   },
   {
      id: 15,
      name: "Ibrahim Mostafa",
      position: {
         name: "Neurologist",
         color: "purple",
      },
      avatar: "",
   },
   {
      id: 16,
      name: "Samir Amr",
      position: {
         name: "Cardiologist",
         color: "green",
      },
      avatar: UserAvatar1,
   },
];
