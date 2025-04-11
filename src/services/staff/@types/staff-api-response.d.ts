interface StaffApiResponseBase {
   status: string;
   message: string;
}

interface StaffApiResponse<TData> extends StaffApiResponseBase {
   data: TData;
}

interface StaffApiResponseWithPagination<TData> extends StaffApiResponseBase {
   data: { meta: StaffApiMeta; items: TData };
}
