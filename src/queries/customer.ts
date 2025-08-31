import { axiosInstance } from "@lib/axios";

const generateCustomer = async (data: object): Promise<any> =>
  await axiosInstance.post('/customer', { data: data });

export { generateCustomer };
