import useModalStore, { ModalType } from '@lib/zustand/modal';
import styled from '@emotion/styled';
import { PORTAL_Z_INDEX } from 'src/constants/portal';
import { fadeUp } from '@styles/animation';
import { ImageContainer as Image } from '@styles/styles';
import CancelBtnIcon from '@icons/cancel_black_btn.svg';
import { css } from '@emotion/react';

const ModalProvider = () => {
  const {
    isOpen,
    type = 'normal',
    title = '',
    modalChildren,
    closeModal,
  } = useModalStore();

  if (!isOpen) return null;

  const modalSize = (type: ModalType) => {
    switch (type) {
      case 'full':
        return {
          width: '100vw',
          height: '100vh',
        };
      case 'normal':
        return {
          minWidth: '640px',
          minHeight: '220px',
        };
      case 'large':
        return {
          width: '800px',
          height: '400px',
        };
      case 'small':
        return {
          width: '320px',
          height: '120px',
        };
      case 'confirm':
        return {
          width: '640px',
          height: '220px',
        };
      case 'download':
        return {
          width: '640px',
          height: '220px',
        };
      case 'overlay':
        return {
          width: '400px',
          height: '200px',
          padding: 0,
        };
      default:
        return {
          width: '640px',
          height: '220px',
        };
    }
  };

  return (
    <Provider>
      <div
        css={css([
          {
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            backgroundColor: 'var(--white100)',
            borderRadius: '16px',
            boxShadow: '2px 4px 12px 2px rgb(255 255 255 / 15%)',
            zIndex: PORTAL_Z_INDEX + 1,
            minWidth: modalSize(type).minWidth,
            minHeight: modalSize(type).minHeight,
            width: modalSize(type).width,
            height: modalSize(type).height,
            padding: modalSize(type).padding ?? '24px',
          },
          fadeUp,
        ])}
      >
        {type !== 'overlay' && title && (
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
              onClick={closeModal}
            />
          </TitleContainer>
        )}
        {modalChildren}
      </div>
    </Provider>
  );
};

const Provider = styled.div({
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  top: '0',
  backgroundColor: 'rgb(18, 18, 18, 0.7)',
  zIndex: PORTAL_Z_INDEX,
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

export default ModalProvider;
