import React from 'react';
import Image from 'next/image';
import { useState, useContext } from 'react';
import styles from '../NavbarSmartphone.module.scss';
//
import { AuthContext } from '../../context/auth.context';
//
import Icon_connect from '../../public/assets/img/svgs/icon-page-connect.svg';
import Icon_home from '../../public/assets/img/svgs/icon-menu-home.svg';
import Icon_theme from '../../public/assets/img/svgs/icon-menu-themes.svg';
import Icon_abos from '../../public/assets/img/svgs/icon-menu-abonnements.svg';
import Icon_aLaUne from '../../public/assets/img/svgs/icon-menu-une.svg';
import Icon_close from '../../public/assets/img/svgs/icon-page-close.svg';
//
import SignFormContainer from '../auth/SignFormContainer';

function Menu({ isOpen, toggleMenu, displayForm, setDisplayForm }) {
  const { user, isLoggedIn, logOutUser } = useContext(AuthContext);
  return (
    <>
      <div
        className={`${styles.sideMenuContainer + ' ' + styles.svg} ${
          isOpen === true ? styles.active : ''
        }`}>
        {isLoggedIn ? (
          <div className={styles.menuItemContainer}>
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
          <button className={styles.btnRose}>SOUMETTRE</button>
          <button className={styles.btnTransparent}>MODÉRER</button>
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
        {isLoggedIn ? (
          <div className={styles.menuItemContainer} onClick={logOutUser}>
            <div className={styles.item}>
              <Icon_close className={styles.icon} />
              <p className={styles.p}>Se déconnecter</p>
            </div>
          </div>
        ) : null}
      </div>
      {displayForm && <SignFormContainer closeForm={setDisplayForm} />}
    </>
  );
}

export default Menu;
