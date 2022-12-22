import { Story } from '@lib/stories'
import ReactReadMoreReadLess from 'react-read-more-read-less'

interface PostCardProps {
	story: Story
}

const PostCard: React.FC<PostCardProps> = ({ story }) => {
	const {
		content,
		theme: { name },
		title,
	} = story

	return (
		<div className='relative mb-8 w-full px-4 pt-5 pb-10 '>
			<article className='rounded-lg border bg-white px-4 pt-5 pb-10 shadow-story'>
				<header>
					<h3 className='mb-4 text-sm uppercase text-green-1'>{name}</h3>
				</header>
				<div className='mb-5 h-0.5 bg-grey-0 tablet:hidden' />
				<h2 className='mb-4 text-xl font-semibold'>{title}</h2>
				<p className='mb-5 text-sm leading-loose text-black opacity-75'>
					<ReactReadMoreReadLess
						// charLimit={cssBreakPoint === 'desktop' ? 145 : 166}
						charLimit={145}
						ellipsis={'…'}
						readMoreText={' Lire la suite'}
						readLessText={'Replier ▲'}
						readMoreClassName={'float-right text-green-1'}
						readLessClassName={'float-right text-green-1'}>
						{content}
					</ReactReadMoreReadLess>
				</p>
				<div className='mb-5 h-0.5 bg-grey-0 tablet:hidden' />
			</article>
		</div>
	)
}

export default PostCard
