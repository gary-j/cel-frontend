import {
	Dispatch,
	FC,
	ReactNode,
	SetStateAction,
	createContext,
	useState,
} from 'react'

interface INavbarContext {
	isMenuOpen: boolean
	isTopOfPage?: boolean
	setIsTopOfPage?: Dispatch<SetStateAction<boolean>>
	toggleMenuOpen: () => void
}

interface IProps {
	children: ReactNode
}

const defaultState = {
	isMenuOpen: false,
	isTopOfPage: true,
	setIsTopOfPage: () => {},
	toggleMenuOpen: () => {},
}

export const NavbarContext = createContext<INavbarContext>(defaultState)

export const NavbarProvider: FC<IProps> = ({ children }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(defaultState.isMenuOpen)
	const [isTopOfPage, setIsTopOfPage] = useState(defaultState.isTopOfPage)

	const toggleMenuOpen = () => setIsMenuOpen(prevState => !prevState)

	return (
		<NavbarContext.Provider
			value={{ isMenuOpen, isTopOfPage, setIsTopOfPage, toggleMenuOpen }}
		>
			{children}
		</NavbarContext.Provider>
	)
}
