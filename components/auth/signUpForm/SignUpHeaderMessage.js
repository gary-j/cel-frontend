import React from 'react';
import styles from './SignUpHeaderMessage.module.scss';

const SignUpHeaderMessage = ({ props }) => {
  // console.log('*** SignUpHeaderMessage PROPS : *** :', props);

  let { displayNextFormPart, successSignUp } = props;
  const message = () => {
    if (!displayNextFormPart) {
      return 'Rejoignez la communauté pour partager les citrons et les limonades !';
    } else if (displayNextFormPart && !successSignUp) {
      return 'Sélectionnez un maximum de 3 thèmes dans lesquels vous souhaitez principalement intéragir.';
    } else if (displayNextFormPart && successSignUp) {
      return 'Activation du compte';
    }
  };

  return (
    <div className={styles.description}>
      <p className={styles.p}> {message()}</p>
    </div>
  );
};

export default SignUpHeaderMessage;
