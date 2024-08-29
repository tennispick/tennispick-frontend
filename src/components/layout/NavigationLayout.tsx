import Link from 'next/link';
import Image from 'next/image';
import { NavigationList } from 'src/mocks/navigation';
import Calendar from '@components/home/Calendar';
import { useState } from 'react';
import { Modal, Portal } from '@components/index';
import ScheduleByDate from '@features/layer/scheduleByDate/screen/ScheduleByDate';
import Logo from '@icons/white_bg_logo.svg';
import useMobile from '@hooks/useMobile';
import { css } from 'styled-system/css';
import { styled } from 'styled-system/jsx';

type Props = {
  firstPathName: string;
  isNavSpread: boolean;
};

const NavigationLayout = ({ firstPathName, isNavSpread }: Props) => {
  const [day, setDay] = useState<Date>(new Date());
  const [openModal, setOpenodal] = useState<boolean>(false);
  const isMobile = useMobile();

  const handleCloseModalClick = () => setOpenodal(false);

  const handleDateClick = (day: Date) => {
    setOpenodal(true);
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
      className={css({
        ...(isMobile && { ...mobileNavigationStyle }),
      })}
    >
      <div>
        {isNavSpread && (
          <div
            className={css({
              width: '100%',
              minHeight: '48px',
              padding: '8px 0 0 0',
            })}
          >
            <Image
              src={Logo}
              alt="logo"
              placeholder="empty"
              className={css({
                width: '100%',
                height: '3rem',
                margin: '0 auto 0 auto',
              })}
              priority={true}
            />
          </div>
        )}
        <NavLists
          className={css({ margin: isNavSpread ? '16px 0 0 0' : '90px 0 0 0' })}
        >
          {NavigationList &&
            NavigationList.map((item) => {
              return (
                <Link key={item.id} href="" as={`/${item.path}`} passHref>
                  <NavList
                    className={css({
                      flexDirection: isNavSpread ? 'row' : 'column',
                      padding: isNavSpread ? '0.875rem' : '0.875rem 0',
                      margin: isNavSpread ? '0 0 12px 0' : '2px 0',

                      _before: {
                        width: firstPathName === item.path ? '100%' : '0',
                        borderRadius: isNavSpread ? '16px' : '0',
                      },

                      '& span': {
                        fontSize: isNavSpread ? '1rem' : '0.925rem',
                        margin: isNavSpread ? '0 0 0 16px' : '4px 0 0 0',
                      },
                    })}
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
          onClick={handleDateClick}
        />
      )}
      {openModal && (
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
            <ScheduleByDate
              day={day}
              handleCloseModalClick={handleCloseModalClick}
            />
          </Modal>
        </Portal>
      )}
    </NavContainer>
  );
};

const NavContainer = styled('div', {
  base: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 'calc(100vh - 48px)',
    transition: 'all 0.35s ease-in-out',
    overflowY: 'scroll',
  },
});

const NavLists = styled('ul', {
  base: {
    position: 'relative',
    width: '100%',
  },
});

const NavList = styled('li', {
  base: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    fontSize: '16px',
    cursor: 'pointer',

    '& img': {
      zIndex: 2,
    },

    _before: {
      transition: 'width 0.25s',
      position: 'absolute',
      content: "''",
      height: '100%',
      top: 0,
      left: 0,
      backgroundColor: 'var(--business-sub-color)',
      zIndex: 1,
    },

    '& span': {
      zIndex: '2',
    },
  },
});

export default NavigationLayout;
