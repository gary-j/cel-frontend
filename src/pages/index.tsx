// import axios from 'axios'
// import Head from 'next/head'
// import { useContext } from 'react'
// import { BreakPointContext } from '../../context/breakPoints.context'
// import { BACKEND_URL } from '../../utils/consts'
// import DisplayStories from '../components/stories/displayStories/DisplayStories'
//
import Page from '@components/Page'
import { getPosts, Post } from '@lib/posts'
// import styles from '@styles/desktop-Index.module.scss'
import { GetStaticProps } from 'next'

interface HomePageProps {
	posts: Post[]
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
	// const res = await axios.get(`${BACKEND_URL}/story/`)
	// const posts = await res.data
	const posts = await getPosts()
	return {
		props: { posts },
	}
}

const HomePage: React.FC<HomePageProps> = ({ posts }) => {
	// console.log('PROPS :', posts);
	// const { breakPoint } = useContext(BreakPointContext)
	// console.log('BREAKPOINT IS : ', breakPoint);
	//
	return (
		<Page title='titre principal…'>
			{/* <ScrollBarPosition /> */}
			{/* <h3>Breakpoint is : ' {breakPoint}'</h3> */}
			{/* <div className='searchContainer'> Recherche et filtre </div> */}
			<div className='annonce'>
				<p>Site web en construction...</p>
			</div>
			<div
			// className={
			// 	breakPoint === 'laptop' || breakPoint === 'desktop'
			// 		? styles.desktop
			// 		: ''
			// }
			>
				{/* <DisplayStories
					stories={posts}
					cssBreakPoint={breakPoint}></DisplayStories> */}

				{/* {breakPoint === 'desktop' && (
					<div className={styles.coteDroit}>
						<p>Right side</p>
					</div>
				)} */}
			</div>
		</Page>
	)
}

export default HomePage
