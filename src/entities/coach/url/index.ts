export const URL_COACH = '/coach';
export const URL_COACH_DETAIL = (coachId: string) => `${URL_COACH}/${coachId}`;
export const URL_COACH_LESSON_LIST = '/coach/lesson';
export const URL_COACH_CUSTOMERS = (coachId: string) =>
  `${URL_COACH_DETAIL(coachId)}/customers`;
export const URL_COACH_PERFORMANCE = (coachId: string) =>
  `${URL_COACH_DETAIL(coachId)}/performance`;
export const URL_COACH_UPDATE_INCENTIVE = (coachId: string) =>
  `${URL_COACH_DETAIL(coachId)}/incentive`;
