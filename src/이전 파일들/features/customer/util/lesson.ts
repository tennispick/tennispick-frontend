export const LessonStatus = (
  centerCoachId: number | null,
  remainLessonCount: number,
  registerAbleCount: number,
): string => {
  if (centerCoachId === null) return '등록필요';
  else if (remainLessonCount === 0) return '수강종료';
  else if (remainLessonCount === registerAbleCount && remainLessonCount > 0)
    return '시작전';
  else if (remainLessonCount !== registerAbleCount && remainLessonCount > 0)
    return '수강중';
  else return '수강대기';
};
