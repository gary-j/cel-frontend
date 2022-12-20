import Head from 'next/head'
import { PropsWithChildren } from 'react'

interface PageProps extends PropsWithChildren {
	title: string
}

const Page: React.FC<PageProps> = ({ title, children }) => {
	return (
		<>
			<Head>
				<title>{`${title} - Citron en Limonade`}</title>
				<meta
					name='Un espace de discussion autour de 14 thèmes de la vie courante'
					content='Citron en Limonade'
				/>
				<link rel='icon' href='/favicon-citron-en-limonade.png' />
			</Head>

			<main className='px-6 py-4'>{children}</main>
		</>
	)
}

export default Page
