const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface axiosProps {
  url: string;
  cache?: RequestCache;
  method?: 'get' | 'post' | 'put' | 'delete';
}

const axios = async ({
  url,
  cache = 'no-cache',
  method = 'get',
}: axiosProps) => {
  try {

  } catch {

  }
}

export default axios;