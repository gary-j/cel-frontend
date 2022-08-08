import React from 'react';
import styles from './SignUpFormHeader.module.scss';
import Icon_close from '../../../public/assets/img/svgs/icon-page-close.svg';
import SignUpHeaderMessage from './SignUpHeaderMessage';
import SignUpProgressBar from './SignUpProgressBar';
const SignUpFormHeader = ({ props }) => {
  const { closeForm, displayNextFormPart, successSignUp } = props;
  return (
    <>
      <div className={styles.formHeader}>
        <div className={styles.title}>
          <h3>Inscription</h3>
          <Icon_close
            className={styles.close}
            onClick={() => closeForm(false)}
          />
        </div>
        <SignUpHeaderMessage
          displayNextFormPart={displayNextFormPart}
          successSignUp={successSignUp}
        />
        <SignUpProgressBar props={props} />
      </div>
    </>
  );
};

export default SignUpFormHeader;
