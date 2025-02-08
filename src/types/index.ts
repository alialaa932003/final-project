export interface PaginationResponse {
   pagination: {
      total: number;
      count: number;
      current_page: number;
      total_pages: number;
      per_page: number;
   };
}

export type OptionsResponse = Option[];

export interface Option {
   value: number | string;
   name: string;
}

export interface ErrorResponse {
   message?: string;
   data?: any;
   status?: number;
}
/********* settings *********** */
export interface ProviderSettings {
   booking_requires_company_admin_approval: string;
}

/********* roles *********** */

export interface Permission {
   name: string;
   has_permission: boolean;
   group_name: string;
   display_name: string;
}
export interface UserPermissions {
   [key: string]: Permission[];
}

export interface Role {
   name: string;
   displayName: string;
   usersCount: number;
}

/******* settings ******** */
export interface Settings {
   cancellation_fees?: string;
   tax?: string;
   enable_notification: string;
}

export interface SettingRequest {
   settings: {
      [key: string]: string | boolean | number;
   };
}

export interface GlobalError {
   message: string;
   data?: any;
}
