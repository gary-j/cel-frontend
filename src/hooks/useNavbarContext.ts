import { NavbarContext } from '@contexts/NavbarContext'
import { useContext } from 'react'

export const useNavbarContext = () => useContext(NavbarContext)
