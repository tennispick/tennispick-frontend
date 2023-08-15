import { PropsWithChildren, useState } from 'react';
import styled from '@emotion/styled';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { CSS_TYPE } from "@styles/styles";
import doubleArrowLeft from '@icons/keyboard_double_arrow_left.svg';
import { NavigationLayout } from '@components/index';

const AppLayout = ({ children }: PropsWithChildren) => {

	const [isNavSpread, setIsNavSpread] = useState<boolean>(true);
	const pathName = usePathname();
	const firstPathName = pathName?.split('/')[1];

	return (
		<>
			{firstPathName === 'login' ? (
				<>{children}</>
			) : (
				<LayoutContainer
					padding={isNavSpread ? "20px" : "20px 20px 20px 0"}
				>
					<NavigationLayout
						isNavSpread={isNavSpread}
						firstPathName={firstPathName}
					/>
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
	padding: "24px",
	color: "var(--basic-black-color)",
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