import { PaymentType } from '@/types/payment';
import { PaymentRefundType } from '@features/customer/type/payment.type';
import { LessonDateType, LessonType } from '@features/lesson/type/lesson.type';
import { DayType } from '@features/schedule/type/schedule.type';

export type CustomerPaymentRefundListApiPayload = {
  customerId: string;
  type: PaymentRefundType;
};

export type CustomerPaymentRefundData = {
  id: number;
  lessonName: string;
  lessonId: number;
  category: 'payment' | 'refund';
  type: PaymentType;
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

export type CoachSalesByDateData = {
  id: number;
  centerId: number;
  centerCoachId: number;
  coachId: number;
  courtId: number;
  customerId: number;
  lessonId: number;
  customerLessonId: number;
  lessonType: LessonType;
  lessonDateType: LessonDateType;
  date: string;
  day: DayType;
  startTime: string;
  endTime: string;
  isReluarLesson: 'Y' | 'N';
  coachAttendance: string;
  customerAttendance: string;
  registerAbleCount: number;
  remainLessonCount: number;
  category: 'payment' | 'refund';
  type: PaymentType;
  discountType: string;
  doscountPrice: number;
  price: string;
  lessonCount: number;
  timePrice: number;
  totalPrice: number;
  refundRange: string;
  refundPrice: string;
  remainPrice: string;
};

export type CustomerPaymentCreateApiPayload = FormData;

export type CustomerRefundCreateApiPayload = FormData;
