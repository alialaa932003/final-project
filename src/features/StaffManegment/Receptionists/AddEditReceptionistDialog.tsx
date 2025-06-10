import { ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog";
import { useOptimisticMutation } from "@/hooks/useOptimisticMutation";
import { QUERY_KEYS } from "@/constants";
import { Form, Formik, FormikHelpers } from "formik";
import { useCustomQuery } from "@/hooks/useCustomQuery";
import InputField from "@/components/form/InputField";
import { useTranslation } from "react-i18next";
import { Switch } from "@/components/ui/switch";
import { toast } from "react-toastify";
import { receptionistFormValidationSchema } from "./constants/receptionistFormValidationSchema";
import { getOneReceptionist } from "@/services/staff/receptionists/getOneReceptionist";
import { createReceptionist } from "@/services/staff/receptionists/createReceptionist";
import { updateReceptionist } from "@/services/staff/receptionists/updateReceptionist";
import SideBySideInputsContainer from "@/components/SideBySideInputsContainer";

const DEFAULT_INITIAL_VALUES: ReceptionistRequest = {
   first_name: "",
   last_name: "",
   email: "",
   phone: "",
   national_id: "",
   is_active: true,
};

type AddEditReceptionistsProps = {
   id?: string;
   triggerButton: ReactNode;
};

function AddEditReceptionistsDialog({
   id,
   triggerButton,
}: AddEditReceptionistsProps) {
   const [open, setOpen] = useState(false);
   const { t } = useTranslation("staff");
   const { data: receptionist, isLoading: isGettingReceptionist } =
      useCustomQuery(
         [QUERY_KEYS.RECEPTIONIST, id],
         getOneReceptionist({ id }),
         {
            enabled: !!id,
         },
      );

   const { mutate: createReceptionistMutate, isPending: isCreatePending } =
      useOptimisticMutation({
         mutationFn: createReceptionist,
         queryKey: [QUERY_KEYS.RECEPTIONISTS],
         mutationType: "add",
      });
   const { mutate: updateReceptionistMutate, isPending: isUpdatePending } =
      useOptimisticMutation({
         mutationFn: updateReceptionist,
         queryKey: [QUERY_KEYS.RECEPTIONISTS],
         mutationType: "edit",
      });
   const isPending =
      isCreatePending || isUpdatePending || isGettingReceptionist;

   const handleSubmit = (
      values: ReceptionistRequest,
      { resetForm }: FormikHelpers<ReceptionistRequest>,
   ) => {
      if (id) {
         updateReceptionistMutate(
            { id, newData: values },
            {
               onSuccess: () => {
                  setOpen(false);
                  resetForm();
               },
               onError: (error) => {
                  console.error("Error updating receptionists:", error);
               },
            },
         );
      } else {
         createReceptionistMutate(values, {
            onSuccess: () => {
               setOpen(false);
               resetForm();
            },
            onError: (error) => {
               console.error("Error updating receptionists:", error);
            },
         });
      }
   };

   return (
      <Dialog open={open} onOpenChange={setOpen}>
         <DialogTrigger asChild>{triggerButton}</DialogTrigger>
         <Formik
            initialValues={
               id
                  ? {
                       first_name:
                          receptionist?.data?.first_name ||
                          DEFAULT_INITIAL_VALUES.first_name,
                       last_name:
                          receptionist?.data?.last_name ||
                          DEFAULT_INITIAL_VALUES.last_name,
                       email:
                          receptionist?.data?.email ||
                          DEFAULT_INITIAL_VALUES.email,
                       phone:
                          receptionist?.data?.phone ||
                          DEFAULT_INITIAL_VALUES.phone,
                       national_id:
                          receptionist?.data?.national_id ||
                          DEFAULT_INITIAL_VALUES.national_id,
                       is_active:
                          Boolean(receptionist?.data?.is_active) ||
                          DEFAULT_INITIAL_VALUES.is_active,
                    }
                  : DEFAULT_INITIAL_VALUES
            }
            onSubmit={handleSubmit}
            enableReinitialize
            validationSchema={receptionistFormValidationSchema}
         >
            {({ values, setFieldValue, submitForm }) => (
               <DialogContent className="sm:max-w-3xl">
                  <DialogHeader>
                     <DialogTitle>
                        {id ? t("edit") : t("add")} {t("nurse")}
                     </DialogTitle>
                     <DialogDescription>
                        {id
                           ? "Edit the details of the nurse."
                           : "Add a new nurse to the system."}
                     </DialogDescription>
                  </DialogHeader>

                  <Form>
                     <SideBySideInputsContainer>
                        <InputField
                           id="first_name"
                           name="first_name"
                           label="First Name"
                           placeholder="Enter first name"
                           disabled={isPending}
                           className="min-w-24"
                        />
                        <InputField
                           id="last_name"
                           name="last_name"
                           label="Last Name"
                           placeholder="Enter last name"
                           disabled={isPending}
                           className="min-w-24"
                        />
                     </SideBySideInputsContainer>

                     <InputField
                        id="email"
                        name="email"
                        label="Email"
                        placeholder="Enter email"
                        disabled={isPending}
                     />

                     <SideBySideInputsContainer>
                        <InputField
                           id="phone"
                           name="phone"
                           label="Phone"
                           placeholder="Enter phone number"
                           disabled={isPending}
                        />
                        <InputField
                           id="national_id"
                           name="national_id"
                           label="National ID"
                           placeholder="Enter national id number"
                           disabled={isPending}
                        />
                     </SideBySideInputsContainer>

                     <div className="ms-1 flex items-center gap-2">
                        <h3>Is active?</h3>
                        <Switch
                           checked={values.is_active}
                           onCheckedChange={(checked) =>
                              setFieldValue("is_active", checked)
                           }
                        />
                     </div>
                  </Form>

                  <DialogFooter>
                     <Button type="submit" onClick={submitForm}>
                        {id ? "Edit" : "Add"}
                     </Button>
                  </DialogFooter>
               </DialogContent>
            )}
         </Formik>
      </Dialog>
   );
}

export default AddEditReceptionistsDialog;
