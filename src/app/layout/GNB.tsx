'use client';

import { NavigationList } from 'src/이전 파일들/mocks/navigation';
import { useEffect, useState } from 'react';
import { cn } from '@/이전 파일들/lib/utils';
import { useRouter } from 'next/navigation';

type Props = {
  firstPathName: string;
};

const GlobalNavigation = ({ firstPathName }: Props) => {
  const router = useRouter();
  const [isFixed, setIsFixed] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 60) setIsFixed(true);
      else setIsFixed(false);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={cn(
        'relative h-[60px] bg-white-100 border-b border-#ECECEC2',
        isFixed ? 'fixed top-0 left-0 right-0 z-50' : '',
      )}
    >
      <div className="flex h-full justify-between items-center px-4 ">
        <ul className="relative h-full flex py-2 gap-4">
          {NavigationList.map((item) => (
            <li
              key={item.id}
              className={cn(
                'flex items-center gap-[10px] py-2 px-5 rounded-lg cursor-pointer transition-colors duration-150',
                firstPathName === item.path
                  ? 'bg-[#F6F6F6]'
                  : 'hover:bg-[#F6F6F6]',
              )}
              onClick={() => router.push(`/${item.path}`)}
            >
              {item.src('w-5 h-5 text-[#565A60]')}
              <span className="text-[#565A60]">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="relative h-[250px]">
          <Calendar
            // className={!isNavSpread ? 'hidden' : ''}
            handleClick={handleDateClick}
          />
      </div> */}
      {/* {openModal && (
        <Portal id={'portal'}>
          <Modal
            title={'스케줄 등록'}
            titleContainer={false}
            className="w-[calc(100vw-3%)] h-[calc(100vh-5%)] top-1/2 p-0"
          >
            <ScheduleByDate
              day={day}
              handleCloseModalClick={handleCloseModalClick}
            />
          </Modal>
        </Portal>
      )} */}
    </div>
  );
};

export default GlobalNavigation;
