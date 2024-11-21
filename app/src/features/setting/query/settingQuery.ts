import { getPaymentSetting, getSettingList } from 'app/src/apis/setting/setting.api';
import { SettingListApiPayload } from 'app/src/apis/setting/setting.type';
import {
  URL_FETCH_SETTING_LIST,
  URL_PAYMENT_SETTING,
} from 'app/src/apis/setting/setting.url';
import { useQuery } from '@tanstack/react-query';

export const useSettingListQuery = (params: SettingListApiPayload) => {
  const { type } = params;
  return useQuery({
    queryKey: [URL_FETCH_SETTING_LIST, type],
    queryFn: async () => await getSettingList({ type }),
    select: (data) => data?.data,
  });
};

export const usePaymentSettingQuery = () => {
  return useQuery({
    queryKey: [URL_PAYMENT_SETTING],
    queryFn: async () => await getPaymentSetting(),
    select: (data) => data?.data[0],
  });
};
