import React, { useContext } from 'react';
import styles from './LoadingMini.module.scss';
import Image from 'next/image';
//
import { BreakPointContext } from '../context/breakPoints.context';

const Loading = (props) => {
  //   console.log('*** LoadingMini.js PROPS *** : ', props);
  let { displayNextFormPart, successSignUp } = props;
  const { breakPoint } = useContext(BreakPointContext);

  const message = () => {
    if (!displayNextFormPart) {
      return 'Vérification en cours...';
    }
    if (displayNextFormPart && !successSignUp) {
      return 'Inscription en cours...';
    }
  };
  return (
    <div
      className={` 
        ${styles.loading} 
        ${
          breakPoint === 'laptop' || breakPoint === 'desktop'
            ? styles.desktop
            : null
        }`}>
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
