import React from 'react';
import { useContext, useState } from 'react';

import { publicRequest } from '../../utils/axiosRequest';
import { AuthContext } from '../../context/auth.context';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './SigninForm.module.scss';
import Image from 'next/image';
import Icon_close from '../../public/assets/img/svgs/icon-page-close.svg';
import Icon_facebook from '../../public/assets/img/svgs/icon-rs-facebook.svg';
import Icon_google from '../../public/assets/img/svgs/icon-rs-google.svg';
import Icon_instagram from '../../public/assets/img/svgs/icon-rs-insta.svg';
import Icon_checkboxOff from '../../public/assets/img/svgs/icon-page-checkbox-off.svg';
import Icon_checkboxOn from '../../public/assets/img/svgs/icon-page-checkbox-on.svg';
//
const SigninForm = (props) => {
  // console.log('*** PROPS signin : ', props);

  const { storeToken, authenticateUser, isLoading, setIsLoading } =
    useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [stayConnected, setStayConnected] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  //   const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleStayConnected = () => setStayConnected(!stayConnected);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, stayConnected };

    setIsLoading(true);
    // Make an axios request to the API
    // If POST request is successful redirect to login page
    // If the request resolves with an error, set the error message in the state
    publicRequest
      .post(`/auth/signin`, requestBody)
      .then((response) => {
        // console.log('JWT RETURNED', response.data);
        // console.log(response, 'reponse pour SigninForm.js');

        storeToken(response.data.authToken);
        authenticateUser();
        setIsLoading(false);

        props.props.closeForm(false);
        // router.push('/');
        // navigate('/');
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
        setIsLoading(false);
      });
  };

  return (
    <>
      {isLoading ? (
        <div className={styles.loading}>
          <p className={styles.p}>Authentification en cours...</p>
          <Image
            src='/logos/logo-green-light-2-.png'
            alt='image chargement - citron en limonade'
            width={50}
            height={50}
            className={styles.image}
          />
        </div>
      ) : (
        <>
          <div className={styles.formContent}>
            <div className={styles.title}>
              <h3>Connexion</h3>
              <Icon_close
                className={styles.close}
                onClick={() => props.props.closeForm(false)}
              />
            </div>
            <div className={styles.socials}>
              <Icon_facebook />
              <Icon_google />
              <Icon_instagram />
            </div>
            <div className={styles.or}>
              <div className={styles.separator}></div>
              <p className={styles.p}>ou</p>
              <div className={styles.separator}></div>
            </div>
            <form className={styles.form} onSubmit={handleLoginSubmit}>
              <label className={styles.label} htmlFor='email'>
                Adresse mail
              </label>
              <input
                placeholder='bonjour@gmail.com'
                type='text'
                name='email'
                value={email}
                onChange={handleEmail}
                className={styles.input}
              />
              <label className={styles.label} htmlFor='password'>
                Mot de passe
              </label>
              <input
                placeholder='password'
                type='password'
                name='password'
                value={password}
                onChange={handlePassword}
                className={styles.input}
              />
              <div
                className={styles.connected}
                onClick={() => {
                  // console.log('value is : ', stayConnected);
                  handleStayConnected();
                }}>
                <input
                  type='hidden'
                  name='stayConnected'
                  value={stayConnected}></input>
                {/**/}
                {stayConnected ? (
                  <Icon_checkboxOn className={styles.checkbox} />
                ) : (
                  <Icon_checkboxOff className={styles.checkbox} />
                )}
                <label className={styles.checkboxLabel}>Rester connecté</label>
              </div>
              {errorMessage && <p className='error-message'>{errorMessage}</p>}
              <button className={styles.btnRose} type='submit'>
                Se connecter
              </button>

              <Link href='#'>
                <a
                  className={styles.link}
                  onClick={() => props.props.setSignForm('signup')}>
                  Créer mon compte
                </a>
                {/* on clique afficher le formulaire de création de compte*/}
              </Link>
              <Link href={'/signup'}>
                <a className={styles.link2}>Informations de comptes oubliés</a>
                {/* on clique page reinitialisation mot de passe*/}
              </Link>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default SigninForm;
