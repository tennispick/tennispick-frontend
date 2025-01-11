import { URL_HOME_CUSTOMER_STATISTICS, URL_HOME_SALES_STATISTICS } from "@/entities/home/url";
import { axios } from "@/shared/lib/fetcher/axios";

export const getCustomerStatistics = async (date: Date) => 
  await axios.get(URL_HOME_CUSTOMER_STATISTICS, { params: { date } });

export const getSalesStatistics = async (date: Date) => 
  await axios.get(URL_HOME_SALES_STATISTICS, { params: { date } });

export const getTotalSales = () => {

};