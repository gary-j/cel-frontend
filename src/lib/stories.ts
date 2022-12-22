import { fetchJson } from '@lib/api'

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL

export interface Story {
	content: string
	id: number
	title: string
	theme: {
		name: string
		slug: string
	}
}

function stripStories(story: any): Story {
	return {
		content: story.content,
		id: story._id,
		title: story.title,
		theme: {
			name: story.theme.name,
			slug: story.theme.slug,
		},
	}
}

export async function getStories(): Promise<Story[]> {
	const stories = await fetchJson(`${BACKEND_URL}/story`)
	// console.log('🚀 ~ file: posts.ts:20 ~ getPosts ~ posts', posts)
	return stories.map(stripStories)
}
