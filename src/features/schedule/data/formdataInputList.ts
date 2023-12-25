import CalendarBlackIcon from '@icons/calendar_black.svg';
import CoachBlackIcon from '@icons/coach_black.svg';
import CustomerBlackIcon from '@icons/customer_black.svg';
import CourtBlackIcon from '@icons/court_black.svg';
import LessonCouponBlackIcon from '@icons/lesson_coupon_black.svg';

const commonFormInputList = [
  {
    type: 'scheduleType',
    fieldType: 'radio',
    title: '스케줄 등록유형 선택',
    icon: CalendarBlackIcon,
    alt: 'calendar schedule type icon',
    list: [
      {
        value: 'all',
        label: '일괄등록'
      },
      {
        value: 'individual',
        label: '개별등록'
      }
    ]
  },
  {
    type: 'customer',
    fieldType: 'select',
    title: '회원 선택',
    icon: CustomerBlackIcon,
    alt: 'customer icon'
  },
  {
    type: 'lesson',
    fieldType: 'select',
    title: '수강권 선택',
    icon: LessonCouponBlackIcon,
    alt: 'lesson icon'
  },
]

export {
  commonFormInputList
}