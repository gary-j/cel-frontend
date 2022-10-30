import Layout from '../components/commons/Layout';
import '../styles/globals.scss';
// import '../styles/test.scss';

import { AuthProviderWrapper } from '../context/auth.context';
import { BreakPointProviderWrapper } from '../context/breakPoints.context';

//
function MyApp({ Component, pageProps }) {
  return (
    <AuthProviderWrapper>
      <BreakPointProviderWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </BreakPointProviderWrapper>
    </AuthProviderWrapper>
  );
}

export default MyApp;
