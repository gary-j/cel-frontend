import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import { getServerSideProps } from '../utils/axiosRequest';
//
export async function getStaticProps() {
  const res = await getServerSideProps.get(`/theme/all`);
  const themes = await res.data;
  return {
    props: {
      themes: themes || [],
    },
  };
}

export default function Home({ themes }) {
  return (
    <>
      <Head>
        <title>Citron en Limonade</title>
        <meta
          name='Un espace de discussion autour de 14 thèmes de la vie courante'
          content='Citron en Limonade'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        {/* <HomepageMenu></HomepageMenu> */}
        {/* <SigninForm></SigninForm> */}
        <hr />
        {/* <SignupForm themes={themes}></SignupForm> */}
      </main>
    </>
  );
}
