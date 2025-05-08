import { CustomerMemoType } from 'src/이전 파일들/apis/customer/customer.type';

export const transferCoachPosition = (coachPosition: string) => {
  switch (coachPosition) {
    case 'coach':
      return '코치';
    case 'admin':
      return '관리자';
    default:
      return '';
  }
};

export const transformMemoType = (type: CustomerMemoType) => {
  switch (type) {
    case 'normal':
      return '일반';
    case 'payment':
      return '결제';
    case 'etc':
      return '기타';
    default:
      return '-';
  }
};
