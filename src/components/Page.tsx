import {
	Ads,
	Footer,
	Navbar,
	Pros,
	Resources,
	Searchbar,
} from '@components/scenes'
import { PropsWithChildren, useState } from 'react'

import Head from 'next/head'
import { NavbarProvider } from '@contexts/NavbarContext'
import { SelectedPage } from '@shared/types'

interface PageProps extends PropsWithChildren {
	title: string
}

const Page: React.FC<PageProps> = ({ title, children }) => {
	const [selectedPage, setSelectedPage] = useState<SelectedPage>(
		SelectedPage.accueil
	)

	const handleSelectedPage = () => {
		console.log('selectedPage: ', selectedPage)
	}

	return (
		<div className='m-0 tablet:mx-6 tablet:my-5  laptop:mx-9 laptop:my-8 desktop:mx-12 desktop:my-10'>
			<Head>
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0, shrink-to-fit=no'
				/>
				<meta
					name='Un espace de discussion autour de 14 thèmes de la vie courante'
					content='Citron en Limonade'
				/>
				<link rel='icon' href='/favicon-citron-en-limonade.png' />
				<title>{`${title} - Citron en limonade`}</title>
			</Head>

			<main className='grid h-full w-full grid-cols-default grid-rows-default grid-areas-default tablet:grid-cols-tablet tablet:grid-rows-tablet tablet:gap-x-2 tablet:grid-areas-tablet laptop:grid-cols-laptop  laptop:grid-rows-laptop laptop:gap-x-5 laptop:grid-areas-laptop desktop:grid-cols-desktop desktop:grid-rows-desktop desktop:gap-x-7 desktop:grid-areas-desktop'>
				<Ads />
				<Footer />
				<NavbarProvider>
					<Navbar
						selectedPage={selectedPage}
						setSelectedPage={handleSelectedPage}
					/>
				</NavbarProvider>
				<Pros className='hidden laptop:flex' />
				<Resources className='hidden laptop:flex' />
				<Searchbar />
				{children}
			</main>
		</div>
	)
}

export default Page
