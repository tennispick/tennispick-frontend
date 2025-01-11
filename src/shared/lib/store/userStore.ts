import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { LoginResponse } from '@/features/auth/type/login.type';

export type State = LoginResponse['payload'];

export type Action = {
  setAdminInfo: (payload: LoginResponse['payload']) => void;
};

type Store = State & Action;

const initialState: State = {
  id: '',
  account: '',
  password: '',
  name: '',
  phone: '',
  role: '',
  centerId: '',
  centerName: '',
  ownerName: '',
  businessNumber: '',
  email: '',
  businessType: '',
  address: '',
  contactNumber: '',
  lessonSettingTime: '',
  businessHours: '',
  businessEndHours: '',
  salaryOption: '',
  salary: 0,
  totalSales: 0,
  totalSalesOption: '',
  individualSalesOption: '',
  individualSales: 0,
  settlementRateOption: '',
  settlementRate: 0,
  vatOption: '',
  insuranceOption: '',
};

export const useUserStore = create<Store>()(
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
