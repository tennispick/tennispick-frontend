export const transferPaymentType = (paymentType: string) => {
  switch (paymentType) {
    case 'card':
      return '카드 결제';
    case 'accountTransfer':
      return '계좌 이체';
    case 'cash':
      return '현금 결제';
    default:
      return '기타';
  }
};

export const transferDiscountType = (discountType: string) => {
  switch (discountType) {
    case 'none':
      return '할인 없음';
    case 'friend':
      return '지인 할인';
    case 'open':
      return '오픈 할인';
    case 'coupon':
      return '쿠폰 할인';
    default:
      return '';
  }
};
