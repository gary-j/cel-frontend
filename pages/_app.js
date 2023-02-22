import { SessionProvider } from 'next-auth/react';
import Layout from '../components/commons/Layout';
import '../styles/globals.scss';
// import '../styles/test.scss';

import { AuthProviderWrapper } from '../context/auth.context';
import { BreakPointProviderWrapper } from '../context/breakPoints.context';
// const cookieAuth = getCookie('next-auth.session-token');
// console.log('le cookie : ', cookieAuth);
//
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <AuthProviderWrapper>
        <BreakPointProviderWrapper>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </BreakPointProviderWrapper>
      </AuthProviderWrapper>
    </SessionProvider>
  );
}

export default MyApp;
