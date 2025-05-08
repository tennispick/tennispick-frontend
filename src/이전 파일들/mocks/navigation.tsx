import { nanoid } from 'nanoid';
import HomeWhiteIcon from '@icons/layout/home_white.svg';
import CalendarWhiteIcon from '@icons/layout/calendar_white.svg';
import CustomerWhiteIcon from '@icons/layout/customer_white.svg';
import CoachWhiteIcon from '@icons/layout/coach_white.svg';
import CourtWhiteIcon from '@icons/layout/court_white.svg';
import LessonCouponWhiteIcon from '@icons/layout/lesson_coupon_white.svg';
import CommunityWhiteIcon from '@icons/layout/community_white.svg';
import StatisticsWhiteIcon from '@icons/layout/statistics_white.svg';
import SettingWhiteIcon from '@icons/layout/setting_white.svg';

export const NavigationList = [
  {
    id: nanoid(),
    path: '',
    label: '홈',
    src: (className?: string) => <HomeWhiteIcon className={className} />,
    alt: 'home icon',
  },
  {
    id: nanoid(),
    path: 'schedule',
    label: '스케줄 관리',
    src: (className?: string) => <CalendarWhiteIcon className={className} />,
    alt: 'calendar icon',
  },
  {
    id: nanoid(),
    path: 'customer',
    label: '회원 관리',
    src: (className?: string) => <CustomerWhiteIcon className={className} />,
    alt: 'customer icon',
  },
  {
    id: nanoid(),
    path: 'coach',
    label: '코치 관리',
    src: (className?: string) => <CoachWhiteIcon className={className} />,
    alt: 'coach icon',
  },
  {
    id: nanoid(),
    path: 'court',
    label: '코트 관리',
    src: (className?: string) => <CourtWhiteIcon className={className} />,
    alt: 'court icon',
  },
  {
    id: nanoid(),
    path: 'lesson-ticket',
    label: '레슨권 관리',
    src: (className?: string) => (
      <LessonCouponWhiteIcon className={className} />
    ),
    alt: 'lesson icon',
  },
  {
    id: nanoid(),
    path: 'community',
    label: '커뮤니티 관리',
    src: (className?: string) => <CommunityWhiteIcon className={className} />,
    alt: 'community icon',
  },
  {
    id: nanoid(),
    path: 'statistics',
    label: '통계',
    src: (className?: string) => <StatisticsWhiteIcon className={className} />,
    alt: 'statistics icon',
  },
  {
    id: nanoid(),
    path: 'setting',
    label: '설정',
    src: (className?: string) => <SettingWhiteIcon className={className} />,
    alt: 'setting icon',
  },
];
