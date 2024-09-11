import { CoachPositionType } from '@/types/coach';
import { SexType } from '@/types/index';
import { PaymentType } from '@/types/payment';
import { SearchConditionType } from '@features/coach/data/salesModalData';

export type CoachListData = {
  id: number;
  name: string;
  phone: string;
  email: string;
  sex: string;
  birth: string;
  age: string;
  coachColor: string;
  position: string;
  createdAt: string;
  updatedAt: string;
};

export type CoachLessonListData = {
  id: number;
  name: string;
  birth: string;
  phone: string;
  color: string;
  customerLessonCount: number;
  sex: string;
  position: string;
};

export type CoachDetailData = {
  id: number;
  name: string;
  birth: string;
  sex: SexType;
  phone: string;
  email: string;
  color: string;
  position: CoachPositionType;
  profileImageUrl: string;
  loginAt: string;
};

export type CoachDeleteApiPayload = {
  coachId: string;
};

export type CoachTotalSalesPayload = {
  page: number;
  coachId: string;
  checkedItem: string;
  startDate: string;
  endDate: string;
  searchCondition: SearchConditionType;
  keyword: string;
  paymentType: PaymentType;
};

export type CoachTotalSalesData = {
  customerLessonId: number;
  customerName: string;
  customerPhone: string;
  lessonName: string;
  category: 'payment' | 'refund';
  type: PaymentType;
  discountType: string;
  discountPrice: number;
  totalPrice: number;
  refundRange: string;
  refundPrice: number;
  reason: string;
  remainPrice: number;
  createdAt: string;
  updatedAt: string;
};

export type CoachCustomersData = {
  centerId: number;
  customerId: number;
  name: string;
  lessonName: string;
  price: number;
  birth: string;
  sex: SexType;
  phone: string;
  recentLessonTime: string;
  nextLessonTime: string;
  profileImageUrl: string | null;
  termsAgree: 'Y' | 'N';
  registerAbleCount: number;
  remainLessonCount: number;
  createdAt: string;
  updatedAt: string;
};

export type CoachCustomersPayload = {
  page: number;
  coachId: string;
  checkedItems: string[];
  keyword: string;
  searchCondition: string;
};
