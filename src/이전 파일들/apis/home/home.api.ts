import { axios } from 'src/이전 파일들/utils/axios';
import {
  URL_HOME_CUSTOMER_STATISTICS,
  URL_HOME_SALES_STATISTICS,
  URL_HOME_TOTAL_SALES,
} from './home.url';
import { Response } from 'src/이전 파일들/types/response';
import { CustomerStatistics } from 'src/entities/home/type/customer-statistics';
import { AxiosResponse } from 'axios';

export const getCustomerStatistics = async (
  date: Date,
): Promise<AxiosResponse<{ data: CustomerStatistics }>> =>
  await axios.get(`${URL_HOME_CUSTOMER_STATISTICS}?date=${date}`);

export const getSalesStatistics = async (
  date: Date,
): Promise<AxiosResponse<{ data: any }>> =>
  await axios.get(`${URL_HOME_SALES_STATISTICS}?date=${date}`);

export const getTotalSales = async () => await axios.get(URL_HOME_TOTAL_SALES);
