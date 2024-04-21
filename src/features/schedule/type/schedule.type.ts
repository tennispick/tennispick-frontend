import { ChangeEvent } from 'react';

export type DayType = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

type ScheduleLessonByDateQueryPayload = {
  day: Date;
};

type ScheduleLessonByStartDateEndDatePeriodQueryPayload = {
  startDate: Date;
  endDate: Date;
};

type CommonFormInputType = {
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
};

type FormAllOnceCreateType = {
  lessonDateType: string;
  lessonTime: string;
  weeklyLessonCount: string;
  coach: string;
  court: string;
  schedule: Array<ScheduleType>;
};

type DuplicateCheckScheduleLessonQueryPayload = Pick<
  FormAllOnceCreateType,
  'coach' | 'court' | 'schedule'
>;

type FormIndividualCreateType = {
  lessonDateType: string;
  lessonTime: string;
  weeklyLessonCount: string;
  coach: string;
  court: string;
  date: Date;
  day: string;
  startTime: string;
  endTime: string;
};

type FormIndividualHandlerType = {
  index: number;
  handleFormFieldChange: (
    index: number,
    e: ChangeEvent<HTMLSelectElement>,
  ) => void;
};

export type {
  ScheduleLessonByDateQueryPayload,
  ScheduleLessonByStartDateEndDatePeriodQueryPayload,
  CommonFormInputType,
  ScheduleType,
  FormAllOnceCreateType,
  DuplicateCheckScheduleLessonQueryPayload,
  FormIndividualCreateType,
  FormIndividualHandlerType,
};
