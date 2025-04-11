import { API_URL, DEFAULT_LOCALE } from "@/constants";

type ContentType = "application/json" | "multipart/form-data" | undefined;
export interface ApiResponse<TData> {
   message: string;
   data: TData;
}
export interface ApiCallOptions<
   TBody extends BodyInit | null | undefined = BodyInit,
> extends RequestInit {
   contentType?: ContentType;
   body?: TBody;
}

export async function apiCall<
   TResponse,
   TBody extends BodyInit | null | undefined = BodyInit,
>(
   url: string,
   options?: ApiCallOptions<TBody>,
   isJson: boolean = true,
): Promise<TResponse> {
   const {
      contentType = "application/json",
      body,
      ...restOptions
   } = options || {};
   const isFormData = body instanceof FormData;
   const token = localStorage.getItem("token");
   const lang = localStorage.getItem("lang") || DEFAULT_LOCALE;

   const headers: HeadersInit = {
      "accept-language": lang,
      ...(token && { Authorization: `Bearer ${token}` }),
      // ...(contentType === "application/json" && {
      //    "Content-Type": "application/json",
      // }),
      ...(isFormData
         ? {} // Let the browser set the correct headers for FormData
         : { "Content-Type": "application/json", Accept: "application/json" }),
   };

   const response = await fetch(`${API_URL}${url}`, {
      headers,
      body,
      ...restOptions,
   });

   const result = await response.json();

   if (!response.ok) {
      const error: any = new Error(
         `${result.message || "Something went wrong"}`,
      );
      error.status = response.status;
      error.data = result.data || null;
      throw error;
   }

   return isJson ? result : response;
}
