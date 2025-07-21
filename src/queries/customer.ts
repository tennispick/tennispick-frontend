import { axios } from 'src/shared/utils/axios';

const generateCustomer = async (data: object): Promise<any> =>
  await axios.post('/customer', { data: data });

export { generateCustomer };
