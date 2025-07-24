'use client';

import { PropsWithChildren, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import doubleArrowLeft from '@icons/keyboard_double_arrow_left.svg';
import useMobile from '@hooks/useMobile';

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
        <div
          className={`w-screen h-screen bg-[var(--business-color)] relative text-[var(--white100)] flex ${
            isMobile 
              ? 'h-[calc(100vh-76px)] top-[76px] overflow-y-scroll'
              : isNavSpread 
                ? 'p-5' 
                : 'pr-5 pt-5 pb-5 pl-0'
          }`}
        >
          <NavigationLayout
            isNavSpread={isNavSpread}
            firstPathName={firstPathName}
          />
          <main
            className={`h-[calc(100vh-48px)] bg-[var(--white100)] rounded-xl transition-all duration-[350ms] ease-in-out ${
              isMobile 
                ? 'h-[calc(100vh-76px)] top-[76px] overflow-y-scroll'
                : isNavSpread 
                  ? 'w-[calc(100%-280px)]' 
                  : 'w-[calc(100%-80px)]'
            }`}
          >
            {!isMobile && (
              <i className="absolute inline-block w-9 h-9 bg-[var(--white100)] -left-9 top-5 rounded-tl-xl rounded-bl-xl cursor-pointer">
                <Image
                  src={doubleArrowLeft}
                  alt="double arrow left"
                  width={24}
                  height={24}
                  onClick={() => setIsNavSpread(!isNavSpread)}
                  className={`absolute top-1/2 left-1/2 transition-all duration-300 ease-out transform -translate-x-1/2 -translate-y-1/2 ${
                    isNavSpread ? 'rotate-0' : 'rotate-180'
                  }`}
                  style={{ width: '28px', height: '28px' }}
                />
              </i>
            )}
            <div className="relative w-full h-full p-6 text-[var(--black100)] overflow-hidden">
              {children}
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default AppLayout;
