import React from 'react';
import styles from './SignupForm.module.scss';

const SignUpHeaderMessage = (props) => {
  console.log('*** SignUpHeaderMessage PROPS : *** :', props);

  let { displayNextFormPart, successSignUp } = props;

  if (!displayNextFormPart) {
    return (
      <p className={styles.p}>
        Rejoignez la communauté pour partager les citrons et les limonades !
      </p>
    );
  }

  if (displayNextFormPart && !successSignUp) {
    return (
      <p className={styles.p}>
        Sélectionnez un maximum de 3 thèmes dans lesquels vous souhaitez
        principalement intéragir.
      </p>
    );
  }
  if (displayNextFormPart && successSignUp) {
    return <p className={styles.p}>Activation du compte</p>;
  }
  //   return <div>SignUpHeaderMessage</div>;
};

export default SignUpHeaderMessage;
