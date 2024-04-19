import CalendarBlackIcon from '@icons/calendar_black.svg';

const formInputList = [
  {
    type: 'lessonDateType',
    fieldType: 'radio',
    title: '강습날짜 유형 선택',
    icon: CalendarBlackIcon,
    alt: 'calendar schedule type icon',
    list: [
      {
        value: 'date',
        label: '날짜로 선택',
      },
      {
        value: 'day',
        label: '요일로 선택',
      },
    ],
  },
  {
    type: 'lessonTime',
    fieldType: 'radio',
    title: '강습시간 선택',
    icon: CalendarBlackIcon,
    alt: 'calendar schedule type icon',
    list: [
      {
        value: '0',
        label: '수강권 시간',
      },
      {
        value: '20',
        label: '20분',
      },
      {
        value: '30',
        label: '30분',
      },
      {
        value: '40',
        label: '40분',
      },
    ],
  },
  // {
  //   type: 'weeklyLessonCount',
  //   fieldType: 'radio',
  //   title: '주 강습횟수 선택',
  //   icon: CalendarBlackIcon,
  //   alt: 'calendar schedule type icon',
  //   list: [
  //     {
  //       value: '1',
  //       label: '1회',
  //     },
  //     {
  //       value: '2',
  //       label: '2회',
  //     },
  //     {
  //       value: '3',
  //       label: '3회',
  //     },
  //     {
  //       value: '4',
  //       label: '4회',
  //     },
  //   ],
  // },
  {
    type: 'coach',
    fieldType: 'select',
    title: '코치 선택',
    icon: CalendarBlackIcon,
    alt: 'calendar schedule type icon',
    list: [
      {
        value: '',
        label: '코치 선택',
      },
    ],
  },
  {
    type: 'court',
    fieldType: 'select',
    title: '코트 선택',
    icon: CalendarBlackIcon,
    alt: 'calendar schedule type icon',
    list: [
      {
        value: '',
        label: '코트 선택',
      },
    ],
  },
];

export { formInputList };
