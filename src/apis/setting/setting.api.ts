import { axios } from '@utils/axios';
import {
  URL_CHANGE_SETTING_ACTIVE_STATUS,
  URL_FETCH_SETTING_LIST,
} from './setting.url';
import {
  SettingListApiPayload,
  SettingActiveStatusApiPayload,
  SettingListData,
} from './setting.type';
import { Response } from '@/types/response';

const getSettingList = async (
  params: SettingListApiPayload,
): Promise<Response<SettingListData>> =>
  await axios.get(`${URL_FETCH_SETTING_LIST}?type=${params.type}`);

const updateSettingActiveStatus = async (
  params: SettingActiveStatusApiPayload,
) =>
  await axios.patch(`${URL_CHANGE_SETTING_ACTIVE_STATUS}`, {
    id: params.id,
    isActive: params.isActive,
  });

export { getSettingList, updateSettingActiveStatus };
