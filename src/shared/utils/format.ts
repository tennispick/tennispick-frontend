export const transformDataToSelectOptions = <T extends Record<string, any>>({ data, labelKey, valueKey }: { data: T[], labelKey: string, valueKey: string }) => {
  return data.map((item: T) => ({
    label: item[labelKey],
    value: item[valueKey],
  }));
};