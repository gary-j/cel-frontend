import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import { BACKEND_URL } from '../utils/consts';
import axios from 'axios';
import { format, parseISO } from 'date-fns';

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
        <section className={styles.stories}>
          {posts.map((post) => (
            <>
              {/* <li key={post._id}>{post.title}</li> */}
              <div key={post._id} className={styles.storyContainer}>
                <article className={styles.storyCard}>
                  <h3>{post.theme.name}</h3>
                  <h4>
                    Par {post.writter.username}, le{' '}
                    {format(parseISO(post.createdAt), 'dd/mm/yyyy')} à{' '}
                    {format(parseISO(post.createdAt), 'hh:mm')}
                  </h4>
                  <h2></h2>
                  <p></p>
                  <p></p>
                  <div className={styles.storyAction}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </article>
                <div className={styles.storyReaction}>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </>
          ))}
        </section>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await axios.get(`${BACKEND_URL}/story/`);
  const posts = await res.data;
  return {
    props: {
      posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 120 seconds
    revalidate: 10, // In seconds
  };
}
