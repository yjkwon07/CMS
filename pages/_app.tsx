import { FC } from 'react';
import type { ReactElement, ReactNode } from 'react';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SWRConfig } from 'swr';

import '@/styles/default.css';
import '@/styles/font.css';
import GlobalStyles from '@/styles/GlobalStyles';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const AuthCheck: FC = ({ children }) => {
  // 권한 검사는 여기서
  return <>{children}</>;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page: any) => page);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="content-language" content="ko" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <title>CMS</title>
      </Head>
      <GlobalStyles />
      <SWRConfig
        value={{
          revalidateOnFocus: false,
          shouldRetryOnError: false,
        }}
      >
        <AuthCheck>{getLayout(<Component {...pageProps} />)}</AuthCheck>
      </SWRConfig>
    </>
  );
};

export default App;
