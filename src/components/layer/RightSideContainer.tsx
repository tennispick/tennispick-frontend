import { Dispatch, PropsWithChildren, SetStateAction, useRef } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';

import { fadeOutRight, fadeRight } from '@styles/animation';
import { OnClickRefOutSideCloseHandler } from '@utils/onClick';
import { CloseBtnIcon } from '@icons/index';

interface RightSideProps extends PropsWithChildren {
	title?: string;
	showRightSide: boolean;
	setShowRightSide: Dispatch<SetStateAction<boolean>>;
}

const RightSideContainer = ({
	title = '제목 없음',
	children,
	showRightSide,
	setShowRightSide,
}: RightSideProps) => {
	const sideRef = useRef(null);
	OnClickRefOutSideCloseHandler(sideRef, setShowRightSide);

	return (
		<section
			css={{
				position: 'fixed',
				width: '100vw',
				height: '100vh',
				top: 0,
				backgroundColor: 'rgb(18, 18, 18, 0.7)',
				zIndex: 99,
			}}
		>
			<Wrapper ref={sideRef} css={showRightSide ? fadeRight : fadeOutRight}>
				<div
					css={{
						position: 'relative',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						fontSize: '1.2rem',
					}}
				>
					<div
						css={{
							fontWeight: 600,
						}}
					>
						{title}
					</div>
					<Image
						src={CloseBtnIcon}
						alt={'close'}
						css={{
							cursor: 'pointer',
						}}
						onClick={() => setShowRightSide(false)}
					/>
				</div>
				<div
					css={{
						margin: '48px 0',
					}}
				>
					{children}
				</div>
			</Wrapper>
		</section>
	);
};

const Wrapper = styled.div({
	position: 'absolute',
	width: '40vw',
	height: '100vh',
	right: 0,
	backgroundColor: 'var(--grey600)',
	borderTopLeftRadius: '16px',
	borderBottomLeftRadius: '16px',
	padding: '20px',
});

export default RightSideContainer;
