/**
 * @description 인센티브
 */
export const getIncentiveBySales = (
  sales: number,
  totalSalesRate: number,
  individualRate: number,
) => {
  const incentive = (totalSalesRate / 100 || 1) * (individualRate / 100 || 1);
  return sales * incentive;
};

/**
 * 국민연금: 월급의 4.5%
 * 건강보험: 월급의 3.545%
 * 장기요양보험료: 건강보험료의 12.81%
 * 고용보험: 월급의 0.9%
 */
export const taxRate = {
  nationalPension: 0.045, // 국민연금
  healthInsurance: 0.03545, // 건강보험
  employmentInsurance: 0.1281, // 고용보험
  workersCompensationInsurance: 0.009, // 산재보험
};

export const getSalaryApplyTaxRateBySales = (sales: number) => {
  const nationalPension = sales * taxRate.nationalPension;
  const healthInsurance = sales * taxRate.healthInsurance;
  const employmentInsurance = sales * taxRate.employmentInsurance;
  const workersCompensationInsurance =
    sales * taxRate.workersCompensationInsurance;
  const totalTax =
    nationalPension +
    healthInsurance +
    employmentInsurance +
    workersCompensationInsurance;

  return {
    totalTax,
    nationalPension,
    healthInsurance,
    employmentInsurance,
    workersCompensationInsurance,
  };
};
