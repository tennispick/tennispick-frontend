import { URL_SEARCH_CUSTOMER_LIST_BY_KEYWORD } from "./customer.url";
import { axios } from "@utils/axios";
import { SearchCustomerListByKeywordApiPayload } from "./customer.type";

const getSearchCustomerListByKeyword = async (params: SearchCustomerListByKeywordApiPayload) => {
  const { keyword } = params;
  const { data } = await axios.get(`${URL_SEARCH_CUSTOMER_LIST_BY_KEYWORD}`,{
    params: {
      keyword: keyword
    }
  });
  return data;
};

export {
  getSearchCustomerListByKeyword
};