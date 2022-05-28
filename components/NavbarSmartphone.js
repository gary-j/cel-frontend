import Link from 'next/link';
import Image from 'next/image';
import styles from './NavbarSmartphone.module.scss';
import { useState } from 'react';
//
const NavbarSmartphone = () => {
  const [isOpen, toggleMenu] = useState(false);
  return (
    <>
      <nav className={styles.navbar}>
        <Image
          className={styles.logo}
          src='/logos/logo-green-flash-1-ligne.svg'
          alt=''
          width={230}
          height={40}
        />
        <Image
          className={styles.logo}
          src={
            isOpen === true
              ? '/assets/img/navigation-icons-svg/icon-menu-cross@3x.png'
              : '/assets/img/navigation-icons-svg/icon-menu-burger@3x.png'
          }
          alt={isOpen === true ? 'close menu button' : 'open menu button'}
          width={32}
          height={32}
          onClick={() => toggleMenu(!isOpen)}
        />
      </nav>
      <div
        className={`${styles.sideMenu} ${
          isOpen === true ? styles.active : ''
        }`}>
        HomepageMenu>
      </div>
    </>
  );
};

export default NavbarSmartphone;
