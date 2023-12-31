type ScheduleLessonByDateQueryPayload = {
  day: Date;
}

type FormAllOnceCreateType = {
  lessonDateType: string;
  lessonTime: string;
  weeklyLessonCount: string;
  scheduleType: string;
}

export type{
  ScheduleLessonByDateQueryPayload,
  FormAllOnceCreateType
}