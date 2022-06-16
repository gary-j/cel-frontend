import React from 'react';
import Icon_validate from '../../public/assets/img/svgs/icon-page-validate.svg';
import styles from './SuccessSignup.module.scss';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/auth.context';

function SuccessSignup(props) {
  //
  useEffect(() => {
    authenticateUser();
    console.log('appel USEEFFECT SUCCESS SIGN UP');
  }, [user]);
  //
  const { user, authenticateUser } = useContext(AuthContext);
  console.log('*** USER from successSignup *** : ', user);
  //   console.log('*** PROPS from successSignup *** : ', props);

  return (
    <>
      <div className={styles.container}>
        <Icon_validate className={styles.icon} />
        <p className={styles.p1}>Inscription terminée</p>
        <div>
          <p className={styles.p2}>
            Confirmez votre adresse email via le lien envoyé à
          </p>
          <p className={styles.p2 + ' ' + styles.email}>{user?.email}</p>
          <p className={styles.p2}>Merci et à bientôt !</p>
        </div>
        <button
          className={styles.button}
          onClick={() => props.props.closeForm(false)}>
          Retour à l'accueil
        </button>
      </div>
    </>
  );
}

export default SuccessSignup;
