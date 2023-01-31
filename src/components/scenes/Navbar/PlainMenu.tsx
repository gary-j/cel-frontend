import Link from 'next/link'
import LogoDesktop from '@assets/logos/logo-desktop.svg'
import Messages from '@components/scenes/Navbar/Messages'
import NavLinks from '@components/scenes/Navbar/NavLinks'
import Pros from '@components/scenes/Pros'
import Resources from '@components/scenes/Resources'
import { RoutingProps } from '@shared/types'
import UserActions from '@components/scenes/Navbar/UserActions'
import useMediaQuery from '@hooks/useMediaQuery'

const PlainMenu = ({ selectedPage, setSelectedPage }: RoutingProps) => {
	const isBelowLaptopScreenSize = useMediaQuery('(max-width: 1280px)')

	return (
		<>
			<Link aria-label='Logo' href='/'>
				<LogoDesktop
					alt='logo'
					className='mb-5 mt-8 ml-2 hidden h-14 w-56 cursor-pointer object-contain p-0 tablet:inline-block'
					height={40}
					width={230}
				/>
			</Link>

			{/* MENU ITEMS */}
			<div className='flex w-full flex-col items-center justify-between gap-11 bg-blue-stone-900 pb-14'>
				<UserActions />
				<NavLinks
					selectedPage={selectedPage}
					setSelectedPage={setSelectedPage}
				/>
				<Messages />
				{isBelowLaptopScreenSize && <Pros />}
				{isBelowLaptopScreenSize && <Resources />}
			</div>
		</>
	)
}

export default PlainMenu
