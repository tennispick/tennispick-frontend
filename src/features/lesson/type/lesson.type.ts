type LessonListQueryPayload = {
  type: string;
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

export type { LessonListQueryPayload, LessonListQueryData };
