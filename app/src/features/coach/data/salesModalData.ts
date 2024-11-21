export type SearchConditionType = (typeof searchConditions)[number]['value'];

export const quickButtonPeriodData = [
  {
    label: '전체',
    value: 'all',
  },
  {
    label: '오늘',
    value: 'today',
  },
  {
    label: '이번 주',
    value: 'thisWeek',
  },
  {
    label: '이번 달',
    value: 'thisMonth',
  },
  {
    label: '저번 달',
    value: 'lastMonth',
  },
  {
    label: '1개월',
    value: 'month',
  },
  {
    label: '3개월',
    value: 'threeMonth',
  },
  {
    label: '6개월',
    value: 'sixMonth',
  },
  {
    label: '직접선택',
    value: 'custom',
  },
];

export const searchConditions = [
  { label: '회원명', value: 'name' },
  { label: '연락처', value: 'phone' },
];
