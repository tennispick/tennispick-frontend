import { v4 as uuid } from 'uuid';
import {
	HomeWhiteIcon,
	CalendarWhiteIcon,
	CustomerWhiteIcon,
	CoachWhiteIcon,
	CourtWhiteIcon,
	LessonCouponWhiteIcon,
	CommunityWhiteIcon,
	StatisticsWhiteIcon,
	SettingWhiteIcon,
} from '@icons/index';

export const NavigationList = [
	{
		id: uuid(),
		path: '',
		label: '홈',
		src: HomeWhiteIcon,
		alt: 'home icon',
	},
	{
		id: uuid(),
		path: 'schedule',
		label: '일정 관리',
		src: CalendarWhiteIcon,
		alt: 'calendar icon',
	},
	{
		id: uuid(),
		path: 'customer',
		label: '회원 관리',
		src: CustomerWhiteIcon,
		alt: 'customer icon',
	},
	{
		id: uuid(),
		path: 'coach',
		label: '코치 관리',
		src: CoachWhiteIcon,
		alt: 'coach icon',
	},
	{
		id: uuid(),
		path: 'court',
		label: '코트 관리',
		src: CourtWhiteIcon,
		alt: 'court icon',
	},
	{
		id: uuid(),
		path: 'lesson',
		label: '레슨권 관리',
		src: LessonCouponWhiteIcon,
		alt: 'lesson icon',
	},
	{
		id: uuid(),
		path: 'community',
		label: '커뮤니티 관리',
		src: CommunityWhiteIcon,
		alt: 'community icon',
	},
	// {
	// 	id: uuid(),
	// 	path: 'statistics',
	// 	label: '통계',
	// 	src: StatisticsWhiteIcon,
	// 	alt: 'statistics icon',
	// },
	// {
	// 	id: uuid(),
	// 	path: 'setting',
	// 	label: '설정',
	// 	src: SettingWhiteIcon,
	// 	alt: 'setting icon',
	// },
];
