export type LessonDateType = 'date' | 'day';

export type LessonType = 'private' | 'group';

type LessonListQueryPayload = {
  type: string;
  isSuspense?: boolean;
  isInitialData?: boolean;
};

type LessonListQueryData = {
  id: number;
  centerId: number;
  name: string;
  lessonCount: number;
  price: string;
  isWeekday: string;
  type: string;
  time: number;
  timesAWeek: number;
  status: string;
  createdAt: string;
  updatedAt: string;
};

type LessonDetailQueryPayload = {
  id: string;
};

type LessonDetailData = {
  id: number;
  centerId: number;
  name: string;
  lessonCount: number;
  price: string;
  isWeekday: string;
  type: string;
  time: number;
  timesAweek: number;
  description: string;
  status: string;
  createdAt: string;
  updatedAt: string;
};

export type {
  LessonListQueryPayload,
  LessonListQueryData,
  LessonDetailQueryPayload,
  LessonDetailData,
};
