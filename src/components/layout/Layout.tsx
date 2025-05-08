'use client';

import { styled } from "styled-system/jsx";

import { PropsWithChildren, useState } from 'react';
import { usePathname } from 'next/navigation';
import LeftNavigation from "./LeftNavigation";
import Header from "./Header";

type Props = PropsWithChildren

const Layout = ({ children }: Props) => {

  const pathName = usePathname();
  const firstPathName = pathName?.split('/')[1];

  if (firstPathName === 'login') return <>{children}</>;

  return (
    <LayoutContainer>
      <Header />
      <PageContainer>
        <LeftNavigation firstPathName={firstPathName} />
        <MainContainer>
          {children}
        </MainContainer>
      </PageContainer>
    </LayoutContainer>
  )
};

const LayoutContainer = styled('div', {
  base: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'var(--grey400)'
  }
})

const PageContainer = styled('div', {
  base: {
    display: 'flex',
    height: 'calc(100vh - 60px)',
  }
})

const MainContainer = styled('main', {
  base: {
    position: 'relative',
    width: 'calc(100% - 284px)',
    margin: '12px',
    padding: '24px',
    backgroundColor: 'var(--white)',
    borderRadius: '8px',
  }
})

export default Layout;