import Bars3Icon from '@assets/icons/icon-bars3.svg'
import Link from 'next/link'
import LogoMobile from '@assets/logos/logo-mobile.svg'
import XMarkIcon from '@assets/icons/icon-xmark.svg'
import { useNavbarContext } from '@hooks/useNavbarContext'

const DropdownMenuHeader = () => {
	const flexBetween = 'flex items-center justify-between'
	const { isMenuOpen, isTopOfPage, toggleMenuOpen } = useNavbarContext()

	const handleClick = () => {
		toggleMenuOpen()
		window.scrollTo(0, 0)
	}

	return (
		<div
			className={`${
				isTopOfPage ? '' : 'border-b-2 border-pastel-green-300'
			} ${flexBetween} fixed top-0 z-30 mx-auto my-0 h-20 w-full gap-2 bg-blue-stone-900 px-7 py-0`}
		>
			<Link aria-label='Logo' href='/'>
				<LogoMobile
					alt='logo'
					className='m-0 h-full min-h-full w-56 cursor-pointer object-contain p-0 tablet:hidden'
				/>
			</Link>

			<button
				className='align-center flex justify-center'
				onClick={handleClick}
			>
				{isMenuOpen ? (
					<XMarkIcon className='h-6 w-6 text-white' />
				) : (
					<Bars3Icon className='h-6 w-6 text-white' />
				)}
			</button>
		</div>
	)
}

export default DropdownMenuHeader
