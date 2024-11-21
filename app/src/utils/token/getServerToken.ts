'use server'

import { cookies } from 'next/headers'

export const getServerToken = async () => {
  const token = cookies().get('userACT')?.value || ''
  return token
}
