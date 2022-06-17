import React from 'react';
import styles from './Loading.module.scss';
import Image from 'next/image';

const Loading = (props) => {
  return (
    <div className={styles.loading}>
      <p className={styles.p}>Authentification en cours...</p>
      <Image
        src='/logos/logo-green-light-2-.png'
        alt='image chargement - citron en limonade'
        width={50}
        height={50}
        className={styles.image}
      />
    </div>
  );
};

export default Loading;
