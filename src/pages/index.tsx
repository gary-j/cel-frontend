// import styles from '@styles/desktop-Index.module.scss'
import { Main } from '@components/areas'
import Page from '@components/Page'
import { getStories, Story } from '@lib/stories'
import { GetStaticProps } from 'next'

interface HomePageProps {
	stories: Story[]
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
	const stories = await getStories()
	return {
		props: { stories },
	}
}

const HomePage: React.FC<HomePageProps> = ({ stories }) => {
	console.log('[HomePage] render: ', stories)

	return (
		<Page title='Accueil'>
			<Main stories={stories} />
		</Page>
	)
}

export default HomePage
