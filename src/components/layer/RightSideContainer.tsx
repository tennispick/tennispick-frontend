import { Dispatch, PropsWithChildren, SetStateAction, useRef } from 'react';
import Image from 'next/image';

import { OnClickRefOutSideCloseHandler } from '@utils/onClick';
import { CloseBtnIcon } from '@icons/index';
import { css } from 'styled-system/css';
import { styled } from 'styled-system/jsx';
import { flex } from 'styled-system/patterns';

type Props = {
  title?: string;
  showRightSide: boolean;
  setShowRightSide: Dispatch<SetStateAction<boolean>>;
} & PropsWithChildren;

const RightSideContainer = ({
  title = '제목 없음',
  children,
  showRightSide,
  setShowRightSide,
}: Props) => {
  const sideRef = useRef(null);
  OnClickRefOutSideCloseHandler(sideRef, setShowRightSide);

  const handleCloseDrawerClick = () => setShowRightSide(false);

  return (
    <section
      className={css({
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        top: 0,
        backgroundColor: 'rgb(18, 18, 18, 0.7)',
        zIndex: 99,
      })}
    >
      <Wrapper
        ref={sideRef}
        className={css({
          animationName: showRightSide ? 'fadeRight' : 'fadeOutRight',
        })}
      >
        <div
          className={flex({
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '1.2rem',
          })}
        >
          <div className={css({ fontWeight: 600 })}>{title}</div>
          <Image
            src={CloseBtnIcon}
            alt={'close'}
            className={css({ cursor: 'pointer' })}
            onClick={handleCloseDrawerClick}
          />
        </div>
        <div
          className={css({
            height: 'calc(100% - (1rem + 32px))',
            margin: '16px 0 0 0',
          })}
        >
          {children}
        </div>
      </Wrapper>
    </section>
  );
};

const Wrapper = styled('div', {
  base: {
    position: 'absolute',
    width: '40vw',
    height: '100vh',
    right: 0,
    padding: '20px',
    backgroundColor: 'var(--grey600)',
    borderTopLeftRadius: '16px',
    borderBottomLeftRadius: '16px',
  },
});

export default RightSideContainer;
