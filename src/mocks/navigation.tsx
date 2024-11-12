import { v4 as uuid } from 'uuid';
import HomeIcon from '@/public/icons/cottage.svg'
import CalendarIcon from '@/public/icons/calendar_today.svg';
import CustomerIcon from '@/public/icons/group.svg'
import CoachIcon from '@/public/icons/person_book.svg'
import CourtIcon from '@/public/icons/location_on.svg'
import LessonIcon from '@/public/icons/confirmation_number.svg'
import CommunityIcon from '@/public/icons/corporate_fare.svg'
import StatisticsIcon from '@/public/icons/insert_chart.svg'
import SettingIcon from '@/public/icons/settings.svg'
import { StaticImageData } from 'next/image';
import { CalendarWhiteIcon, CoachWhiteIcon, CourtWhiteIcon, CustomerWhiteIcon, HomeWhiteIcon, LessonCouponWhiteIcon, SettingWhiteIcon } from '@icons/index';

type Navigation = {
  id: string;
  path: string;
  label: string;
  src: StaticImageData;
  activeSrc: StaticImageData;
  alt: string;
}

export const NavigationList: Navigation[] = [
  {
    id: uuid(),
    path: '',
    label: '홈',
    src: HomeIcon,
    activeSrc: HomeWhiteIcon,
    alt: 'home icon',
  },
  {
    id: uuid(),
    path: 'schedule',
    label: '일정 관리',
    src: CalendarIcon,
    activeSrc: CalendarWhiteIcon,
    alt: 'calendar icon',
  },
  {
    id: uuid(),
    path: 'customer',
    label: '회원 관리',
    src: CustomerIcon,
    activeSrc: CustomerWhiteIcon,
    alt: 'customer icon',
  },
  {
    id: uuid(),
    path: 'coach',
    label: '코치 관리',
    src: CoachIcon,
    activeSrc: CoachWhiteIcon,
    alt: 'coach icon',
  },
  {
    id: uuid(),
    path: 'court',
    label: '코트 관리',
    src: CourtIcon,
    activeSrc: CourtWhiteIcon,
    alt: 'court icon',
  },
  {
    id: uuid(),
    path: 'lesson',
    label: '레슨권 관리',
    src: LessonIcon,
    activeSrc: LessonCouponWhiteIcon,
    alt: 'lesson icon',
  },
  // {
  //   id: uuid(),
  //   path: 'community',
  //   label: '커뮤니티 관리',
  //   src: CommunityIcon,
  //   alt: 'community icon',
  // },
  // {
  // 	id: uuid(),
  // 	path: 'statistics',
  // 	label: '통계',
  // 	src: StatisticsIcon,
  // 	alt: 'statistics icon',
  // },
  {
    id: uuid(),
    path: 'setting',
    label: '설정',
    src: SettingIcon,
    activeSrc: SettingWhiteIcon,
    alt: 'setting icon',
  },
];
