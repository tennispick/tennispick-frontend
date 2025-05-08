type SettingListApiPayload = {
  type: string;
};

type SettingListData = {
  id: number;
  configuration_id: number;
  is_active: string;
  name_kr: string;
  type: string;
  description: string | null;
};

type SettingActiveStatusApiPayload = {
  id: string;
  isActive: string;
};

export type {
  SettingListApiPayload,
  SettingListData,
  SettingActiveStatusApiPayload,
};
