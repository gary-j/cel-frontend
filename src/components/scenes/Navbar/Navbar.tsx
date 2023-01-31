import DropdownMenuHeader from '@components/scenes/Navbar/DropdownMenuHeader'
import Messages from '@components/scenes/Navbar/Messages'
import NavLinks from '@components/scenes/Navbar/NavLinks'
import PlainMenu from '@components/scenes/Navbar/PlainMenu'
import Pros from '@components/scenes/Pros'
import Resources from '@components/scenes/Resources'
import { RoutingProps } from 'src/shared/types'
import UserActions from '@components/scenes/Navbar/UserActions'
import { useEffect } from 'react'
import useMediaQuery from '@hooks/useMediaQuery'
import { useNavbarContext } from '@hooks/useNavbarContext'

const Navbar = ({ selectedPage, setSelectedPage }: RoutingProps) => {
	const isAboveTabletScreenSize = useMediaQuery('(min-width: 800px)')
	const { isMenuOpen, setIsTopOfPage } = useNavbarContext()

	useEffect(() => {
		const handleScroll = () => setIsTopOfPage(window.scrollY === 0)
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [setIsTopOfPage])

	return (
		<>
			{isAboveTabletScreenSize ? (
				<nav className='z-50 w-full rounded-lg bg-blue-stone-900 grid-in-navbar'>
					<PlainMenu
						selectedPage={selectedPage}
						setSelectedPage={setSelectedPage}
					/>
				</nav>
			) : (
				<div className='relative'>
					<nav className='fixed z-50 w-full bg-blue-stone-900 grid-in-navbar'>
						<DropdownMenuHeader />
					</nav>
					{isMenuOpen ? (
						<div className='absolute top-[90px] z-40 flex h-fit w-full origin-top scale-100 transform flex-col items-center justify-between gap-11 bg-blue-stone-900 pb-8'>
							<UserActions />
							<NavLinks
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
							<Messages />
							<Pros />
							<Resources />
						</div>
					) : null}
				</div>
			)}
		</>
	)
}

export default Navbar
