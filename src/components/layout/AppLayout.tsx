'use client';

import { PropsWithChildren, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import doubleArrowLeft from '@icons/keyboard_double_arrow_left.svg';
import useMobile from '@hooks/useMobile';

import { css } from 'styled-system/css';
import { styled } from 'styled-system/jsx';
import NavigationLayout from './NavigationLayout';

const AppLayout = ({ children }: PropsWithChildren) => {
  const [isNavSpread, setIsNavSpread] = useState<boolean>(true);
  const pathName = usePathname();
  const firstPathName = pathName?.split('/')[1];
  const isMobile = useMobile();

  const mobileLayoutStyle = {
    height: 'calc(100vh - 76px)',
    top: '76px',
    overflowY: 'scroll',
  };

  const mobileMainStyle = {
    width: '100%',
    height: '100%',
  };

  return (
    <>
      {firstPathName === 'login' ? (
        <>{children}</>
      ) : (
        <LayoutContainer
          className={css({
            padding: isNavSpread ? '20px' : '20px 20px 20px 0',
            ...(isMobile && mobileLayoutStyle),
          })}
        >
          <NavigationLayout
            isNavSpread={isNavSpread}
            firstPathName={firstPathName}
          />
          <MainContainer
            width={isNavSpread ? 'calc(100% - 280px)' : 'calc(100% - 80px)'}
            className={css({
              ...(isMobile && mobileLayoutStyle),
            })}
          >
            {!isMobile && (
              <NavButtonController>
                <NavControlBtn
                  src={doubleArrowLeft}
                  alt="double arrow left"
                  width={28}
                  height={28}
                  onClick={() => setIsNavSpread(!isNavSpread)}
                  rotate={isNavSpread ? 'rotate(0deg)' : 'rotate(180deg)'}
                />
              </NavButtonController>
            )}
            <ChildrenContainer>{children}</ChildrenContainer>
          </MainContainer>
        </LayoutContainer>
      )}
    </>
  );
};

const LayoutContainer = styled('div', {
  base: {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'var(--business-color)',
    position: 'relative',
    color: 'var(--white100)',
    display: 'flex',
  },
});

const MainContainer = styled('main', {
  base: {
    height: 'calc(100vh - 48px)',
    backgroundColor: 'var(--white100)',
    borderRadius: '12px',
    transition: 'all 0.35s ease-in-out',
  },
  //   (props) => ({
  //     width: props.width,
  //   }),
});

const NavButtonController = styled('i', {
  base: {
    position: 'absolute',
    display: 'inline-block',
    width: '36px',
    height: '36px',
    backgroundColor: 'var(--white100)',
    left: '-36px',
    top: '20px',
    borderTopLeftRadius: '12px',
    borderBottomLeftRadius: '12px',
    cursor: 'pointer',
  },
});

const ChildrenContainer = styled('div', {
  base: {
    position: 'relative',
    width: '100%',
    height: '100%',
    padding: '24px',
    color: 'var(--black100)',
    overflow: 'hidden',
  },
});

// const NavControlBtn = styled(Image)<CSS_TYPE>(
//   {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transition: 'all 0.3s ease-out',
//   },
//   (props) => ({
//     transform: 'translate(-50%, -50%) ' + props.rotate,
//   }),
// );

const NavControlBtn = styled(Image, {
  base: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transition: 'all 0.3s ease-out',
    transform: 'translate(-50%, -50%)',
  },
  // variants: {
  //   rotate: {
  //     custom: (value: string) => ({
  //       transform: `translate(-50%, -50%) ${value}`,
  //     }),
  //   },
  // } ,
});

export default AppLayout;
