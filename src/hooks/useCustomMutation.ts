import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { apiCall, ApiCallOptions } from "@/services/apiCall";
import { useNavigate } from "react-router-dom";

const useCustomMutation = <TData, TVariables>(
    mutationFn: (variables: TVariables) => Promise<TData>,
    options?: UseMutationOptions<TData, Error, TVariables>,
) => {
    const navigate = useNavigate();

    return useMutation<TData, Error, TVariables>({
        mutationFn,
        ...options,
        onError: (error: any) => {
            if (error?.status === 401) {
                navigate("/login");
            }
            

            if (options?.onError) {
                options.onError(error, {} as TVariables, null);
            }
        },
    });
};
export default useCustomMutation;
