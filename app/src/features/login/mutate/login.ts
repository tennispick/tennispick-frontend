import { login } from 'app/src/apis/auth/auth.api';
import { LoginPayload } from 'app/src/apis/auth/auth.type';
import { URL_AUTH_LOGIN } from 'app/src/apis/auth/auth.url';
import { useMutation } from '@tanstack/react-query';

export const useLoginMutation = (handleSuccess: (data: any) => void) => {
  return useMutation({
    mutationKey: [URL_AUTH_LOGIN],
    mutationFn: async (params: LoginPayload) => await login(params),
    onSuccess: ({ data }) => handleSuccess(data),
  });
};
