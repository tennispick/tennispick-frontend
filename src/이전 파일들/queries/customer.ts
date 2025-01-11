import { axios } from 'src/이전 파일들/utils/axios';

const generateCustomer = async (data: object): Promise<any> =>
  await axios.post('/customer', { data: data });

export { generateCustomer };
