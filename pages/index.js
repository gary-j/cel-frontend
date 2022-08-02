import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import { BACKEND_URL } from '../utils/consts';
import axios from 'axios';
import DisplayStories from '../components/stories/DisplayStories';
import ScrollBarPosition from '../components/scrollbar/ScrollBarPosition';
import { useContext } from 'react';
import { BreakPointContext } from '../context/breakPoints.context';
import Menu from '../components/menu/Menu';
//

export default function Home({ posts }) {
  // console.log('PROPS :', posts);
  const { breakPoint } = useContext(BreakPointContext);
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
      <div className='index'>
        {(breakPoint === 'laptop' || breakPoint === 'desktop') && <Menu></Menu>}
        <DisplayStories stories={posts}></DisplayStories>
        {breakPoint === 'desktop' && <div className='coteDroit'></div>}
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
