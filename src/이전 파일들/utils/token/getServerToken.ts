'use server';

import { cookies } from 'next/headers';

export const getServerToken = async () => {
  console.log(cookies());
  const token = cookies().get('userACT')?.value || '';
  console.log(token);
  return token;
};
