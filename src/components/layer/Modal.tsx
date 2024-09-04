import React, { Dispatch, SetStateAction } from 'react';
import CancelBtnIcon from '@icons/cancel_black_btn.svg';
import { styled } from 'styled-system/jsx';
import Image from 'next/image';
import { Styles, css, cx } from 'styled-system/css';

type Props = {
  title: string;
  children: React.ReactNode;
  titleContainer?: boolean;
  openModal?: boolean;
  setOpenModal?: Dispatch<SetStateAction<boolean>>;
  css?: Styles;
} & React.HTMLAttributes<HTMLDivElement>;

const defaultStyle = css.raw({
  position: 'absolute',
  minWidth: '640px',
  minHeight: '220px',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '24px',
  backgroundColor: 'var(--white100)',
  borderRadius: '16px',
  boxShadow: '2px 4px 12px 2px rgb(255 255 255 / 15%)',
});

const Modal = ({
  title,
  children,
  titleContainer = true,
  setOpenModal,
  ...props
}: Props) => {
  const handleModalCloseClick = () => setOpenModal && setOpenModal(false);

  const { css: cssProp, ...rest } = props;

  const className = cx(css(defaultStyle, cssProp, { animationName: 'fadeUp' }));

  return (
    <Container>
      <div className={className} {...rest}>
        {titleContainer && (
          <TitleContainer>
            <Title>{title}</Title>
            <Image
              src={CancelBtnIcon}
              alt={'close button'}
              width={28}
              height={28}
              className={css({
                position: 'absolute',
                top: 0,
                right: 0,
                cursor: 'pointer',
              })}
              onClick={handleModalCloseClick}
            />
          </TitleContainer>
        )}
        {children}
      </div>
    </Container>
  );
};

const Container = styled('div', {
  base: {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    top: '0',
    backgroundColor: 'rgb(18, 18, 18, 0.7)',
    zIndex: 92,
  },
});

const TitleContainer = styled('div', {
  base: {
    textAlign: 'center',
    color: 'var(--black100)',
    padding: '4px 0',
    margin: '0 0 12px 0',
  },
});
const Title = styled('div', {
  base: {
    color: 'var(--business-color)',
    fontSize: '1.2rem',
    fontWeight: 500,
  },
});

export default Modal;
