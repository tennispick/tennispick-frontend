import { LoginPayload } from "@/entities/auth/type";
import { URL_LOGIN } from "@/entities/auth/url";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/features/auth/api/post";
import { LoginResponse } from "../type/login.type";

export const useLoginMutation = (handleMutateSuccess: (data: LoginResponse) => void) => {
  return useMutation({
    mutationKey: [URL_LOGIN],
    mutationFn: async (params: LoginPayload) => await login(params),
    onSuccess: ({ data }) => {
      if (!data) return;
      handleMutateSuccess({ ...data });
    }
  })
};