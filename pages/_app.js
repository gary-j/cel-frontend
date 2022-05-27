import Layout from '../components/Layout';
import '../styles/globals.scss';
import { AuthProviderWrapper } from '../context/auth.context';
//
function MyApp({ Component, pageProps }) {
  return (
    <AuthProviderWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProviderWrapper>
  );
}

export default MyApp;
