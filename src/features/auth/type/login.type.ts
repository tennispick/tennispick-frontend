import { z } from 'zod';
import { LoginSchema } from '../schema';

export type LoginSchemaType = z.infer<typeof LoginSchema>;

export type LoginResponse = {
  accessToken: string;
  payload: {
    id: string;
    account: string;
    password: string;
    name: string;
    phone: string;
    role: string;
    centerId: string;
    centerName: string;
    ownerName: string;
    businessNumber: string;
    email: string;
    businessType: string;
    address: string;
    contactNumber: string;
    lessonSettingTime: string;
    businessHours: string;
    businessEndHours: string;
    salaryOption: string;
    salary: number;
    totalSales: number;
    totalSalesOption: string;
    individualSalesOption: string;
    individualSales: number;
    settlementRateOption: string;
    settlementRate: number;
    vatOption: string;
    insuranceOption: string;
  };
};
