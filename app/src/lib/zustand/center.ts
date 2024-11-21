import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export type CenterPaymentState = {
  salaryOption: string;
  salary: number;
  totalSalesOption: string;
  totalSales: number;
  individualSalesOption: string;
  individualSales: number;
  settlementRateOption: string;
  settlementRate: number;
  vatOption: string;
  insuranceOption: string;
};

type Action = {
  setCenterPaymentSetting: (payload: CenterPaymentState) => void;
};

const initialState: CenterPaymentState = {
  salaryOption: 'individualSalary',
  salary: 0,
  totalSalesOption: 'totalSalesNone',
  totalSales: 0,
  individualSalesOption: 'individualSalesNone',
  individualSales: 0,
  settlementRateOption: 'settlementRateNone',
  settlementRate: 0,
  vatOption: 'vatNone',
  insuranceOption: 'insuranceNone',
};

type Store = CenterPaymentState & Action;

const useCenterPaymentSettingStore = create<Store>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,
        setCenterPaymentSetting: (payload) => set(payload),
      }),
      { name: 'center-payment-setting' },
    ),
  ),
);

export default useCenterPaymentSettingStore;
