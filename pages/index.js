import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import { getServerSideProps } from '../utils/axiosRequest';
import { publicRequest } from '../utils/axiosRequest';

export default function Home({ posts }) {
  console.log('PROPS :', posts);
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

      <div className={styles.main}>
        <div className='searchContainer'> Recherche et filtre </div>
        <h3>LES STORIES</h3>
        <ul>
          {posts.map((post) => (
            <li key={post._id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await publicRequest.get(`/story/`);
  console.log('RES : ', res.data);
  const posts = await res.data;
  return {
    props: {
      posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 120 seconds
    revalidate: 120, // In seconds
  };
}
