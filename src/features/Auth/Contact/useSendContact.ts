import useCustomMutation from "@/hooks/useCustomMutation";

export const useSendContact = () => {
   const { mutate, isPending } = useCustomMutation((data: any) =>
      fetch("https://jannat.o-projects.org/api/v1/submit", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(data),
      }),
   );

   return { sendContact: mutate, isPending };
};
