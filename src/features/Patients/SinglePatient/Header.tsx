import MainHeader from "@/components/MainHeader";
import { useTranslation } from "react-i18next";
import AddEditPatientDialog from "../AddEditPatientDialog";
import { Button } from "@/components/ui/button";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
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
