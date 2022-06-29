import React from 'react';
import styles from './Loading.module.scss';
import Image from 'next/image';

const Loading = (props) => {
  console.log('*** Loading.js PROPS *** : ', props);
  let instruction = props.instruction;
  const message = () => {};
  return (
    <div className={styles.container}>
      <div className={styles.loading}>
        <p className={styles.p}>Chargement en cours...</p>
        <Image
          src='/logos/logo-green-light-2-.png'
          alt='image chargement - citron en limonade'
          width={50}
          height={50}
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default Loading;
