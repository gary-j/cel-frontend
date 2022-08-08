import React from 'react';
import styles from './SignUpProgressBar.module.scss';
import Icon_validate from '../../../public/assets/img/svgs/icon-page-check.svg';

const SignUpProgressBar = ({ props }) => {
  const { cssBreakPoint, displayNextFormPart, successSignUp } = props;
  return (
    <>
      <div className={styles.progressBarContainer}>
        <div
          className={`${styles.progressBar} ${
            cssBreakPoint === 'laptop' || cssBreakPoint === 'desktop'
              ? styles.desktop
              : ''
          }`}>
          <div
            className={
              styles.trait + ' ' + styles.court + ' ' + styles.active
            }></div>
          <div className={styles.rond + ' ' + styles.active}>
            {displayNextFormPart ? (
              <Icon_validate className={styles.icon}></Icon_validate>
            ) : (
              <p className={styles.numero}>1</p>
            )}
          </div>
          <div
            className={
              styles.trait +
              ' ' +
              styles.long +
              ' ' +
              `${displayNextFormPart ? styles.active : null}`
            }></div>
          <div
            className={
              styles.rond +
              ' ' +
              `${displayNextFormPart ? styles.active : null}`
            }>
            {!displayNextFormPart ? (
              <p className={styles.numeroX}>2</p>
            ) : successSignUp ? null : (
              <p className={styles.numero}>2</p>
            )}

            {successSignUp ? (
              <Icon_validate className={styles.icon}></Icon_validate>
            ) : null}
          </div>
          <div
            className={
              styles.trait +
              ' ' +
              styles.long +
              ' ' +
              `${successSignUp ? styles.active : null}`
            }></div>
          <div
            className={
              styles.rond + ' ' + `${successSignUp ? styles.active : null}`
            }>
            {successSignUp ? (
              <p className={styles.numero}>3</p>
            ) : (
              <p className={styles.numeroX}>3</p>
            )}
          </div>
          <div className={styles.trait + ' ' + styles.court}></div>
        </div>
        {/* Debut text progressBar desktop*/}

        {(cssBreakPoint === 'laptop' || cssBreakPoint === 'desktop') && (
          <div className={styles.textProgressBar}>
            <div className={styles.text1}>
              <p>Formulaire d'inscription</p>
            </div>
            <div
              className={`${styles.text2} ${
                displayNextFormPart ? styles.selected : null
              }`}>
              <p>Thèmes Favoris</p>
            </div>
            <div
              className={`${styles.text3} ${
                successSignUp ? styles.selected : null
              }`}>
              <p>Validation</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SignUpProgressBar;
