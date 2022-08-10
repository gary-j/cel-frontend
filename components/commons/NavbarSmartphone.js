import Link from 'next/link';
import Image from 'next/image';
import styles from './NavbarSmartphone.module.scss';
import { useState, useContext } from 'react';
import { AuthContext } from '../../context/auth.context';
import Menu from '../menu/Menu';
import Icon_menu_burger from '../../public/assets/img/svgs/icon-menu-burger.svg';
import Icon_close from '../../public/assets/img/svgs/icon-page-close.svg';
//
const NavbarSmartphone = () => {
  const [isOpen, toggleMenu] = useState(false);
  // const [displayForm, setDisplayForm] = useState(false);

  const { user, isLoggedIn, logOutUser } = useContext(AuthContext);
  // console.log('le USER : ', user);

  return (
    <>
      {/* <div className={styles.message}>...Site web en construction...</div> */}
      <nav className={styles.navbar}>
        <Link href={'/'}>
          <a>
            <Image
              className={styles.logo}
              src='/logos/logo-green-flash-1-ligne.svg'
              alt='logo de Citron en limonade'
              width={230}
              height={40}
            />
          </a>
        </Link>
        <div onClick={() => toggleMenu(!isOpen)}>
          {isOpen ? (
            <Icon_close className={`${styles.iconToggleMenu} iconToggleMenu`} />
          ) : (
            <Icon_menu_burger
              className={`${styles.iconToggleMenu} iconToggleMenu`}
            />
          )}
        </div>
      </nav>
      <Menu isOpen={isOpen} toggleMenu={toggleMenu}></Menu>
    </>
  );
};

export default NavbarSmartphone;
