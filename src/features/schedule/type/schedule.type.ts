type ScheduleLessonByDateQueryPayload = {
  day: Date;
}

type FormAllOnceCreateType = {
  lessonDateType: string;
  lessonTime: string;
  weeklyLessonCount: string;
  scheduleType: string;
}

type FormIndividualCreateType = {
  lessonDateType: string;
  lessonTime: string;
  weeklyLessonCount: string;
  coach: string;
  court: string;
  date: string;
  day: string;
  startTime: string | Date;
  endTime: string | Date;
};

export type{
  ScheduleLessonByDateQueryPayload,
  FormAllOnceCreateType,
  FormIndividualCreateType
}