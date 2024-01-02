type ScheduleLessonByDateQueryPayload = {
  day: Date;
}

type FormCommonInputType = {
  scheduleType: string;
  lessonType: string;
  customer: Array<string>;
  lessonCoupon: string;
};

type ScheduleType = {
  date: string;
  day: string;
  startTime: Date;
  endTime: Date;
}

type FormAllOnceCreateType = {
  lessonDateType: string;
  lessonTime: string;
  weeklyLessonCount: string;
  coach: string;
  court: string;
  schedule: Array<ScheduleType>
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
  FormCommonInputType,
  ScheduleType,
  FormAllOnceCreateType,
  FormIndividualCreateType
}