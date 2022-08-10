import React from 'react';
import Icon_close from '../../../../public/assets/img/svgs/icon-page-close.svg';
import styles from './CreateStoryFormHeader.module.scss';
function CreateStoryFormHeader() {
  return (
    <>
      <div className={styles.formHeader}>
        <div className={styles.title}>
          <h3>Soumettre une histoire</h3>
          <Icon_close
            className={styles.close}
            onClick={() => closeForm(false)}
          />
        </div>
        <div className={styles.description}>
          <p className={styles.p}>
            Racontez ce citron qui acidifie votre vie… Ou racontez comment vous
            avez transformé le plus acide des citrons en bonne limonade, ça
            pourrait aider !
          </p>
        </div>
      </div>
    </>
  );
}

export default CreateStoryFormHeader;
