export type CustomerStatistics = {
  currentCustomer: {
    lastMonthCustomerCount: number;
    currentCustomerCount: number;
    increasedMembers: number;
    percentage: string;
  };
  expiredCustomer: {
    lastMonthExpiredCustomerCount: number;
    thisMonthExpiredCustomerCount: number;
  };
  newCustomer: {
    lastMonthCustomerCount: number;
    currentCustomerCount: number;
    increasedMembers: number;
    percentage: string;
  };
  reRegisterRate: {
    lastMonthRegisterCount: number;
    currentMonthRegisterCount: number;
    increasedRegisterCount: number;
  };
};
