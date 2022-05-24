import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import SigninForm from '../components/auth/SigninForm';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Citron en Limonade</title>
        <meta
          name='Un espace de discussion autour de 14 thèmes de la vie courante'
          content='Citron en Limonade'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          HOMEPAGE <br></br> CITRON EN Limonade
        </h1>
        <SigninForm></SigninForm>
      </main>
    </div>
  );
}
