import MainHeader from "@/components/MainHeader";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { FaRegEdit } from "react-icons/fa";
import AddEditMedicalRecordDialog from "./AddEditMedicalRecordDialog";

type MedicalRecordsHeaderProps = {
   patientId: string;
};

function MedicalRecordsHeader({ patientId }: MedicalRecordsHeaderProps) {
   const { t } = useTranslation(["global", "patients"]);

   return (
      <MainHeader>
         <MainHeader.TopSection>
            <MainHeader.Title title="Medical Records" />
            <MainHeader.Actions>
               <AddEditMedicalRecordDialog
                  patientId={patientId}
                  triggerButton={
                     <Button className="flex items-center gap-2">
                        Add Medical Record
                        <FaRegEdit />
                     </Button>
                  }
               />
            </MainHeader.Actions>
         </MainHeader.TopSection>
      </MainHeader>
   );
}

export default MedicalRecordsHeader;
