import Layout from '../components/Layout';
import '../styles/globals.scss';
// import '../styles/test.scss';

import { AuthProviderWrapper } from '../context/auth.context';
import { BreakPointProviderWrapper } from '../context/breakPoints.context';
import { HideThisComponentProviderWrapper } from '../context/hideThisComponent.context';
//
function MyApp({ Component, pageProps }) {
  return (
    <AuthProviderWrapper>
      <BreakPointProviderWrapper>
        <HideThisComponentProviderWrapper>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </HideThisComponentProviderWrapper>
      </BreakPointProviderWrapper>
    </AuthProviderWrapper>
  );
}

export default MyApp;
