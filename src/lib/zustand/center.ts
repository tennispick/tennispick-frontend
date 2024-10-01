import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type State = {
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
  setCenterPaymentSetting: (payload: State) => void;
};

const initialState: State = {
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

type Store = State & Action;

const useCenterPaymentSettingStore = create<Store>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        setCenterPaymentSetting: (payload) => set(payload),
      }),
      { name: 'center-payment-setting' },
    ),
  ),
);

export default useCenterPaymentSettingStore;
