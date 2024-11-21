export const URL_FETCH_CUSTOMER_LIST = '/customer';
export const URL_FETCH_CUSTOMER_ALL_LESSON_LIST = '/customer/lesson-list';
export const URL_FETCH_CUSTOMER_LESSON_LIST = '/customer/lesson';
export const URL_FETCH_CUSTOMER_LESSON_HISTORY = '/customer/lessonHistory';
export const URL_FETCH_CUSTOMER_LESSON_SCHEDULE_HISTORY_LIST =
  '/customer/lesson-schedule-history';
export const URL_SEARCH_CUSTOMER_LIST_BY_KEYWORD = '/customer/search';
export const URL_DELETE_CUSTOMER = '/customer';
export const URL_UPDATE_CUSTOMER_ATTENDANCE = '/customer/attendance';
export const URL_DELETE_CUSTOMER_LESSON_HISTORY = '/customer/lesson-history';
export const URL_UPDATE_CUSTOMER_LESSON_CANCEL = '/customer/lesson-cancel';
export const URL_CREATE_CUSTOMER_MEMO = '/customer/memo/create';

/**
 * @description
 * GET / POST / DELETE / PUT 회원 Base URL
 */
export const URL_CUSTOMER = '/customer';

/**
 * @description
 * GET / POST / DELETE / PUT 회원 상세 Base URL
 */
export const URL_CUSTOMER_DETAIL = (customerId: string) =>
  `/customer/detail/${customerId}`;

/**
 * @description
 * GET / POST / DELETE / PUT 회원 보강 Base URL
 */
export const URL_CUSTOMER_ADDITIONAL_LESSON = '/customer/additional-lesson';

/**
 * @description
 * GET / POST / DELETE / PUT 회원 메모 Base URL
 */
export const URL_CUSTOMER_MEMO = '/customer/memo';
