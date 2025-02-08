import FormInput from "@/components/form/FormInput";
import { Button } from "@/components/ui/button";
import { Form, Formik } from "formik";
import React from "react";
import { IoCheckmarkOutline, IoChevronForward } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import BarLoading from "@/components/BarLoading";
import FormSelectSearch from "@/components/form/FormSelectSearch";
import FormDatePicker from "@/components/form/FormDatePicker";
import PhoneNumberForm from "@/components/form/PhoneNumberForm";
import { useSendContact } from "./useSendContact";
import { toast } from "react-toastify";
import { FaGlobe, FaRegUser } from "react-icons/fa";
import { BsFillSendCheckFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { useTranslation } from "react-i18next";
const ContactForm = () => {
   const { t, i18n } = useTranslation("form");
   const navigate = useNavigate();
   const schema = Yup.object().shape({
      email: Yup.string().email().required(t("required")),
      name: Yup.string().required(t("required")),

      nationality: Yup.string().required(t("required")),
      country: Yup.string().required(t("required")),
      gender: Yup.string().required(t("required")),
      mobile_number: Yup.string().required(t("required")),
      first_time_hajj: Yup.number().required(t("required")),
      birthdate: Yup.date().required(t("required")),
   });
   const { sendContact, isPending } = useSendContact();
   return (
      <Formik
         enableReinitialize
         initialValues={{
            email: "",
            name: "",
            country: "",
            gender: "",
            mobile_number: "",
            first_time_hajj: null,
            birthdate: "",
            nationality: "",
         }}
         onSubmit={(values, { resetForm }) => {
            sendContact(values, {
               onSuccess: () => {
                  navigate("/thank-you");
                  resetForm();
               },
               onError: () => {
                  toast.error("Contact form submission failed");
               },
            });
         }}
         validationSchema={schema}
      >
         <Form className="relative mx-auto max-w-[120rem] lg:px-16">
            <div className="flex flex-col gap-12 lg:grid lg:grid-cols-2">
               {isPending && <BarLoading />}
               <FormInput
                  disabled={isPending}
                  name="name"
                  placeholder={t("name")}
                  type="text"
                  icon={<FaRegUser />}
               />
               <FormInput
                  disabled={isPending}
                  name="email"
                  placeholder={t("email")}
                  type="email"
                  icon={<IoIosMail className="text-2xl" />}
               />
               <FormInput
                  disabled={isPending}
                  name="nationality"
                  placeholder={t("nationality")}
                  type="text"
                  icon={<FaGlobe />}
               />
               <FormSelectSearch
                  placeholder={t("country")}
                  name="country"
                  options={countryOptions.map((country) => ({
                     value: country.name.toLocaleLowerCase(),
                     label: country.name,
                  }))}
               />
               <FormSelectSearch
                  placeholder={t("gender")}
                  name="gender"
                  options={[
                     {
                        value: "male",
                        label: t("male"),
                     },
                     {
                        value: "female",
                        label: t("female"),
                     },
                  ]}
               />
               <FormSelectSearch
                  placeholder={t("first-time-hajj")}
                  name="first_time_hajj"
                  options={[
                     {
                        value: 1,
                        label: t("yes"),
                     },
                     {
                        value: 0,
                        label: t("no"),
                     },
                  ]}
               />
               <PhoneNumberForm
                  name="mobile_number"
                  placeholder={t("mobile-number")}
               />
               <FormDatePicker name="birthdate" placeholder={t("birthdate")} />

               <div className="col-span-2 mx-auto mt-8 w-full max-w-[40rem]">
                  <Button
                     disabled={isPending}
                     type="submit"
                     className="w-full gap-4"
                  >
                     {t("send")}
                     <BsFillSendCheckFill className="text-sm" />
                  </Button>
               </div>
            </div>
         </Form>
      </Formik>
   );
};

const countryOptions = [
   { name: "Afghanistan", code: "AF" },
   { name: "land Islands", code: "AX" },
   { name: "Albania", code: "AL" },
   { name: "Algeria", code: "DZ" },
   { name: "American Samoa", code: "AS" },
   { name: "AndorrA", code: "AD" },
   { name: "Angola", code: "AO" },
   { name: "Anguilla", code: "AI" },
   { name: "Antarctica", code: "AQ" },
   { name: "Antigua and Barbuda", code: "AG" },
   { name: "Argentina", code: "AR" },
   { name: "Armenia", code: "AM" },
   { name: "Aruba", code: "AW" },
   { name: "Australia", code: "AU" },
   { name: "Austria", code: "AT" },
   { name: "Azerbaijan", code: "AZ" },
   { name: "Bahamas", code: "BS" },
   { name: "Bahrain", code: "BH" },
   { name: "Bangladesh", code: "BD" },
   { name: "Barbados", code: "BB" },
   { name: "Belarus", code: "BY" },
   { name: "Belgium", code: "BE" },
   { name: "Belize", code: "BZ" },
   { name: "Benin", code: "BJ" },
   { name: "Bermuda", code: "BM" },
   { name: "Bhutan", code: "BT" },
   { name: "Bolivia", code: "BO" },
   { name: "Bosnia and Herzegovina", code: "BA" },
   { name: "Botswana", code: "BW" },
   { name: "Bouvet Island", code: "BV" },
   { name: "Brazil", code: "BR" },
   { name: "British Indian Ocean Territory", code: "IO" },
   { name: "Brunei Darussalam", code: "BN" },
   { name: "Bulgaria", code: "BG" },
   { name: "Burkina Faso", code: "BF" },
   { name: "Burundi", code: "BI" },
   { name: "Cambodia", code: "KH" },
   { name: "Cameroon", code: "CM" },
   { name: "Canada", code: "CA" },
   { name: "Cape Verde", code: "CV" },
   { name: "Cayman Islands", code: "KY" },
   { name: "Central African Republic", code: "CF" },
   { name: "Chad", code: "TD" },
   { name: "Chile", code: "CL" },
   { name: "China", code: "CN" },
   { name: "Christmas Island", code: "CX" },
   { name: "Cocos (Keeling) Islands", code: "CC" },
   { name: "Colombia", code: "CO" },
   { name: "Comoros", code: "KM" },
   { name: "Congo", code: "CG" },
   { name: "Congo, The Democratic Republic of the", code: "CD" },
   { name: "Cook Islands", code: "CK" },
   { name: "Costa Rica", code: "CR" },
   { name: 'Cote D"Ivoire', code: "CI" },
   { name: "Croatia", code: "HR" },
   { name: "Cuba", code: "CU" },
   { name: "Cyprus", code: "CY" },
   { name: "Czech Republic", code: "CZ" },
   { name: "Denmark", code: "DK" },
   { name: "Djibouti", code: "DJ" },
   { name: "Dominica", code: "DM" },
   { name: "Dominican Republic", code: "DO" },
   { name: "Ecuador", code: "EC" },
   { name: "Egypt", code: "EG" },
   { name: "El Salvador", code: "SV" },
   { name: "Equatorial Guinea", code: "GQ" },
   { name: "Eritrea", code: "ER" },
   { name: "Estonia", code: "EE" },
   { name: "Ethiopia", code: "ET" },
   { name: "Falkland Islands (Malvinas)", code: "FK" },
   { name: "Faroe Islands", code: "FO" },
   { name: "Fiji", code: "FJ" },
   { name: "Finland", code: "FI" },
   { name: "France", code: "FR" },
   { name: "French Guiana", code: "GF" },
   { name: "French Polynesia", code: "PF" },
   { name: "French Southern Territories", code: "TF" },
   { name: "Gabon", code: "GA" },
   { name: "Gambia", code: "GM" },
   { name: "Georgia", code: "GE" },
   { name: "Germany", code: "DE" },
   { name: "Ghana", code: "GH" },
   { name: "Gibraltar", code: "GI" },
   { name: "Greece", code: "GR" },
   { name: "Greenland", code: "GL" },
   { name: "Grenada", code: "GD" },
   { name: "Guadeloupe", code: "GP" },
   { name: "Guam", code: "GU" },
   { name: "Guatemala", code: "GT" },
   { name: "Guernsey", code: "GG" },
   { name: "Guinea", code: "GN" },
   { name: "Guinea-Bissau", code: "GW" },
   { name: "Guyana", code: "GY" },
   { name: "Haiti", code: "HT" },
   { name: "Heard Island and Mcdonald Islands", code: "HM" },
   { name: "Holy See (Vatican City State)", code: "VA" },
   { name: "Honduras", code: "HN" },
   { name: "Hong Kong", code: "HK" },
   { name: "Hungary", code: "HU" },
   { name: "Iceland", code: "IS" },
   { name: "India", code: "IN" },
   { name: "Indonesia", code: "ID" },
   { name: "Iran, Islamic Republic Of", code: "IR" },
   { name: "Iraq", code: "IQ" },
   { name: "Ireland", code: "IE" },
   { name: "Isle of Man", code: "IM" },
   { name: "Italy", code: "IT" },
   { name: "Jamaica", code: "JM" },
   { name: "Japan", code: "JP" },
   { name: "Jersey", code: "JE" },
   { name: "Jordan", code: "JO" },
   { name: "Kazakhstan", code: "KZ" },
   { name: "Kenya", code: "KE" },
   { name: "Kiribati", code: "KI" },
   { name: 'Korea, Democratic People"S Republic of', code: "KP" },
   { name: "Korea, Republic of", code: "KR" },
   { name: "Kuwait", code: "KW" },
   { name: "Kyrgyzstan", code: "KG" },
   { name: 'Lao People"S Democratic Republic', code: "LA" },
   { name: "Latvia", code: "LV" },
   { name: "Lebanon", code: "LB" },
   { name: "Lesotho", code: "LS" },
   { name: "Liberia", code: "LR" },
   { name: "Libyan Arab Jamahiriya", code: "LY" },
   { name: "Liechtenstein", code: "LI" },
   { name: "Lithuania", code: "LT" },
   { name: "Luxembourg", code: "LU" },
   { name: "Macao", code: "MO" },
   { name: "Macedonia, The Former Yugoslav Republic of", code: "MK" },
   { name: "Madagascar", code: "MG" },
   { name: "Malawi", code: "MW" },
   { name: "Malaysia", code: "MY" },
   { name: "Maldives", code: "MV" },
   { name: "Mali", code: "ML" },
   { name: "Malta", code: "MT" },
   { name: "Marshall Islands", code: "MH" },
   { name: "Martinique", code: "MQ" },
   { name: "Mauritania", code: "MR" },
   { name: "Mauritius", code: "MU" },
   { name: "Mayotte", code: "YT" },
   { name: "Mexico", code: "MX" },
   { name: "Micronesia, Federated States of", code: "FM" },
   { name: "Moldova, Republic of", code: "MD" },
   { name: "Monaco", code: "MC" },
   { name: "Mongolia", code: "MN" },
   { name: "Montenegro", code: "ME" },
   { name: "Montserrat", code: "MS" },
   { name: "Morocco", code: "MA" },
   { name: "Mozambique", code: "MZ" },
   { name: "Myanmar", code: "MM" },
   { name: "Namibia", code: "NA" },
   { name: "Nauru", code: "NR" },
   { name: "Nepal", code: "NP" },
   { name: "Netherlands", code: "NL" },
   { name: "Netherlands Antilles", code: "AN" },
   { name: "New Caledonia", code: "NC" },
   { name: "New Zealand", code: "NZ" },
   { name: "Nicaragua", code: "NI" },
   { name: "Niger", code: "NE" },
   { name: "Nigeria", code: "NG" },
   { name: "Niue", code: "NU" },
   { name: "Norfolk Island", code: "NF" },
   { name: "Northern Mariana Islands", code: "MP" },
   { name: "Norway", code: "NO" },
   { name: "Oman", code: "OM" },
   { name: "Pakistan", code: "PK" },
   { name: "Palau", code: "PW" },
   { name: "Palestinian Territory, Occupied", code: "PS" },
   { name: "Panama", code: "PA" },
   { name: "Papua New Guinea", code: "PG" },
   { name: "Paraguay", code: "PY" },
   { name: "Peru", code: "PE" },
   { name: "Philippines", code: "PH" },
   { name: "Pitcairn", code: "PN" },
   { name: "Poland", code: "PL" },
   { name: "Portugal", code: "PT" },
   { name: "Puerto Rico", code: "PR" },
   { name: "Qatar", code: "QA" },
   { name: "Reunion", code: "RE" },
   { name: "Romania", code: "RO" },
   { name: "Russian Federation", code: "RU" },
   { name: "RWANDA", code: "RW" },
   { name: "Saint Helena", code: "SH" },
   { name: "Saint Kitts and Nevis", code: "KN" },
   { name: "Saint Lucia", code: "LC" },
   { name: "Saint Pierre and Miquelon", code: "PM" },
   { name: "Saint Vincent and the Grenadines", code: "VC" },
   { name: "Samoa", code: "WS" },
   { name: "San Marino", code: "SM" },
   { name: "Sao Tome and Principe", code: "ST" },
   { name: "Saudi Arabia", code: "SA" },
   { name: "Senegal", code: "SN" },
   { name: "Serbia", code: "RS" },
   { name: "Seychelles", code: "SC" },
   { name: "Sierra Leone", code: "SL" },
   { name: "Singapore", code: "SG" },
   { name: "Slovakia", code: "SK" },
   { name: "Slovenia", code: "SI" },
   { name: "Solomon Islands", code: "SB" },
   { name: "Somalia", code: "SO" },
   { name: "South Africa", code: "ZA" },
   { name: "South Georgia and the South Sandwich Islands", code: "GS" },
   { name: "Spain", code: "ES" },
   { name: "Sri Lanka", code: "LK" },
   { name: "Sudan", code: "SD" },
   { name: "Suriname", code: "SR" },
   { name: "Svalbard and Jan Mayen", code: "SJ" },
   { name: "Swaziland", code: "SZ" },
   { name: "Sweden", code: "SE" },
   { name: "Switzerland", code: "CH" },
   { name: "Syrian Arab Republic", code: "SY" },
   { name: "Taiwan, Province of China", code: "TW" },
   { name: "Tajikistan", code: "TJ" },
   { name: "Tanzania, United Republic of", code: "TZ" },
   { name: "Thailand", code: "TH" },
   { name: "Timor-Leste", code: "TL" },
   { name: "Togo", code: "TG" },
   { name: "Tokelau", code: "TK" },
   { name: "Tonga", code: "TO" },
   { name: "Trinidad and Tobago", code: "TT" },
   { name: "Tunisia", code: "TN" },
   { name: "Turkey", code: "TR" },
   { name: "Turkmenistan", code: "TM" },
   { name: "Turks and Caicos Islands", code: "TC" },
   { name: "Tuvalu", code: "TV" },
   { name: "Uganda", code: "UG" },
   { name: "Ukraine", code: "UA" },
   { name: "United Arab Emirates", code: "AE" },
   { name: "United Kingdom", code: "GB" },
   { name: "United States", code: "US" },
   { name: "United States Minor Outlying Islands", code: "UM" },
   { name: "Uruguay", code: "UY" },
   { name: "Uzbekistan", code: "UZ" },
   { name: "Vanuatu", code: "VU" },
   { name: "Venezuela", code: "VE" },
   { name: "Viet Nam", code: "VN" },
   { name: "Virgin Islands, British", code: "VG" },
   { name: "Virgin Islands, U.S.", code: "VI" },
   { name: "Wallis and Futuna", code: "WF" },
   { name: "Western Sahara", code: "EH" },
   { name: "Yemen", code: "YE" },
   { name: "Zambia", code: "ZM" },
   { name: "Zimbabwe", code: "ZW" },
];
export default ContactForm;
