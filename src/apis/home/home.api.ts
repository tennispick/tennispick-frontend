import { axiosInstance } from '@lib/axios';
import {
  URL_HOME_CUSTOMER_STATISTICS,
  URL_HOME_SALES_STATISTICS,
  URL_HOME_TOTAL_SALES,
} from './home.url';

export const getCustomerStatistics = async (date: Date) =>
  await axiosInstance.get(`${URL_HOME_CUSTOMER_STATISTICS}?date=${date}`);

export const getSalesStatistics = async (date: Date) =>
  await axiosInstance.get(`${URL_HOME_SALES_STATISTICS}?date=${date}`);

export const getTotalSales = async () => await axiosInstance.get(URL_HOME_TOTAL_SALES);
