import React from 'react';
import styles from './LoadingMini.module.scss';
import Image from 'next/image';

const Loading = (props) => {
  console.log('*** LoadingMini.js PROPS *** : ', props);
  let { displayNextFormPart, successSignUp } = props;

  const message = () => {
    if (!displayNextFormPart) {
      return 'Vérification en cours...';
    }
    if (displayNextFormPart && !successSignUp) {
      return 'Inscription en cours...';
    }
  };
  return (
    <div className={styles.loading}>
      <p className={styles.p}>{message()}</p>
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
