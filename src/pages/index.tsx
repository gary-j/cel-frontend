import { Story, getStories } from '@lib/stories'

import { GetStaticProps } from 'next'
import { Main } from '@components/scenes'
import Page from '@components/Page'

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
