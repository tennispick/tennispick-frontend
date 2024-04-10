const paymentTypeList = [
  {
    value: 'card', // 카드결제
    label: '카드 결제',
  },
  {
    value: 'accountTransfer', // 계좌이체
    label: '계좌 이체',
  },
  {
    value: 'cash', // 현금
    label: '현금 결제',
  },
];

const discountTypeList = [
  {
    value: 'none',
    label: '할인 없음',
  },
  {
    value: 'open',
    label: '오픈 할인',
  },
  {
    value: 'friend',
    label: '지인 할인',
  },
  {
    value: 'coupon',
    label: '쿠폰 할인',
  },
];

export { paymentTypeList, discountTypeList };
