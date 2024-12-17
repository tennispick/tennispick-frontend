import { create } from 'zustand';
import { AdminInfo } from '../../types/admin';
import { devtools, persist } from 'zustand/middleware';

export type State = AdminInfo;

export type Action = {
  setAdminInfo: (payload: AdminInfo) => void;
};

type Store = State & Action;

const initialState = {
  account: '',
  address: '',
  business_end_hours: 0,
  business_hours: 0,
  business_number: '',
  business_type: '',
  center_id: 0,
  contact_number: '',
  email: '',
  exp: 0,
  iat: 0,
  id: 0,
  individualSales: 0,
  individualSalesOption: '',
  insuranceOption: '',
  lesson_setting_time: 0,
  name: '',
  owner_name: '',
  password: '',
  phone: '',
  role: '',
  salary: 0,
  salaryOption: '',
  settlementRate: 0,
  settlementRateOption: '',
  totalSales: 0,
  totalSalesOption: '',
  vatOption: '',
};

const useUserStore = create<Store>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        setAdminInfo: (payload) => set(payload),
      }),
      { name: 'user' },
    ),
  ),
);

export default useUserStore;
