import {
  commonDataValidationSet,
  allCreateFormDataValidationSet,
  individualCreateFormValidationSet,
} from '../util/inputFormValidationSet';

type CommonListType =
  | Array<{ value: string | number; label: string }>
  | undefined;
type CommonListKeyType = keyof typeof commonDataValidationSet;
type AllFormListKeyType = keyof typeof allCreateFormDataValidationSet;
type IndividualFormListKeyType = keyof typeof individualCreateFormValidationSet;

export type ScheduleFormInputListType = 'coach' | 'court' | 'scheduleType' | 'lessonType' | 'customer' | 'lesson' | 'lessonDateType' | 'lessonTime' | 'weeklyLessonCount';

type TDataCommonList = {
  type: ScheduleFormInputListType;
  fieldType: string;
  title: string;
  icon: string;
  alt: string;
  list: CommonListType;
};

export type {
  CommonListType,
  CommonListKeyType,
  AllFormListKeyType,
  IndividualFormListKeyType,
  TDataCommonList,
};
