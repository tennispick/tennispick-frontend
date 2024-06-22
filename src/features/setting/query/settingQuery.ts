import { getSettingList } from '@apis/setting/setting.api';
import { SettingListApiPayload } from '@apis/setting/setting.type';
import { URL_FETCH_SETTING_LIST } from '@apis/setting/setting.url';
import { useQuery } from '@tanstack/react-query';

const useSettingListQuery = (params: SettingListApiPayload) => {
  const { type } = params;
  return useQuery({
    queryKey: [URL_FETCH_SETTING_LIST, type],
    queryFn: async () => await getSettingList({ type }),
    select: (data) => data?.data,
  });
};

export { useSettingListQuery };
