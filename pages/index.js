import Head from 'next/head';
import { BACKEND_URL } from '../utils/consts';
import axios from 'axios';
import DisplayStories from '../components/stories/displayStories/DisplayStories';
import ScrollBarPosition from '../components/scrollbar/ScrollBarPosition';
import { useContext } from 'react';
import { BreakPointContext } from '../context/breakPoints.context';
//
import styles from '../styles/desktop-Index.module.scss';

export default function Home({ posts }) {
  // console.log('PROPS :', posts);
  const { breakPoint } = useContext(BreakPointContext);
  // console.log('BREAKPOINT IS : ', breakPoint);
  //
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
      {/* <ScrollBarPosition /> */}
      {/* <h3>Breakpoint is : ' {breakPoint}'</h3> */}
      {/* <div className='searchContainer'> Recherche et filtre </div> */}
      <div className='annonce'>
        <p>Site web en construction...</p>
      </div>
      <div
        className={
          (breakPoint === 'laptop' || breakPoint === 'desktop') &&
          styles.desktop
        }>
        <DisplayStories
          stories={posts}
          cssBreakPoint={breakPoint}></DisplayStories>
        {breakPoint === 'desktop' && (
          <div className={styles.coteDroit}>{/* <p>Right side</p> */}</div>
        )}
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
