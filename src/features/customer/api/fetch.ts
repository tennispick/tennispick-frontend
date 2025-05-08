import { URL_CUSTOMER, URL_CUSTOMER_AVAILABLE_LESSONS } from "@/entities/customer/url";
import { axios } from "@/shared/lib/fetcher/axios"
import { Customer } from "@/shared/types";
import { QueryParams } from "@/shared/types/commons";

export const getCustomers = async (params: QueryParams): Promise<Customer[]> => {
  const { data } = await axios.get(URL_CUSTOMER, { params });
  return data.data;
}

export const getCustomerAvailableLessons = async (keyword: string) => {
  const { data } = await axios.get(URL_CUSTOMER_AVAILABLE_LESSONS(keyword));
  return data;
}
