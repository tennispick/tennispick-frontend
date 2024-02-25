import { PropsWithChildren, useState } from 'react';
import styled from '@emotion/styled';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { CSS_TYPE } from '@styles/styles';
import doubleArrowLeft from '@icons/keyboard_double_arrow_left.svg';
import { NavigationLayout } from '@components/index';
import useMobile from '@hooks/useMobile';

const AppLayout = ({ children }: PropsWithChildren) => {
  const [isNavSpread, setIsNavSpread] = useState<boolean>(true);
  const pathName = usePathname();
  const firstPathName = pathName?.split('/')[1];
  const isMobile = useMobile();

  const mobileLayoutStyle = {
    height: 'calc(100vh - 76px)',
    top: '76px',
    overflowY: 'scroll'
  }

  const mobileMainStyle = {
    width: '100%',
    height: '100%'
  }

  return (
    <>
      {firstPathName === 'login' ? (
        <>{children}</>
      ) : (
        <LayoutContainer padding={isNavSpread ? '20px' : '20px 20px 20px 0'} css={ isMobile && { ...mobileLayoutStyle }}>
          <NavigationLayout
            isNavSpread={isNavSpread}
            firstPathName={firstPathName}
          />
          <MainContainer width={isNavSpread ? '90%' : '95%'} css={ isMobile && { ...mobileMainStyle }}>
            {!isMobile &&
              <NavControlBtnWrapper>
                <NavControlBtn
                  src={doubleArrowLeft}
                  alt="double arrow left"
                  width={28}
                  height={28}
                  onClick={() => setIsNavSpread(!isNavSpread)}
                  rotate={isNavSpread ? 'rotate(0deg)' : 'rotate(180deg)'}
                />
              </NavControlBtnWrapper>
            }
            <ChildrenContainer>{children}</ChildrenContainer>
          </MainContainer>
        </LayoutContainer>
      )}
    </>
  );
};

const LayoutContainer = styled((props: any) => <div {...props} />)(
  {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'var(--business-color)',
    position: 'relative',
    color: 'var(--white100)',
    display: 'flex',
  },
  (props) => ({
    padding: props.padding,
  }),
);

const MainContainer = styled((props: any) => <main {...props} />)(
  {
    position: 'relative',
    height: 'calc(100vh - 48px)',
    backgroundColor: 'var(--white100)',
    borderRadius: '12px',
    transition: 'all 0.35s ease-in-out',
  },
  (props) => ({
    width: props.width,
  }),
);
const ChildrenContainer = styled.div({
  position: 'relative',
  width: '100%',
  height: '100%',
  padding: '24px',
  color: 'var(--black100)',
  overflow: 'hidden',
});
const NavControlBtnWrapper = styled.i({
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
});
const NavControlBtn = styled(Image)<CSS_TYPE>(
  {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transition: 'all 0.3s ease-out',
  },
  (props) => ({
    transform: 'translate(-50%, -50%) ' + props.rotate,
  }),
);

export default AppLayout;
