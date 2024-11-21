import { getClientToken } from "./getClientToken"
import { getServerToken } from "./getServerToken"

export const getToken = async () => {
  const server = await getServerToken()
  if (server) return server
  return getClientToken()
}