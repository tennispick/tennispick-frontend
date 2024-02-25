import Link from 'next/link';
import styled from '@emotion/styled';
import { CSS_TYPE } from '@styles/styles';
import Image from 'next/image';
import { NavigationList } from 'src/mocks/navigation';
import Calendar from '@components/home/Calendar';
import { useState, useEffect } from 'react';
import { Modal, Portal } from '@components/index';
import ScheduleByDate from '@features/layer/scheduleByDate/screen/ScheduleByDate';
import Logo from '@icons/logo.svg';
import useMobile from '@hooks/useMobile';

type Props = {
  firstPathName: string;
  isNavSpread: boolean;
};

const NavigationLayout = ({ firstPathName, isNavSpread }: Props) => {
  const [day, setDay] = useState<Date>(new Date());
  const [showModal, setShowModal] = useState<boolean>(false);
  const isMobile = useMobile();

  const onClickCalendarDateHandler = (day: Date) => {
    setShowModal(true);
    setDay(day);
  };

  const mobileNavigationStyle = {
    position: 'fixed',
    width: '100vw',
    height: '76px',
    top: 0,
    left: 0,
    backgroundColor: 'var(--white100)',
    flexDirection: 'row',
    zIndex: 9999,
  };

  return (
    <NavContainer
      width={isNavSpread ? '280px' : '80px'}
      padding={isNavSpread ? '0 20px 0 0' : '0'}
      css={isMobile && { ...mobileNavigationStyle }}
    >
      <div>
        {isNavSpread && (
          <div css={{ width: '100%', minHeight: '48px', padding: '8px 0 0 0' }}>
            <Image
              src={Logo}
              alt="logo"
              placeholder="empty"
              priority={true}
              css={{
                width: '100%',
                margin: '0 auto 0 auto',
              }}
            />
          </div>
        )}
        <NavLists margin={isNavSpread ? '16px 0 0 0' : '90px 0 0 0'}>
          {NavigationList &&
            NavigationList.map((item) => {
              return (
                <Link key={item.id} href="" as={`/${item.path}`} passHref>
                  <NavList
                    isActive={isNavSpread}
                    flexDirection={isNavSpread ? 'row' : 'column'}
                    css={{
                      '::before': {
                        width: firstPathName === item.path ? '100%' : '0',
                      },
                    }}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={20}
                      height={20}
                      priority
                    />
                    <span>{item.label}</span>
                  </NavList>
                </Link>
              );
            })}
        </NavLists>
      </div>
      {!isMobile && (
        <Calendar
          css={!isNavSpread && { display: 'none' }}
          onClick={onClickCalendarDateHandler}
        />
      )}
      {showModal && (
        <Portal id={'portal'}>
          <Modal
            title={'스케줄 등록'}
            titleContainer={false}
            css={{
              width: 'calc(100vw - 3%)',
              height: 'calc(100vh - 5%)',
              top: '50%',
              padding: 0,
            }}
          >
            <ScheduleByDate day={day} setShowModal={setShowModal} />
          </Modal>
        </Portal>
      )}
    </NavContainer>
  );
};

const NavContainer = styled((props: any) => <nav {...props} />)(
  {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 'calc(100vh - 48px)',
    transition: 'all 0.35s ease-in-out',
    overflowY: 'scroll',
  },
  (props) => ({
    width: props.width,
    padding: props.padding,
  }),
);

// const NavContainer = styled.nav<CSS_TYPE>(
//   {
//     position: 'relative',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     height: 'calc(100vh - 48px)',
//     transition: 'all 0.35s ease-in-out',
//     overflowY: 'scroll',
//   },
//   (props) => ({
//     width: props.width,
//     padding: props.padding,
//   }),
// );
const NavLists = styled.ul<CSS_TYPE>(
  {
    position: 'relative',
    width: '100%',
  },
  (props) => ({
    margin: props.margin,
  }),
);
const NavList = styled.li<CSS_TYPE>(
  {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    fontSize: '16px',
    cursor: 'pointer',

    img: {
      zIndex: '2',
    },

    '::before': {
      transition: 'width 0.25s',
      position: 'absolute',
      content: "''",
      width: '0%',
      height: '100%',
      top: '0',
      left: '0',
      backgroundColor: 'var(--business-sub-color)',
      borderRadius: '16px',
      zIndex: '1',
    },
  },
  (props) => ({
    flexDirection: props.flexDirection,
    padding: props.isActive ? '16px' : '16px 0',
    margin: props.isActive ? '0 0 12px 0' : '2px 0',

    span: {
      fontSize: props.isActive ? '16px' : '14px',
      margin: props.isActive ? '0 0 0 16px' : '4px 0 0 0',
      zIndex: '2',
    },

    '::before': {
      left: props.isActive ? '0' : '0',
      borderRadius: props.isActive ? '16px' : '0',
    },

    ':hover': {
      '::before': {
        width: '100%',
      },
    },
  }),
);

export default NavigationLayout;
