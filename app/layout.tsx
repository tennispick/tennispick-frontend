import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { PropsWithChildren } from 'react';
import QueryProvider from 'src/provider/QueryProvider';
import RecoilProvider from 'src/provider/RecoilProvider';
import './global.css';
import '@styles/react-date-picker.css';
import ModalProvider from 'src/provider/ModalProvider';
import Layout from '@components/layout/Layout';

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko-kr">
      <body>
        <RecoilProvider>
          <QueryProvider>
            <ReactQueryDevtools initialIsOpen={true} />
            {/* <AppLayout>{children}</AppLayout> */}
            <Layout>{children}</Layout>
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
