export type PaymentRefundType = 'payment' | 'refund';

export type PaymentRefundItemList = {
  id: PaymentRefundType;
  name: string;
};

export type PaymentRefundListQueryPayload = {
  customerId: string;
  type: PaymentRefundType;
};

export type PaymentRefundData = {
  id: number;
  centerId: number;
  adminId: number;
  customerId: number;
  lessonId: number;
  category: PaymentRefundType;
  type: string;
  discountType: string;
  discountPrice: number;
  totalPrice: number;
  createdAt: string;
  udpatedAt: string;
  deletedAt: string;
};
