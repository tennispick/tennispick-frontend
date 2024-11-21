'use client';

import { PropsWithChildren } from 'react';
import { usePathname } from 'next/navigation';
// import useMobile from '@hooks/useMobile';

import NavigationLayout from './NavigationLayout';
import AppHeader from './AppHeader';

import useUserStore from 'app/src/shared/lib/store/userStore';

const AppLayout = ({ children }: PropsWithChildren) => {

  const pathName = usePathname();
  const firstPathName = pathName?.split('/')[1];
  const { name, account } = useUserStore();

  // const isMobile = useMobile();

  // const mobileLayoutStyle = {
  //   height: 'calc(100vh - 76px)',
  //   top: '76px',
  //   overflowY: 'scroll',
  // };

  // const mobileMainStyle = {
  //   width: '100%',
  //   height: '100%',
  // };

  return (
    <>
      {firstPathName === 'login' ? (
        <>{children}</>
      ) : (
        <div className="relative w-screen h-screen">
          <AppHeader name={name} account={account} />
          <div className="relative flex h-[calc(100%-60px)] bg-[#F8F8F8]">
            <NavigationLayout
              firstPathName={firstPathName ?? ''}
            />
            <main className="relative p-3 w-full">
              <div className="relative w-full h-full bg-white rounded-lg p-6">
                {children}
              </div>
            </main>
          </div>
        </div>
      )}
    </>
  );
};

export default AppLayout;
