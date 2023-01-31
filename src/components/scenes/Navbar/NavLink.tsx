import { ReactElement, SVGProps } from 'react'

import Link from 'next/link'
import { SelectedPage } from 'src/shared/types'

type Props = {
	href: string
	Icon: (props: SVGProps<SVGElement>) => ReactElement
	page: string
	selectedPage: SelectedPage
	setSelectedPage: (value: SelectedPage) => void
}

function NavLink({ href, Icon, page, selectedPage, setSelectedPage }: Props) {
	const lowerCasePage = SelectedPage[page.toLowerCase().replace(/ /g, '')]

	return (
		<Link href={lowerCasePage} passHref>
			<a className='group flex flex-row transition-all duration-700 ease-in-out hover:font-semibold before:hover:mr-4 before:hover:h-6 before:hover:w-1.5 before:hover:rounded-md before:hover:bg-carnation-400'>
				<Icon className='mr-4 h-6 w-6 fill-white text-white' />
				<div className='my-auto w-full font-light text-white focus:font-semibold group-hover:font-semibold'>
					{page}
				</div>
			</a>
		</Link>
	)
}

export default NavLink
