import Layout from '../components/Layout';
import '../styles/globals.css';
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
