import { ReactNode } from "react";
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
import { createDoctor } from "@/services/staff/doctors/createDoctor";
import { QUERY_KEYS } from "@/constants";
import { updateDoctor } from "@/services/staff/doctors/updateDoctor";
import { Form, Formik } from "formik";
import { useCustomQuery } from "@/hooks/useCustomQuery";
import { getOneDoctors } from "@/services/staff/doctors/getOneDoctor";
import InputField from "@/components/form/InputField";
import SelectSearchField from "@/components/form/SelectSearchField";
import SelectField from "@/components/fields/SelectField";

const DEFAULT_INITIAL_VALUES: DoctorRequest = {
   first_name: "",
   last_name: "",
   email: "",
   phone: "",
   specialization_id: "",
};

type AddEditDoctorProps = {
   id?: number;
   triggerButton: ReactNode;
};

function AddEditDoctorDialog({ id, triggerButton }: AddEditDoctorProps) {
   const { data } = useCustomQuery(
      [QUERY_KEYS.DOCTORS, id],
      getOneDoctors({ id }),
      {
         enabled: !!id,
      },
   );

   const { mutate: createDoctorMutate, isPending: isCreatePending } =
      useOptimisticMutation({
         mutationFn: createDoctor,
         queryKey: [QUERY_KEYS.DOCTORS],
         mutationType: "add",
      });
   const { mutate: updateDoctorMutate, isPending: isUpdatePending } =
      useOptimisticMutation({
         mutationFn: updateDoctor,
         queryKey: [QUERY_KEYS.DOCTORS],
         mutationType: "edit",
      });
   const isPending = isCreatePending || isUpdatePending;

   const handleSubmit = (values: DoctorRequest) => {
      if (id) {
         updateDoctorMutate({ id, newData: values });
      } else {
         createDoctorMutate(values);
      }
   };

   return (
      <Dialog>
         <DialogTrigger asChild>{triggerButton}</DialogTrigger>
         <Formik
            initialValues={
               id
                  ? {
                       first_name: data.data?.first_name || "",
                       last_name: data.data?.last_name || "",
                       email: data.data?.email || "",
                       phone: data.data?.phone || "",
                       specialization_id: data.data?.specialization.id || "",
                    }
                  : DEFAULT_INITIAL_VALUES
            }
            onSubmit={handleSubmit}
         >
            {({ values, setFieldValue, submitForm }) => (
               <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                     <DialogTitle>
                        {id ? "Edit Doctor" : "Add Doctor"}
                     </DialogTitle>
                     <DialogDescription>
                        {id
                           ? "Edit the details of the doctor."
                           : "Add a new doctor to the system."}
                     </DialogDescription>
                  </DialogHeader>

                  <Form>
                     <div className="flex flex-wrap gap-2">
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
                     </div>

                     <InputField
                        id="email"
                        name="email"
                        label="Email"
                        placeholder="Enter email"
                        disabled={isPending}
                     />
                     <InputField
                        id="phone"
                        name="phone"
                        label="Phone"
                        placeholder="Enter phone number"
                        disabled={isPending}
                     />

                     <SelectField
                        isUseSearchParam={false}
                        label="Specialization"
                        placeholder="Select specialization"
                        value={values.specialization_id}
                        options={[]}
                        onChange={(value) =>
                           setFieldValue("specialization_id", value)
                        }
                        disabled={isPending}
                     />
                  </Form>

                  <DialogFooter>
                     <Button type="submit" onClick={submitForm}>
                        Save changes
                     </Button>
                  </DialogFooter>
               </DialogContent>
            )}
         </Formik>
      </Dialog>
   );
}

export default AddEditDoctorDialog;
