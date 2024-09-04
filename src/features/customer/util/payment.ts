import { PaymentType } from '@/types/payment';

export const transferCategory = (category: 'payment' | 'refund') => {
  switch (category) {
    case 'payment':
      return '결제';
    case 'refund':
      return '환불';
    default:
      return '기타';
  }
};

export const transferPaymentType = (paymentType: PaymentType) => {
  switch (paymentType) {
    case 'all':
      return '전체';
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

export const transferRefundRange = (refundRange: string) => {
  switch (refundRange) {
    case 'full':
      return '전액환불';
    case 'part':
      return '일부환불';
    default:
      return '-';
  }
};
