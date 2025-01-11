// TODO URL 변경 Lesson -> LessonTicket
const URL_LESSON_TICKET = '/lesson';
const URL_LESSON_TICKET_DETAIL = (lessonId: string) =>
  `${URL_LESSON_TICKET}/${lessonId}`;

export { URL_LESSON_TICKET, URL_LESSON_TICKET_DETAIL };
