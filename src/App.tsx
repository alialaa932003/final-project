import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate, Route, Routes } from "react-router-dom";
import DashboardLayout from "./components/layouts/DashboardLayout";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { PageDetailsProvider } from "./context/PageDetailsProvider";
import Unauthorized from "@/pages/Unauthorized";
import AppLayout from "./components/layouts/AppLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthLayout from "./components/layouts/AuthLayout";
import Dashboard from "./pages/Dashboard";
import Doctors from "./pages/staff-management/doctors";
import AllAppointments from "./pages/appointments/AllAppointments";
import Clinics from "./pages/staff-management/clinics";
import Login from "./pages/auth/login";
import Specializations from "./pages/staff-management/specializations";

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
            <PageDetailsProvider>
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
                              <Route path="/staff-management">
                                 <Route
                                    index
                                    path="doctors"
                                    element={<Doctors />}
                                 />
                                 <Route path="clinics" element={<Clinics />} />
                                 <Route
                                    path="specializations"
                                    element={<Specializations />}
                                 />
                              </Route>
                              <Route path="/appointments">
                                 <Route index element={<AllAppointments />} />
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
            </PageDetailsProvider>
         </I18nextProvider>
      </>
   );
}

export default App;
