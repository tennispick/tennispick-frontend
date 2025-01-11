import { PaymentRefundItemList } from '../type/payment.type';

const paymentList: PaymentRefundItemList[] = [
  {
    id: 'payment',
    name: '결제내역',
  },
  {
    id: 'refund',
    name: '환불내역',
  },
];

const lessonList = [
  {
    id: 'lesson',
    name: '수강목록',
  },
  {
    id: 'additionalLesson',
    name: '보강현황',
  },
  {
    id: 'memo',
    name: '메모목록',
  },
];

export { paymentList, lessonList };
