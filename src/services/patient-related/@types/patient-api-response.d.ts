interface PatientApiResponseBase {
   status: string;
   message: string;
}

interface PatientApiResponse<TData> extends PatientApiResponseBase {
   data: TData;
}

interface PatientApiResponseWithPagination<TData>
   extends PatientApiResponseBase {
   data: { meta: PatientApiMeta; items: TData };
}
