import { PaymentRefundType } from '@features/customer/type/payment.type';

export type CustomerPaymentRefundListApiPayload = {
  customerId: string;
  type: PaymentRefundType;
};

export type CustomerPaymentRefundData = {
  id: number;
  lessonName: string;
  lessonId: number;
  category: 'payment' | 'refund';
  type: string;
  isWeekday: string;
  lessonType: string;
  discountType: string;
  discountPrice: number;
  totalPrice: number;
  refundPrice: number;
  remainPrice: number;
  remainLessonCount: number;
  refundRange: string;
  reason: string;
  createdAt: string;
};

export type LessonTotalPaymentData = {
  type: string;
  paymentPrice: string;
  refundPrice: string;
};

export type CoachTotalSalesData = {
  id: number;
  name: string;
  sex: string;
  position: string;
  totalCardPrice: string;
  totalCashPrice: string;
  totalAccountTransferPrice: string;
};

export type CustomerPaymentCreateApiPayload = FormData;

export type CustomerRefundCreateApiPayload = FormData;
