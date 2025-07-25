import Link from 'next/link';
import Image from 'next/image';
import { NavigationList } from 'src/mocks/navigation';
import Calendar from '@/shared/components/home/Calendar';
import { useState } from 'react';
import { Modal, Portal } from '@/shared/components/index';
import ScheduleByDate from '@features/layer/scheduleByDate/screen/ScheduleByDate';
import Logo from '@icons/white_bg_logo.svg';
import useMobile from '@hooks/useMobile';

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
    <div
      className={`relative flex flex-col justify-between h-[calc(100vh_-_48px)] transition-all duration-350 ease-in-out overflow-y-scroll ${
        isNavSpread ? 'w-[280px] pr-5' : 'w-20'
      }`}
      style={isMobile ? mobileNavigationStyle : {}}
    >
      <div>
        {isNavSpread && (
          <div className="w-full min-h-12 pt-2">
            <Image
              src={Logo}
              alt="logo"
              placeholder="empty"
              className="w-full h-12 mx-auto"
              priority={true}
            />
          </div>
        )}
        <ul className={`relative w-full ${isNavSpread ? 'mt-4' : 'mt-[90px]'}`}>
          {NavigationList &&
            NavigationList.map((item) => {
              return (
                <Link key={item.id} href="" as={`/${item.path}`} passHref>
                  <li
                    className={`flex relative items-center text-base cursor-pointer before:transition-width before:duration-250 before:absolute before:content-[''] before:h-full before:top-0 before:left-0 before:bg-[var(--business-sub-color)] before:z-10 ${
                      isNavSpread
                        ? 'flex-row p-3.5 mb-3'
                        : 'flex-col py-3.5 my-0.5'
                    } ${
                      firstPathName === item.path
                        ? `before:w-full ${
                            isNavSpread ? 'before:rounded-2xl' : ''
                          }`
                        : 'before:w-0'
                    }`}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={20}
                      height={20}
                      priority
                      className="z-20"
                    />
                    <span
                      className={`z-20 ${
                        isNavSpread ? 'text-base ml-4' : 'text-[0.925rem] mt-1'
                      }`}
                    >
                      {item.label}
                    </span>
                  </li>
                </Link>
              );
            })}
        </ul>
      </div>
      {!isMobile && (
        <Calendar
          className={!isNavSpread ? 'hidden' : ''}
          onClick={handleDateClick}
        />
      )}
      {openModal && (
        <Portal id={'portal'}>
          <Modal
            title={'스케줄 등록'}
            titleContainer={false}
            className="w-[calc(100vw_-_3%)] h-[calc(100vh_-_5%)] top-1/2 p-0"
          >
            <ScheduleByDate
              day={day}
              handleCloseModalClick={handleCloseModalClick}
            />
          </Modal>
        </Portal>
      )}
    </div>
  );
};

export default NavigationLayout;
