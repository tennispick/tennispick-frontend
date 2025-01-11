import '@styles/globals.css';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { PropsWithChildren } from 'react';
import QueryProvider from 'src/app/provider/QueryProvider';
import RecoilProvider from 'src/app/provider/RecoilProvider';
import './global.css';
import '../src/이전 파일들/styles/react-date-picker.css';
import AppLayout from '@/app/layout/AppLayout';
import ModalProvider from 'src/app/provider/ModalProvider';

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko-kr">
      <body>
        <RecoilProvider>
          <QueryProvider>
            <ReactQueryDevtools initialIsOpen={true} />
            <AppLayout>{children}</AppLayout>
            <div id="portal" />
            <div id="layerPortal" />
            <div id="confirmModal" />
            <div id="drawer" />
            <ModalProvider />
          </QueryProvider>
        </RecoilProvider>
      </body>
    </html>
  );
}
