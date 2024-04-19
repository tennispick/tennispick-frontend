import CalendarBlackIcon from '@icons/calendar_black.svg';
import CoachBlackIcon from '@icons/coach_black.svg';
import CustomerBlackIcon from '@icons/customer_black.svg';
import CourtBlackIcon from '@icons/court_black.svg';
import LessonCouponBlackIcon from '@icons/lesson_coupon_black.svg';

const createScheduleModalInputList = [
  {
    type: 'scheduleType',
    title: '스케줄 등록유형 선택',
    icon: CalendarBlackIcon,
    alt: 'calendar schedule type icon',
  },
  {
    type: 'customer',
    title: '회원 선택',
    icon: CustomerBlackIcon,
    alt: 'customer icon',
  },
  {
    type: 'lesson',
    title: '수강권 선택',
    icon: LessonCouponBlackIcon,
    alt: 'lesson icon',
  },
];

const createScheduleModalEachInputList = [
  {
    type: 'lessonType',
    title: '강습유형 선택',
    icon: '',
    alt: 'lesson type icon',
  },
  {
    type: 'lessonDateType',
    title: '강습날짜 유형 선택 ',
    icon: '',
    alt: 'lesson type icon',
  },
  {
    type: 'lessonTime',
    title: '강습시간 선택 ',
    icon: '',
    alt: 'lesson type icon',
  },
  // {
  //   type: 'lessonCount',
  //   title: '주 강습횟수 선택 ',
  //   icon: '',
  //   alt: 'lesson type icon',
  // },
  {
    type: 'coach',
    title: '코치 선택',
    icon: CoachBlackIcon,
    alt: 'coach icon',
  },
  {
    type: 'court',
    title: '코트 선택',
    icon: CourtBlackIcon,
    alt: 'court icon',
  },
];

export { createScheduleModalInputList, createScheduleModalEachInputList };
