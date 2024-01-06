type ScheduleLessonByDateQueryPayload = {
  day: Date;
}

type ScheduleMutationDataPayload = {

};

type FormCommonInputType = {
  scheduleType: string;
  lessonType: string;
  customer: Array<{
    id: string;
    name: string;
  }>;
  lesson: string;
};

type ScheduleType = {
  date: Date;
  day: string;
  startTime: string;
  endTime: string;
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
  ScheduleMutationDataPayload,
  FormCommonInputType,
  ScheduleType,
  FormAllOnceCreateType,
  FormIndividualCreateType
}