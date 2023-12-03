import Link from 'next/link';
import Image from 'next/image';
import styled from '@emotion/styled';
import { CSS_TYPE } from '@styles/styles';
import { NavigationList } from 'src/mocks/navigation';
import Calendar from '@components/home/Calendar';
import { useState } from 'react';
import { Modal, Portal } from '@components/index';
import ScheduleByCalendar from '@components/layer/calendar/index';

interface NavigationProps {
	firstPathName: string;
	isNavSpread: boolean;
}

const NavigationLayout = ({ firstPathName, isNavSpread }: NavigationProps) => {

	const [day, setDay] = useState<Date>(new Date());
	const [showModal, setShowModal] = useState<boolean>(false);

	const onClickCalendarDateHandler = (day: Date) =>{
		setShowModal(true);
		setDay(day);
	};

	return (
		<NavContainer
			width={isNavSpread ? '280px' : '80px'}
			padding={isNavSpread ? '0 20px 0 0' : '0'}
		>
			<div>
				<div css={{ width: '100%', minHeight: '8vh' }}>로고</div>
				<NavLists>
					{NavigationList &&
						NavigationList.map((item) => {
							return (
								<Link key={item.id} href="" as={`/${item.path}`} passHref>
									<NavList
										isActive={isNavSpread}
										flexDirection={isNavSpread ? 'row' : 'column'}
										css={{
											'::before': {
												width: firstPathName === item.path ? '100%' : '0',
											},
										}}
									>
										<Image src={item.src} alt={item.alt} width={20} height={20} />
										<span>{item.label}</span>
									</NavList>
								</Link>
							);
						})}
				</NavLists>
			</div>
			<Calendar
				css={!isNavSpread && { display: 'none' }}
				onClick={onClickCalendarDateHandler}
			/>
			{showModal && <Portal id={'portal'}>
				<Modal
					title={'스케줄 등록'}
					titleContainer={false}
					css={{
						width: 'calc(100vw - 3%)',
						height: 'calc(100vh - 5%)',
						top: '50%',
						padding: 0
					}}
				>
					<ScheduleByCalendar
						day={day}
						setShowModal={setShowModal}
					/>
				</Modal>
			</Portal>}
		</NavContainer>
	);
};

const NavContainer = styled.nav<CSS_TYPE>(
	{
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		height: 'calc(100vh - 48px)',
		transition: 'all 0.35s ease-in-out',
		overflowY: 'scroll',
	},
	(props) => ({
		width: props.width,
		padding: props.padding,
	}),
);
const NavLists = styled.ul({
	position: 'relative',
	width: '100%',
	margin: '16px 0 0 0',
});
const NavList = styled.li<CSS_TYPE>(
	{
		display: 'flex',
		position: 'relative',
		alignItems: 'center',
		fontSize: '16px',
		cursor: 'pointer',

		img: {
			zIndex: '2',
		},

		'::before': {
			transition: 'width 0.25s',
			position: 'absolute',
			content: "''",
			width: '0%',
			height: '100%',
			top: '0',
			left: '0',
			backgroundColor: 'var(--business-sub-color)',
			borderRadius: '16px',
			zIndex: '1',
		},
	},
	(props) => ({
		flexDirection: props.flexDirection,
		padding: props.isActive ? '16px' : '16px 0',
		margin: props.isActive ? '0 0 12px 0' : '2px 0',

		span: {
			fontSize: props.isActive ? '16px' : '14px',
			margin: props.isActive ? '0 0 0 16px' : '4px 0 0 0',
			zIndex: '2',
		},

		'::before': {
			left: props.isActive ? '0' : '0',
			borderRadius: props.isActive ? '16px' : '0',
		},

		':hover': {
			'::before': {
				width: '100%',
			},
		},
	}),
);

export default NavigationLayout;
