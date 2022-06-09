import { FC } from 'react';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SWRConfig } from 'swr';

const AuthCheck: FC = ({ children }) => {
  // 권한 검사는 여기서
  return <>{children}</>;
};

const App = ({ Component, pageProps }: AppProps) => {
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
      <SWRConfig
        value={{
          revalidateOnFocus: false,
          shouldRetryOnError: false,
        }}
      >
        <AuthCheck>
          <Component {...pageProps} />
        </AuthCheck>
      </SWRConfig>
    </>
  );
};

export default App;
