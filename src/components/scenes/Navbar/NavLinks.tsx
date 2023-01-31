import IconAbonnements from '@assets/icons/menu/icon-menu-abonnements.svg'
import IconHome from '@assets/icons/menu/icon-menu-home.svg'
import IconThemes from '@assets/icons/menu/icon-menu-themes.svg'
import IconUne from '@assets/icons/menu/icon-menu-une.svg'
import NavLink from '@components/scenes/Navbar/NavLink'
import { RoutingProps } from '@shared/types'

const links = [
	{ linkIcon: IconHome, linkText: 'Accueil' },
	{ linkIcon: IconThemes, linkText: 'Thèmes' },
	{ linkIcon: IconAbonnements, linkText: 'Mes abonnements' },
	{ linkIcon: IconUne, linkText: 'À la une !' },
]

const NavLinks = ({ selectedPage, setSelectedPage }: RoutingProps) => {
	return (
		<div className='m-0 flex w-full flex-col gap-12 bg-blue-stone-900 py-0 px-7 tablet:px-5 laptop:px-7'>
			{links.map(({ linkIcon, linkText }, index) => (
				<NavLink
					href={selectedPage}
					key={index}
					Icon={linkIcon}
					page={linkText}
					selectedPage={selectedPage}
					setSelectedPage={setSelectedPage}
				/>
			))}
		</div>
	)
}

export default NavLinks
