import { css } from "styled-system/css";
import { styled } from "styled-system/jsx";
import { NavigationList } from '@/mocks/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from "react";
import useMobile from "@hooks/useMobile";
import Calendar from "@components/home/Calendar";

type Props = { 
  firstPathName: string;
}

const LeftNavigation = ({ firstPathName }: Props) => {

  const [day, setDay] = useState<Date>(new Date());
  const [openModal, setOpenodal] = useState<boolean>(false);
  const isMobile = useMobile();

  const handleCloseModalClick = () => setOpenodal(false);

  const handleDateClick = (day: Date) => {
    setOpenodal(true);
    setDay(day);
  };

  return (
    <nav className={css({
      position: 'relative',
      width: '260px',
      minWidth: '260px',
      padding: '16px 12px',
      backgroundColor: 'var(--white)',
    })}>
      <NavLists>
        {NavigationList &&
          NavigationList.map((item) => {
            return (
              <Link key={item.id} href="" as={`/${item.path}`} passHref>
                <NavList
                  className={css({
                    // flexDirection: isNavSpread ? 'row' : 'column',
                    // padding: isNavSpread ? '0.875rem' : '0.875rem 0',
                    // margin: isNavSpread ? '0 0 12px 0' : '2px 0',
                    padding: '16px 12px',
                    margin: '0 0 8px 0',

                    _before: {
                      width: firstPathName === item.path ? '100%' : '0',
                      borderRadius: '8px',
                      // borderRadius: isNavSpread ? '16px' : '0',
                    },

                    color: firstPathName === item.path ? 'var(--white)' : 'var(--grey1700)',

                    '& span': {
                      fontSize: '16px',
                      fontWeight: firstPathName === item.path ? 600 : 400,
                      // fontSize: isNavSpread ? '1rem' : '0.925rem',
                      // margin: isNavSpread ? '0 0 0 16px' : '4px 0 0 0',
                    },
                  })}
                >
                  <Image
                    src={firstPathName === item.path ? item.activeSrc : item.src}
                    alt={item.alt}
                    width={20}
                    height={20}
                    className={css({ color: firstPathName === item.path ? 'var(--white)' : 'var(--grey1700)', })}
                    priority
                  />
                  <span>{item.label}</span>
                </NavList>
              </Link>
            );
          })}
      </NavLists>
      {!isMobile && (
        <Calendar
          // css={!isNavSpread && { display: 'none' }}
          onClick={handleDateClick}
        />
      )}
    </nav>
  )
};

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
    gap: '10px',
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
      zIndex: 2,
    },
  },
});

export default LeftNavigation;