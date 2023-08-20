import { useState } from 'react';
import type { AppProps } from "next/app";
import Head from "next/head";
import { Analytics } from '@vercel/analytics/react';
import { QueryClient, QueryClientProvider, Hydrate } from "@tanstack/react-query";
import { AppLayout } from '@components/index';
import { globalStyles } from "@styles/styles";
import { config } from "@lib/react-query/config";
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }: AppProps) {

  const [queryClient, ] = useState(() => new QueryClient(config)) ;

  return (
    <RecoilRoot>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps?.dehydrateState}>
          {globalStyles}
          <AppLayout>
            <Component {...pageProps} />
            <Analytics />
          </AppLayout>
          <div id={'portal'} />
          <div id={'rightSide'} />
        </Hydrate>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
