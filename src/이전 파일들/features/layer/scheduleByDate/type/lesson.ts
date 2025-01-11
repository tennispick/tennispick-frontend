type TransferTimeList = {
  startTime: string;
  endTime: string;
};
type LessonCustomerItemType = TransferTimeList & { isAttendance?: boolean };
type LessonTimeType = LessonCustomerItemType[];

export type { LessonCustomerItemType, LessonTimeType };
