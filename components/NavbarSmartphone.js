import Link from 'next/link';
import Image from 'next/image';
import styles from './NavbarSmartphone.module.scss';
import { useState, useContext } from 'react';
import Icon_connect from '../public/assets/img/svgs/icon-page-connect.svg';
import Icon_home from '../public/assets/img/svgs/icon-menu-home.svg';
import Icon_theme from '../public/assets/img/svgs/icon-menu-themes.svg';
import Icon_abos from '../public/assets/img/svgs/icon-menu-abonnements.svg';
import Icon_aLaUne from '../public/assets/img/svgs/icon-menu-une.svg';
import Icon_close from '../public/assets/img/svgs/icon-page-close.svg';

import SigninForm from './auth/SigninForm';
import SignFormContainer from './auth/SignFormContainer';
import Menu from './menu/Menu';
import { AuthContext } from '../context/auth.context';
//
const NavbarSmartphone = () => {
  const [isOpen, toggleMenu] = useState(false);
  const [displayForm, setDisplayForm] = useState(false);

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
              alt=''
              width={230}
              height={40}
            />
          </a>
        </Link>
        <Image
          className={styles.logo}
          src={
            isOpen === true
              ? '/assets/img/navigation-icons-png/icon-menu-cross@3x.png'
              : '/assets/img/navigation-icons-png/icon-menu-burger@3x.png'
          }
          alt={isOpen === true ? 'close menu button' : 'open menu button'}
          width={32}
          height={32}
          onClick={() => toggleMenu(!isOpen)}
        />
      </nav>
      <Menu
        isOpen={isOpen}
        toggleMenu={toggleMenu}
        displayForm={displayForm}
        setDisplayForm={setDisplayForm}></Menu>
    </>
  );
};

export default NavbarSmartphone;
