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
        <div className="relative w-screen min-h-screen">
          <AppHeader name={name} account={account} />
          <div className="relative h-[calc(100vh-60px)] flex bg-[#F8F8F8]">
            <NavigationLayout
              firstPathName={firstPathName ?? ''}
            />
            {/* TODO 글로벌 스택에 쌓아놓고, 그게 또 path가 있으면 width 조절 */}
            <main className="relative m-3 w-full h-[calc(100%-12px)] rounded-lg overflow-y-scroll">
              {children}
            </main>
          </div>
        </div>
      )}
    </>
  );
};

export default AppLayout;
