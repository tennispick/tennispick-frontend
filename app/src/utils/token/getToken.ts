import { getClientToken } from "./getClientToken"
import { getServerToken } from "./getServerToken"

export const getToken = async () => {
  console.log("getToken 호출");
  const server = await getServerToken()
  console.log(server);
  if (server) return server
  return getClientToken()
}