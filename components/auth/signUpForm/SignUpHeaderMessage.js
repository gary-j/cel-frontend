import React from 'react';
import styles from './SignUpHeaderMessage.module.scss';

const SignUpHeaderMessage = (props) => {
  // console.log('*** SignUpHeaderMessage PROPS : *** :', props);

  let { displayNextFormPart, successSignUp } = props;

  if (!displayNextFormPart) {
    return (
      <div className={styles.description}>
        <p className={styles.p}>
          Rejoignez la communauté pour partager les citrons et les limonades !
        </p>
      </div>
    );
  }

  if (displayNextFormPart && !successSignUp) {
    return (
      <div className={styles.description}>
        <p className={styles.p}>
          Sélectionnez un maximum de 3 thèmes dans lesquels vous souhaitez
          principalement intéragir.
        </p>
      </div>
    );
  }
  if (displayNextFormPart && successSignUp) {
    return (
      <div className={styles.description}>
        <p className={styles.p}>Activation du compte</p>
      </div>
    );
  }
  //   return <div>SignUpHeaderMessage</div>;
};

export default SignUpHeaderMessage;
