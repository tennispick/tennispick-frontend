'use client';

import useModalStore from '@lib/zustand/modal';
import { PORTAL_Z_INDEX } from '@/constants/portal';
import CancelBtnIcon from '@icons/cancel_black_btn.svg';
import Image from 'next/image';
import { styled } from 'styled-system/jsx';
import { modal } from '@/recipes/modal';
import { css } from 'styled-system/css';

const ModalProvider = () => {
  const {
    isOpen,
    type = 'md',
    title = '',
    modalChildren,
    closeModal: handleCloseModal,
  } = useModalStore();

  if (!isOpen) return null;

  const isOverlay = type === 'overlay';

  const middleStyle =
    type !== 'full'
      ? css({
          padding: 0,
          textAlign: 'center',
        })
      : '';

  return (
    <Provider>
      <Container type={type}>
        {!isOverlay && title && (
          <TitleContainer>
            <Title className={middleStyle}>{title}</Title>
            <Image
              src={CancelBtnIcon}
              alt={'close button'}
              width={28}
              height={28}
              style={{
                margin: type !== 'full' ? '' : '0 24px 0 0',
                cursor: 'pointer',
              }}
              onClick={handleCloseModal}
            />
          </TitleContainer>
        )}
        {modalChildren}
      </Container>
    </Provider>
  );
};

const Provider = styled('div', {
  base: {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    top: 0,
    backgroundColor: 'rgb(18, 18, 18, 0.7)',
    zIndex: PORTAL_Z_INDEX,
  },
});

const Container = styled('div', modal);

const TitleContainer = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '52px',
    backgroundColor: 'var(--white100)',
    borderRadius: '8px',
    color: 'var(--black100)',
    margin: '0 0 16px 0',
  },
});

const Title = styled('div', {
  base: {
    color: 'var(--business-color)',
    fontSize: '1.2rem',
    fontWeight: 600,
  },
});

export default ModalProvider;
