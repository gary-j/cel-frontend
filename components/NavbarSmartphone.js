import Link from 'next/link';
import Image from 'next/image';
import styles from './NavbarSmartphone.module.scss';
import { useState } from 'react';
import Icon_connect from '../public/assets/img/svgs/icon-page-connect.svg';
//
const NavbarSmartphone = () => {
  const [isOpen, toggleMenu] = useState(false);
  return (
    <>
      <nav className={styles.navbar}>
        <Link href={'/'}>
          <Image
            className={styles.logo}
            src='/logos/logo-green-flash-1-ligne.svg'
            alt=''
            width={230}
            height={40}
          />
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
      <div
        className={`${styles.sideMenuContainer + ' ' + styles.svg} ${
          isOpen === true ? styles.active : ''
        }`}>
        <div className={styles.menuItem}>
          <Icon_connect className={styles.icon} />
          <p className={styles.p}> Connexion/Inscription</p>
        </div>
      </div>
    </>
  );
};

export default NavbarSmartphone;
