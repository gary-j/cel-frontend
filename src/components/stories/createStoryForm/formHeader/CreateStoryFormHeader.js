import React from 'react';
import { useRouter } from 'next/router';
import styles from './CreateStoryFormHeader.module.scss';
import Icon_close from '../../../../public/assets/img/svgs/page-icons/icon-page-close.svg';
function CreateStoryFormHeader() {
  const router = useRouter();
  return (
    <>
      <div className={styles.formHeader}>
        <div className={styles.title}>
          <h3>Publier une histoire</h3>
          <Icon_close className={styles.close} onClick={() => router.back()} />
        </div>
        <div className={styles.description}>
          <p className={styles.p}>
            Racontez ce citron qui acidifie votre vie… <br />
            Ou racontez comment vous avez transformé le plus acide des{' '}
            <strong>citrons</strong> en <strong>bonne limonade</strong>, ça
            pourrait aider !
          </p>
        </div>
      </div>
    </>
  );
}

export default CreateStoryFormHeader;
