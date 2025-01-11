import { login } from 'src/이전 파일들/apis/auth/auth.api';
import { LoginPayload } from 'src/이전 파일들/apis/auth/auth.type';
import { URL_AUTH_LOGIN } from 'src/이전 파일들/apis/auth/auth.url';
import { useMutation } from '@tanstack/react-query';

export const useLoginMutation = (handleSuccess: (data: any) => void) => {
  return useMutation({
    mutationKey: [URL_AUTH_LOGIN],
    mutationFn: async (params: LoginPayload) => await login(params),
    onSuccess: ({ data }) => handleSuccess(data),
  });
};
