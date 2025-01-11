import { passwordRegex } from '@/shared/utils/regex';
import { z } from 'zod';

export const LoginSchema = z.object({
  id: z.string().min(2, { message: '아이디는 2자 이상이어야 해요.' }),
  password: z.string().regex(passwordRegex, {
    message: '비밀번호는 8자 이상, 영문, 숫자, 특수문자를 포함해야 해요.',
  }),
});
