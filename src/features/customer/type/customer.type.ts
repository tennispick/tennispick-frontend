type CustomerLessonListQueryPayload = {
  id: string;
};

type CustomerLessonListQueryData = {
  id: number;
  centerId: number;
  customerId: number;
  centerCoachId: number;
  lessonId: number;
  lessonName: string;
  registerAbleCount: number;
  remainLessonCount: number;
  createdAt: string;
  updatedAt: string;
};

type CustomerDetailQueryPayLoad = {
  id: string;
};

export type {
  CustomerLessonListQueryPayload,
  CustomerLessonListQueryData,
  CustomerDetailQueryPayLoad,
};
