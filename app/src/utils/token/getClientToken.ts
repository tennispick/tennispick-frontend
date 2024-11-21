import { getCookie } from "@/shared/lib/cookie"

export const getClientToken = (): string | null => {
  const token = getCookie("userACT")
  return token ?? null
}