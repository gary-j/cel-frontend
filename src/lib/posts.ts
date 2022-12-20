import { fetchJson } from '@lib/api'

const { BACKEND_URL } = process.env

export interface Post {
	id: number
	title: string
}

function stripPosts(post: any): Post {
	return {
		id: post.id,
		title: post.title,
	}
}

export async function getPosts(): Promise<Post[]> {
	const posts = await fetchJson(`${BACKEND_URL}/story`)
	return posts.map(stripPosts)
}
