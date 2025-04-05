import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MdOutlineMail } from "react-icons/md";
import { RiLock2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { Formik, Form } from "formik";
import InputField from "@/components/form/InputField";
import { useLogin } from "./useLogin";
import FullPageLoading from "@/components/FullPageLoading";
import * as Yup from "yup";
const LoginForm = () => {
   const validationSchema = Yup.object().shape({
      email: Yup.string()
         .email("Invalid email address")
         .required("Email is required"),
      password: Yup.string().required("Password is required"),
   });

   const { login, isPending } = useLogin();
   return (
      <section className="flex w-full max-w-[40rem] flex-col items-center justify-center gap-12 rounded-[1.5rem] bg-gray-0 px-5 py-12 md:px-8 lg:max-w-none lg:py-[15%] xl:px-12">
         {isPending && <FullPageLoading />}
         <img
            className="absolute end-0 top-0 hidden w-full max-w-[6rem] lg:block"
            src="/images/auth/dots.svg"
            alt="dots"
         />
         <img
            className="absolute start-[20%] top-12 hidden w-8 lg:block"
            src="/images/auth/xmark.svg"
            alt="xmark"
         />
         <img
            className="absolute bottom-12 start-[10%] hidden w-16 lg:block"
            src="/images/auth/circles.svg"
            alt="circles"
         />
         <Formik
            onSubmit={(values) => {
               login(values);
            }}
            initialValues={{
               email: "",
               password: "",
            }}
            validationSchema={validationSchema}
         >
            <Form className="w-full max-w-[80rem] animate-fade-up space-y-12">
               <div className="mx-auto flex w-full max-w-[30rem] items-center justify-center gap-4">
                  <img className="w-16" src="/images/logo.svg" alt="logo" />
                  <div>
                     <h1 className="text-3xl font-bold">
                        {" "}
                        LIFE <span className="text-tertiary-500">R</span>
                        ECORD
                     </h1>
                     <p className="text-sm text-gray-400">
                        Your story, securely preserved
                     </p>
                  </div>
               </div>
               <InputField
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email or phone number"
                  label="Email Address"
                  icon={<MdOutlineMail />}
               />
               <InputField
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  label="Password"
                  icon={<RiLock2Line />}
               />
               <Button size={"lg"} className="flex w-full gap-3 font-normal">
                  <FiLogIn className="text-3xl" />
                  Login
               </Button>
            </Form>
         </Formik>
      </section>
   );
};

export default LoginForm;
