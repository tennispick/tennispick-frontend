'use client';

import { PropsWithChildren } from 'react';
import { usePathname } from 'next/navigation';

import GlobalNavigation from './GNB';
import AppHeader from './AppHeader';

import { useUserStore } from '@/shared/lib/store/userStore';

const AppLayout = ({ children }: PropsWithChildren) => {
  const pathName = usePathname();
  const firstPathName = pathName?.split('/')[1];
  const { name, account } = useUserStore();

  if (firstPathName === 'login') return <>{children}</>;

  return (
    <div className="relative w-screen min-h-screen">
      <AppHeader name={name} account={account} />
      <GlobalNavigation firstPathName={firstPathName ?? ''} />
      {/* TODO 글로벌 스택에 쌓아놓고, 그게 또 path가 있으면 width 조절 */}
      <main className="relative flex w-full rounded-lg overflow-y-scroll bg-[#F8F8F8] p-4 gap-4">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
