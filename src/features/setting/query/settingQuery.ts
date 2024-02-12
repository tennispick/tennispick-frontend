import { Response } from '@/types/response';
import { getSettingList } from '@apis/setting/setting.api';
import {
  SettingListApiPayload,
  SettingListData,
} from '@apis/setting/setting.type';
import { URL_FETCH_SETTING_LIST } from '@apis/setting/setting.url';
import { useQuery } from '@tanstack/react-query';

const useSettingListQuery = (params: SettingListApiPayload) => {
  const { type } = params;
  const { data, isLoading } = useQuery<Response<SettingListData>>({
    queryKey: [URL_FETCH_SETTING_LIST, type],
    queryFn: async () => await getSettingList({ type }),
  });
  return { data, isLoading };
};

export { useSettingListQuery };
