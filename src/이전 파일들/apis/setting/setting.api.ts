import { axios } from 'src/이전 파일들/utils/axios';
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
import { Response } from 'src/이전 파일들/types/response';
import { PaymentFormSchema } from '@/이전 파일들/features/setting/component/payment/Payment';

export const getSettingList = async (
  params: SettingListApiPayload,
): Promise<Response<SettingListData[]>> =>
  await axios.get(`${URL_FETCH_SETTING_LIST}?type=${params.type}`);

export const updateSettingActiveStatus = async (
  params: SettingActiveStatusApiPayload,
) =>
  await axios.patch(`${URL_CHANGE_SETTING_ACTIVE_STATUS}`, {
    id: params.id,
    isActive: params.isActive,
  });

export const getPaymentSetting = async () =>
  await axios.get(URL_PAYMENT_SETTING);

export const updatePaymentSetting = async (params: PaymentFormSchema) =>
  await axios.put(URL_PAYMENT_SETTING, {
    ...params,
  });
