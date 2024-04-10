import { PaymentRefundType } from '@features/customer/type/payment.type';

export type CustomerPaymentRefundListApiPayload = {
  customerId: string;
  type: PaymentRefundType;
};

export type CustomerPaymentRefundData = {
  id: number;
  lessonName: string;
  type: string;
  isWeekday: string;
  lessonType: string;
  discountType: string;
  discountPrice: number;
  totalPrice: number;
};

export type CustomerPaymentCreateApiPayload = FormData;
