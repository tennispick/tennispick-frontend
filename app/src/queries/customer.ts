import { axios } from 'app/src/utils/axios';

const generateCustomer = async (data: object): Promise<any> =>
  await axios.post('/customer', { data: data });

export { generateCustomer };
