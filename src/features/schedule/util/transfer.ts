import { LessonDateType, LessonType } from '@features/lesson/type/lesson.type';

export const transferLessonDateType = (lessonDateType: LessonDateType) => {
  switch (lessonDateType) {
    case 'date':
      return '날짜';
    case 'day':
      return '요일';
    default:
      return '';
  }
};

export const transferLessonType = (lessonType: LessonType) => {
  switch (lessonType) {
    case 'private':
      return '개인';
    case 'group':
      return '그룹';
    default:
      return '';
  }
};
