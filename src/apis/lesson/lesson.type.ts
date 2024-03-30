type LessonListApiPayload = {
  type: string;
};

type LessonDetailApiPayload = {
  id: string;
};

type LessonCreateApiPayload = {
  name: string;
  lessonCount: string;
  price: string;
  isWeekday: string;
  type: string;
  time: string;
  timesAweek: string;
  description: string;
};

type LessonUpdateApiPayload = LessonCreateApiPayload & {
  status: string;
};

export type {
  LessonListApiPayload,
  LessonDetailApiPayload,
  LessonCreateApiPayload,
  LessonUpdateApiPayload,
};
