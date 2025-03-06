import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate, Route, Routes } from "react-router-dom";
import DashboardLayout from "./components/layouts/DashboardLayout";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { PageDeitalsProvider } from "./context/PageDeitalsContext";
import Unauthorized from "@/pages/Unauthorized";
import LanguageWrapper from "@/components/LanguageWrapper";
import Login from "@/pages/auth/Login";
import AppLayout from "./components/layouts/AppLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthLayout from "./components/layouts/AuthLayout";
import Dashboard from "./pages/Dashboard";

function App() {
   const queryClient = new QueryClient({
      defaultOptions: {
         queries: {
            staleTime: 0,
            refetchOnWindowFocus: false,
            retry: 0,
         },
      },
   });

   return (
      <>
         <I18nextProvider i18n={i18n}>
            <PageDeitalsProvider>
               {/* <DarkModeProvider> */}
               <QueryClientProvider client={queryClient}>
                  <ReactQueryDevtools initialIsOpen={false} />
                  <Routes>
                     <Route path="/" element={<Navigate to={"/dashboard"} />} />
                     <Route
                        element={
                           // <LanguageWrapper>
                           <AppLayout />
                           // </LanguageWrapper>
                        }
                     >
                        <Route element={<AuthLayout />}>
                           <Route path="/login" element={<Login />} />
                        </Route>
                        <Route element={<DashboardLayout />}>
                           <Route
                              element={
                                 <ProtectedRoute
                                    allowedRoles={["super-admin"]}
                                 />
                              }
                           >
                              <Route path="/dashboard">
                                 <Route index element={<Dashboard />} />
                              </Route>
                           </Route>
                        </Route>
                        <Route
                           path="/unauthorized"
                           element={<Unauthorized />}
                        />
                        {/* <Route path="*" element={<NotFound />} /> */}
                     </Route>
                  </Routes>

                  <ToastContainer theme="colored" />
               </QueryClientProvider>
               {/* </DarkModeProvider> */}
            </PageDeitalsProvider>
         </I18nextProvider>
      </>
   );
}

export default App;
