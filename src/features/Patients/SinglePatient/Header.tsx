import MainHeader from "@/components/MainHeader";
import { useTranslation } from "react-i18next";
import AddEditPatientDialog from "../AddEditPatientDialog";
import { Button } from "@/components/ui/button";
import { FaExternalLinkAlt, FaRegEdit } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

type HeaderProps = {
   id: string;
   patientName: string;
};

function Header({ id, patientName }: HeaderProps) {
   const { t } = useTranslation(["global", "patients"]);
   const navigate = useNavigate();

   const handleGoBack = () => {
      navigate(-1);
   };

   return (
      <MainHeader>
         <MainHeader.TopSection>
            <div className="flex grow items-center gap-2">
               <Button variant="ghost" onClick={handleGoBack}>
                  <IoIosArrowBack /> Back
               </Button>
               <MainHeader.Title title={patientName} />
            </div>
            <MainHeader.Actions>
               <Link
                  to={"https://ai.life-record.buildora.app/"}
                  target="_blank"
               >
                  <Button
                     variant={"outline"}
                     className="flex items-center gap-2"
                  >
                     <FaExternalLinkAlt className="text-lg" />
                     AI Platform
                  </Button>
               </Link>
               <AddEditPatientDialog
                  id={id}
                  triggerButton={
                     <Button className="flex items-center gap-2">
                        Edit Patient
                        <FaRegEdit />
                     </Button>
                  }
               />
            </MainHeader.Actions>
         </MainHeader.TopSection>
      </MainHeader>
   );
}

export default Header;
