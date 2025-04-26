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
import { Form, Formik } from "formik";
import InputField from "@/components/form/InputField";
import TextareaField from "@/components/form/TextareaField";
import { specializationFormValidation } from "./hooks/specializationFormValidation";
import BarLoading from "@/components/BarLoading";
import { useGetOneSpecialization } from "./hooks/useGetOneSpecialization";
import { useCreateSpecialization } from "./hooks/useCreateSpecialization";
import { useUpdateSpecialization } from "./hooks/useUpdateSpecialization";
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

type AddEditSpecializationProps = {
   id?: number;
   triggerButton?: ReactNode;
   isOpen: boolean;
   onOpenChange: (open: boolean) => void;
};

const colorOptions: { value: SpecializationColor; label: string }[] = [
   { value: "green", label: "Green" },
   { value: "yellow", label: "Yellow" },
   { value: "sky", label: "Sky" },
   { value: "purple", label: "Purple" },
];

function AddEditSpecializationDialog({
   id,
   triggerButton,
   isOpen,
   onOpenChange,
}: AddEditSpecializationProps) {
   const { data, isFetching: isGettingSpecialization } =
      useGetOneSpecialization({
         id,
         isOpen,
      });
   const specialization = data?.data;

   const { createSpecializationMutate, isCreatePending } =
      useCreateSpecialization();
   const { updateSpecializationMutate, isUpdatePending } =
      useUpdateSpecialization();

   const isPending =
      isCreatePending || isUpdatePending || isGettingSpecialization;

   return (
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
         <DialogTrigger asChild>{triggerButton}</DialogTrigger>
         <Formik
            enableReinitialize
            initialValues={{
               name: specialization?.name || "",
               description: specialization?.description || "",
               color: specialization?.color || "green",
            }}
            onSubmit={(values, { resetForm }) => {
               if (id) {
                  updateSpecializationMutate(
                     { id, newData: values },
                     {
                        onSuccess: () => {
                           resetForm();
                           onOpenChange(false);
                        },
                     },
                  );
               } else {
                  createSpecializationMutate(values, {
                     onSuccess: () => {
                        resetForm();
                        onOpenChange(false);
                     },
                  });
               }
            }}
            validationSchema={specializationFormValidation}
         >
            {({ values, setFieldValue, submitForm }) => (
               <DialogContent className="sm:max-w-[650px]">
                  {isPending && <BarLoading />}
                  <DialogHeader>
                     <DialogTitle>
                        {id ? "Edit Specialization" : "Add Specialization"}
                     </DialogTitle>
                     <DialogDescription>
                        {id
                           ? "Edit the details of the specialization."
                           : "Add a new specialization to the system."}
                     </DialogDescription>
                  </DialogHeader>

                  <Form className="flex flex-col gap-4">
                     <InputField
                        id="name"
                        name="name"
                        label="Specialization name"
                        placeholder="Enter the specialization name"
                        disabled={isPending}
                        className="min-w-24"
                     />
                     <TextareaField
                        id="description"
                        name="description"
                        label="Description"
                        placeholder="Enter the specialization description"
                        disabled={isPending}
                     />
                     <div className="space-y-2">
                        <Label htmlFor="color">Color</Label>
                        <Select
                           value={values.color}
                           onValueChange={(value) =>
                              setFieldValue("color", value)
                           }
                           disabled={isPending}
                        >
                           <SelectTrigger id="color">
                              <SelectValue placeholder="Select a color" />
                           </SelectTrigger>
                           <SelectContent>
                              {colorOptions.map((option) => (
                                 <SelectItem
                                    key={option.value}
                                    value={option.value}
                                 >
                                    {option.label}
                                 </SelectItem>
                              ))}
                           </SelectContent>
                        </Select>
                     </div>
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

export default AddEditSpecializationDialog;
