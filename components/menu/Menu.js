import React from 'react';
import Image from 'next/image';
import { useContext, useState } from 'react';
import Link from 'next/link';
import styles from './Menu.module.scss';
//
import { AuthContext } from '../../context/auth.context';
import { BreakPointContext } from '../../context/breakPoints.context';
//
import Icon_connect from '../../public/assets/img/svgs/page-icons/icon-page-connect.svg';
import Icon_home from '../../public/assets/img/svgs/menu-icons/icon-menu-home.svg';
import Icon_theme from '../../public/assets/img/svgs/menu-icons/icon-menu-themes.svg';
import Icon_abos from '../../public/assets/img/svgs/menu-icons/icon-menu-abonnements.svg';
import Icon_aLaUne from '../../public/assets/img/svgs/menu-icons/icon-menu-une.svg';
import Icon_close from '../../public/assets/img/svgs/page-icons/icon-page-close.svg';
import Icon_writeMess from '../../public/assets/img/svgs/page-icons/icon-page-message-write.svg';
//
import SignFormContainer from '../auth/SignFormContainer';

function Menu({ isOpen, toggleMenu }) {
  const { user, isLoggedIn, logOutUser } = useContext(AuthContext);
  const [displayForm, setDisplayForm] = useState(false);
  //
  const { breakPoint } = useContext(BreakPointContext);
  // let cssbreak = breakPoint;
  // console.log('cssbreak : ', cssbreak);
  return (
    <>
      <nav
        className={`
          ${styles.sideMenuContainer} ${isOpen ? styles.active : ''} ${
          breakPoint === 'desktop'
            ? // || breakPoint === 'laptop'
              styles.desktop
            : ''
        }
          `}>
        <div className={styles.scrollContainer}>
          {isLoggedIn ? (
            <div className={`${styles.menuItemContainer} ${styles.first}`}>
              <div className={styles.item}>
                <Image
                  src={`https://avatars.dicebear.com/api/adventurer/${user.username}.svg`}
                  alt=''
                  width={40}
                  height={40}
                />
                <p className={styles.p}>{user.username}</p>
              </div>
            </div>
          ) : (
            <div
              className={styles.menuLogin}
              onClick={() => setDisplayForm(!displayForm)}>
              <Icon_connect className={styles.icon} />
              <p className={styles.p}>Connexion/Inscription</p>
            </div>
          )}
          <div className={styles.buttonContainer}>
            <Link href='/story/create'>
              <button className={styles.btnRose}>PUBLIER</button>
            </Link>
            {/* <button className={styles.btnTransparent}>MODÉRER</button> */}
          </div>
          <div className={styles.menuItemContainer}>
            <div className={styles.item}>
              <Icon_home className={styles.icon} />
              <p className={styles.p}>Accueil</p>
            </div>
          </div>
          <div className={styles.menuItemContainer}>
            <div className={styles.item}>
              <Icon_theme className={styles.icon} />
              <p className={styles.p}>Thèmes</p>
            </div>
          </div>
          <div className={styles.menuItemContainer}>
            <div className={styles.item}>
              <Icon_abos className={styles.icon} />
              <p className={styles.p}>Mes abonnements</p>
            </div>
          </div>
          <div className={styles.menuItemContainer}>
            <div className={styles.item}>
              <Icon_aLaUne className={styles.icon} />
              <p className={styles.p}>A la une</p>
            </div>
          </div>
          <Link href=''>
            <div className={`${styles.buttonContainer} ${styles.messagerie} `}>
              <div className={styles.gauche}>
                <Icon_writeMess className={styles.icon} />
              </div>
              <div className={styles.droite}>
                <div className={styles.message}>
                  <p>Messagerie</p>
                </div>
                <div className={styles.nombre}>
                  <p>2</p>
                </div>
              </div>
            </div>
          </Link>
          <Link href=''>
            <div className={styles.bigButtonInMenu}>
              <p>TROUVER UN PROFESSIONNEL</p>
              <p>ou une association</p>
            </div>
          </Link>
          <Link href=''>
            <div className={`${styles.bigButtonInMenu} ${styles.espacePro}`}>
              <p>ESPACE PRO</p>
              <p>(médecin, psychologue, avocat...)</p>
            </div>
          </Link>
          <Link href=''>
            <div className={`${styles.bigButtonInMenu} ${styles.ressources}`}>
              <p>AUTRES RESSOURCES</p>
            </div>
          </Link>
          {isLoggedIn ? (
            <div
              className={`${styles.menuItemContainer} ${styles.logout}`}
              onClick={logOutUser}>
              <div className={styles.item}>
                <Icon_close className={styles.icon} />
                <p className={styles.p}>Se déconnecter</p>
              </div>
            </div>
          ) : null}
        </div>
      </nav>
      {displayForm && <SignFormContainer closeForm={setDisplayForm} />}
    </>
  );
}

export default Menu;
