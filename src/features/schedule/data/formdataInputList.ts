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
    type: 'lessonType',
    fieldType: 'radio',
    title: '레슨유형 선택',
    icon: CalendarBlackIcon,
    alt: 'calendar schedule type icon',
    list: [
      {
        value: 'private',
        label: '개인레슨'
      },
      {
        value: 'group',
        label: '그룹레슨'
      }
    ]
  },
  {
    type: 'customer',
    fieldType: 'select',
    title: '회원 선택',
    icon: CustomerBlackIcon,
    alt: 'customer icon',
    list: [
      {
        value: '',
        label: '회원 선택'
      }
    ]
  },
  {
    type: 'lesson',
    fieldType: 'select',
    title: '수강권 선택',
    icon: LessonCouponBlackIcon,
    alt: 'lesson icon',
    list: [
      {
        value: '',
        label: '수강권 선택'
      },
    ]
  },
];

const allOnceFormInputList = [
  {
    type: 'lessonDateType',
    fieldType: 'radio',
    title: '강습날짜 유형 선택',
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
    type: 'lessonTime',
    fieldType: 'radio',
    title: '강습시간 선택',
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
    type: 'lessonCountOfWeek',
    fieldType: 'radio',
    title: '주 강습횟수 선택',
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
    type: 'scheduleType',
    fieldType: 'select',
    title: '코치 선택',
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
    type: 'scheduleType',
    fieldType: 'select',
    title: '코트 선택',
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
]

export {
  commonFormInputList,
  allOnceFormInputList
}