import NoData from "@/components/feedback/NoData";
import PageLayout from "@/components/layouts/PageLayout";
import WithLoadingAndError from "@/components/WithLoadingAndError";
import { QUERY_KEYS } from "@/constants";
import Header from "@/features/Patients/SinglePatient/Header";
import MedicalRecordsHeader from "@/features/Patients/SinglePatient/MedicalRecordsHeader";
import MedicalRecordsList from "@/features/Patients/SinglePatient/MedicalRecordsList";
import PatientInfoCard from "@/features/Patients/SinglePatient/PatientInfoCard";
import { useCustomQuery } from "@/hooks/useCustomQuery";
import { getOnePatient } from "@/services/patient-related/patient/getOnePatient";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

type Props = {};

function SinglePatient({}: Props) {
   const { t } = useTranslation("patients");
   const { patientId } = useParams<{ patientId: string }>();
   const { data, isLoading, isError } = useCustomQuery(
      [QUERY_KEYS.PATIENT, patientId],
      getOnePatient({ id: patientId }),
   );

   if (!patientId) return <NoData text={t("error.noPatientId")} />;

   return (
      <WithLoadingAndError
         isLoading={isLoading}
         hasError={isError}
         errorText={t("error.fetchingPatient")}
      >
         <PageLayout
            pageName={t("patient")}
            className="flex animate-fade-in flex-col gap-7"
         >
            <Header
               id={patientId}
               patientName={`${data?.data?.firstName} ${data?.data?.lastName}`}
            />
            <PatientInfoCard patient={data?.data} />

            <MedicalRecordsHeader patientId={patientId} />
            <MedicalRecordsList patientId={patientId} />
         </PageLayout>
      </WithLoadingAndError>
   );
}

export default SinglePatient;
