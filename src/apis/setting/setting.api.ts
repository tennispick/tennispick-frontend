import {
  URL_CHANGE_SETTING_ACTIVE_STATUS,
  URL_FETCH_SETTING_LIST,
  URL_PAYMENT_SETTING,
} from './setting.url';
import {
  SettingListApiPayload,
  SettingActiveStatusApiPayload,
  SettingListData,
} from './setting.type';
import { Response } from '@/types/response';
import { PaymentFormSchema } from '@features/setting/component/payment/Payment';
import { axiosInstance } from '@lib/axios';

export const getSettingList = async (
  params: SettingListApiPayload,
): Promise<Response<SettingListData[]>> =>
  await axiosInstance.get(`${URL_FETCH_SETTING_LIST}?type=${params.type}`);

export const updateSettingActiveStatus = async (
  params: SettingActiveStatusApiPayload,
) =>
  await axiosInstance.patch(`${URL_CHANGE_SETTING_ACTIVE_STATUS}`, {
    id: params.id,
    isActive: params.isActive,
  });

export const getPaymentSetting = async () =>
  await axiosInstance.get(URL_PAYMENT_SETTING);

export const updatePaymentSetting = async (params: PaymentFormSchema) =>
  await axiosInstance.put(URL_PAYMENT_SETTING, {
    ...params,
  });
