import React, { Dispatch, SetStateAction } from 'react';
import styled from '@emotion/styled';
import { fadeUp } from '@styles/animation';
import { ImageContainer as Image } from '@styles/styles';
import CancelBtnIcon from '@icons/cancel_black_btn.svg';

interface ModalProps {
	title: string;
	children: React.ReactNode;
	titleContainer?: boolean;
	showModal?: boolean;
	setShowModal?: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({
	title,
	children,
	titleContainer = true,
	showModal,
	setShowModal,
	...props
}: ModalProps) => {
	return (
		<Container>
			<ModalContainer css={fadeUp} {...props}>
				{titleContainer &&
					<TitleContainer>
						<Title>{title}</Title>
						<Image
							src={CancelBtnIcon}
							alt={'close button'}
							width={28}
							height={28}
							position={'absolute'}
							top={0}
							right={0}
							cursor={'pointer'}
							onClick={() => setShowModal && setShowModal(false)}
						/>
					</TitleContainer>}
				{children}
			</ModalContainer>
		</Container>
	);
};

const Container = styled.div({
	position: 'fixed',
	width: '100vw',
	height: '100vh',
	top: '0',
	backgroundColor: 'rgb(18, 18, 18, 0.7)',
	zIndex: 99,
});
const ModalContainer = styled.div({
	position: 'absolute',
	minWidth: '640px',
	minHeight: '220px',
	top: '40%',
	left: '50%',
	transform: 'translate(-50%,-50%)',
	padding: '24px',
	backgroundColor: 'var(--white100)',
	borderRadius: '16px',
	boxShadow: '2px 4px 12px 2px rgb(255 255 255 / 15%)',
});
const TitleContainer = styled.div({
	position: 'relative',
	textAlign: 'center',
	color: 'var(--black100)',
	padding: '4px 0',
	margin: '0 0 24px 0',
});
const Title = styled.div({
	color: 'var(--business-color)',
	fontSize: '1.2rem',
	fontWeight: '500',
});

export default Modal;
