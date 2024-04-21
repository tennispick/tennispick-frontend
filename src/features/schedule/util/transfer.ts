import { LessonDateType } from "@features/lesson/type/lesson.type";

export const transferLessonDateType = (lessonDateType: LessonDateType) => {
  switch (lessonDateType) {
    case 'date' :
      return '날짜';
    case 'day' :
      return '요일';
    default:
      return '';
  }
}