import { PropsWithChildren, useState } from 'react';
import styled from '@emotion/styled';
import Link from "next/link";
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { CSS_TYPE } from "@styles/styles";
import doubleArrowLeft from '@icons/keyboard_double_arrow_left.svg';
import homeIcon from '@icons/home_white.svg'; // 홈
import scheduleIcon from '@icons/calendar_white.svg'; // 일정 관리
import customerIcon from "@icons/customer_white.svg"; // 회원 관리
import coachIcon from "@icons/coach_white.svg"; // 코치 관리
import courtIcon from "@icons/court_white.svg"; // 코트 관리
import lessonIcon from "@icons/lesson_coupon_white.svg"; // 레슨권 관리
import communityIcon from "@icons/commuinty_white.svg"; // 커뮤니티 관리
import statisticsIcon from "@icons/statistics_white.svg"; // 통계
import settingIcon from "@icons/setting_white.svg"; // 설정

const AppLayout = ({ children }: PropsWithChildren) => {

	const [isNavSpread, setIsNavSpread] = useState(true);
	const router = useRouter();
	const pathName = usePathname();
	const firstPathName = pathName.split('/')[1];

	return (
		<>
			{firstPathName === 'login' ? (
				<>{children}</>
			) : (
				<LayoutContainer
					padding={isNavSpread ? "20px" : "20px 20px 20px 0"}
				>
					<NavContainer
						width={isNavSpread ? "10%" : "5%"}
						padding={isNavSpread ? "0 20px 0 0" : "0"}
					>
						<nav>
							<LogoWraaper>로고</LogoWraaper>
							<NavLists>
								<Link href="" as="/" passHref>
									<NavList
										isActive={isNavSpread}
										flexDirection={isNavSpread ? "row" : "column"}
									>
										<Image
											src={homeIcon}
											alt="home icon"
											width={20}
											height={20}
										/>
										<span>홈</span>
									</NavList>
								</Link>
								<Link href="/schedule" passHref>
									<NavList
										isActive={isNavSpread}
										flexDirection={isNavSpread ? "row" : "column"}
									>
										<Image
											src={scheduleIcon}
											alt="schedule icon"
											width={20}
											height={20}
										/>
										<span>일정 관리</span>
									</NavList>
								</Link>
								<Link href="" as="/customer" passHref>
									<NavList
										isActive={isNavSpread}
										flexDirection={isNavSpread ? "row" : "column"}
									>
										<Image
											src={customerIcon}
											alt="customer icon"
											width={20}
											height={20}
										/>
										<span>회원 관리</span>
									</NavList>
								</Link>
								<Link href="" as="/coach" passHref>
									<NavList
										isActive={isNavSpread}
										flexDirection={isNavSpread ? "row" : "column"}
									>
										<Image
											src={coachIcon}
											alt="coach icon"
											width={20}
											height={20}
										/>
										<span>코치 관리</span>
									</NavList>
								</Link>
								<Link href="" as="/court" passHref>
									<NavList
										isActive={isNavSpread}
										flexDirection={isNavSpread ? "row" : "column"}
									>
										<Image
											src={courtIcon}
											alt="court icon"
											width={20}
											height={20}
										/>
										<span>코트 관리</span>
									</NavList>
								</Link>
								<Link href="" as="/lesson" passHref>
									<NavList
										isActive={isNavSpread}
										flexDirection={isNavSpread ? "row" : "column"}
									>
										<Image
											src={lessonIcon}
											alt="lesson icon"
											width={20}
											height={20}
										/>
										<span>레슨권 관리</span>
									</NavList>
								</Link>
								<Link href="" as="/community" passHref>
									<NavList
										isActive={isNavSpread}
										flexDirection={isNavSpread ? "row" : "column"}
									>
										<Image
											src={communityIcon}
											alt="community icon"
											width={20}
											height={20}
										/>
										<span>커뮤니티 관리</span>
									</NavList>
								</Link>
								<Link href="" as="/statistics" passHref>
									<NavList
										isActive={isNavSpread}
										flexDirection={isNavSpread ? "row" : "column"}
									>
										<Image
											src={statisticsIcon}
											alt="statistics icon"
											width={20}
											height={20}
										/>
										<span>통계</span>
									</NavList>
								</Link>
								<Link href="" as="/setting" passHref>
									<NavList
										isActive={isNavSpread}
										flexDirection={isNavSpread ? "row" : "column"}
									>
										<Image
											src={settingIcon}
											alt="setting icon"
											width={20}
											height={20}
										/>
										<span>설정</span>
									</NavList>
								</Link>
							</NavLists>
						</nav>
					</NavContainer>
					<MainContainer
						width={isNavSpread ? "90%" : "95%"}
					>
						<NavControlBtnWrapper>
							<NavControlBtn
								src={doubleArrowLeft}
								alt="double arrow left"
								width={28}
								height={28}
								onClick={() => setIsNavSpread(!isNavSpread)}
								rotate={isNavSpread ? "rotate(0deg)" : "rotate(180deg)"}
							/>
						</NavControlBtnWrapper>
						<ChildrenContainer>
							{children}
						</ChildrenContainer>
					</MainContainer>
				</LayoutContainer>
			)}
		</>
	);
};

const LayoutContainer = styled.div<CSS_TYPE>(
	{
		width: '100vw',
		height: '100vh',
		backgroundColor: 'var(--business-color)',
		position: 'relative',
		color: 'var(--basic-white-color)',
		display: 'flex',
	},
	props => ({
		padding: props.padding
	})
);
const NavContainer = styled.div<CSS_TYPE>(
	{
		position: 'relative',
		height: 'calc(100vh - 48px)',
		transition: "all 0.35s ease-in-out"
	},
	props => ({
		width: props.width,
		padding: props.padding
	})
);
const LogoWraaper = styled.div({
	minHeight: "8vh"
})
const NavLists = styled.ul({
	margin: "16px 0 0 0"
});
const NavList = styled.li<CSS_TYPE>(
	{
		display: 'flex',
		position: "relative",
		alignItems: 'center',
		fontSize: '16px',
		margin: "8px 0",
		cursor: "pointer",

		img: {
			zIndex: "2"
		},

		"::before": {
			transition: "width 0.25s",
			position: "absolute",
			content: "''",
			width: "0%",
			height: "100%",
			top: "0",
			left: "-6px",
			backgroundColor: "var(--business-sub-color)",
			borderRadius: "16px",
			zIndex: "1"
		},
	},
	props => ({
		flexDirection: props.flexDirection,
		padding: props.isActive ? "14px 12px" : "16px 0",
		margin: props.isActive ? "8px 0" : "2px 0",

		span: {
			fontSize: props.isActive ? "16px" : "14px",
			margin: props.isActive ? "0 0 0 12px" : "4px 0 0 0",
			zIndex: "2"
		},

		"::before": {
			left: props.isActive ? "-6px" : "0",
			borderRadius: props.isActive ? "16px" : "0",
		},

		":hover": {
			"::before": {
				width: props.isActive ? "calc(100% + 12px)" : "100%",
			},
		}
	})
);
const MainContainer = styled.main<CSS_TYPE>(
	{
		position: 'relative',
		height: 'calc(100vh - 48px)',
		backgroundColor: 'var(--basic-white-color)',
		borderRadius: '12px',
		transition: "all 0.35s ease-in-out",
	},
	props => ({
		width: props.width
	})
);
const ChildrenContainer = styled.div({
	position: "relative",
	width: "100%",
	height: "100%",
	// minHeight: "100%",
	// maxHeight: "100%",
	padding: "24px",
	color: "var(--basic-black-color)"
});
const NavControlBtnWrapper = styled.i({
	position: "absolute",
	display: "inline-block",
	width: "36px",
	height: "36px",
	backgroundColor: 'var(--basic-white-color)',
	left: "-36px",
	top: "20px",
	borderTopLeftRadius: "12px",
	borderBottomLeftRadius: "12px",
	cursor: "pointer"
})
const NavControlBtn = styled(Image)<CSS_TYPE>(
	{
		position: "absolute",
		top: "50%",
		left: "50%",
		transition: "all 0.3s ease-out"
	},
	props => ({
		transform: "translate(-50%, -50%) " + props.rotate
	})
)

export default AppLayout;