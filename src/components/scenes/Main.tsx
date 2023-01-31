import { StoryCard } from '@components/StoryCard'
import { Story } from '@lib/stories'

const Main = ({ stories }) => (
	<div className='flex h-full w-full items-center justify-center bg-gray-0 grid-in-main'>
		<ul>
			{stories.map((story: Story) => (
				<li key={story.id}>
					<StoryCard story={story} />
				</li>
			))}
		</ul>
	</div>
)

export default Main
