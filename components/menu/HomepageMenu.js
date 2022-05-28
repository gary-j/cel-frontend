import Link from 'next/link';
import Image from 'next/image';
import styles from './HomepageMenu.module.scss';
import { useState } from 'react';

const HomepageMenu = () => {
  return (
    <>
      <div
        className={`${styles.sideMenu} ${
          isOpen === true ? styles.active : ''
        }`}>
        sideMenu
      </div>
    </>
  );
};

export default HomepageMenu;
