import React, { useContext } from 'react';
import { publicRequest } from '../../../../utils/axiosRequest';
import { AuthContext } from '../../../../context/auth.context';
import styles from '../SignupFormContainer.module.scss';
import Icon_view from '../../../../public/assets/img/svgs/page-icons/icon-page-view.svg';
import LoadingMini from '../../../commons/LoadingMini';
import Link from 'next/link';
//
function SignUpFormStep1({ props, fieldStateProps }) {
  const { isLoading, setIsLoading } = useContext(AuthContext);
  const {
    setSignForm,
    displayNextFormPart,
    setDsiplayNextFormPart,
    successSignUp,
  } = props;
  // FieldState from props
  const {
    lastname,
    setLastname,
    firstname,
    setFirstname,
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    dateOfBirth,
    setDateOfBirth,
    errorMessage,
    setErrorMessage,
    inputError,
    setInputError,
    passwordShown,
    setPasswordShown,
  } = fieldStateProps;

  // Handlers
  const handleLastname = (e) => setLastname(e.target.value);
  const handleFirstname = (e) => setFirstname(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleDateOfBirth = (e) => setDateOfBirth(e.target.value);
  // Functions
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  //
  const handlePreSignUp = (e) => {
    e.preventDefault();
    // console.log('appel presignup ok');
    const requestBody = {
      lastname,
      firstname,
      username,
      email,
      password,
      dateOfBirth,
    };
    //
    setIsLoading(true);
    //
    publicRequest
      .post(`/auth/preSignup`, requestBody)
      .then((response) => {
        // console.log('reponse de PRESIGNUP', response);

        if (response.data.isValid === true) {
          // console.log('tout est bon');
          setInputError('');
          setErrorMessage('');
          setIsLoading(false);
          setDsiplayNextFormPart(true);
        }
      })
      .catch((error) => {
        // console.error('la réponse error du backend *** : ', error);
        setInputError(error.response.data.error.input);
        setErrorMessage(error.response.data.error.message);
        setDsiplayNextFormPart(false);
        setIsLoading(false);
      });
  };
  //
  return (
    <>
      <div
        className={`
${styles.fieldContainer + ' ' + styles.step1} ${
          displayNextFormPart === true ? styles.display : ''
        } ${isLoading ? styles.none : ''}
`}>
        <fieldset form='signupForm' id='userInfos' className={styles.fieldset}>
          <div className={styles.inputBox}>
            <label className={styles.label} htmlFor='lastname'>
              Nom <span className={styles.asterisque}>*</span>
            </label>
            <input
              className={`${styles.input} ${
                inputError === 'lastname' ? styles.invalid : null
              }`}
              autoFocus={inputError === 'lastname' ? true : false}
              form='signupForm'
              id='lastname'
              placeholder='Dupont'
              type='text'
              name='lastname'
              value={lastname}
              onChange={handleLastname}
              required
            />
            {inputError === 'lastname' && (
              <span className={styles.inputError}>
                Merci de renseigner votre Nom.
              </span>
            )}
          </div>

          <div className={styles.inputBox}>
            <label className={styles.label} htmlFor='firstname'>
              Prenom <span className={styles.asterisque}>*</span>
            </label>
            <input
              className={`${styles.input} ${
                inputError === 'firstname' ? styles.invalid : null
              }`}
              autoFocus={inputError === 'firstname' ? true : false}
              form='signupForm'
              id='firstname'
              placeholder='Catherine'
              type='text'
              name='firstname'
              value={firstname}
              onChange={handleFirstname}
              required
            />
            {inputError === 'firstname' && (
              <span className={styles.inputError}>
                Merci de renseigner votre Prénom.
              </span>
            )}
          </div>
          <div className={styles.inputBox}>
            <label className={styles.label} htmlFor='username'>
              Nom d'utilisateur <span className={styles.asterisque}>*</span>
            </label>
            <input
              className={`${styles.input} ${
                inputError === 'username' ? styles.invalid : null
              }`}
              autoFocus={inputError === 'username' ? true : false}
              form='signupForm'
              id='username'
              placeholder='Cathy_cat'
              type='text'
              name='username'
              value={username}
              onChange={handleUsername}
              required
            />
            {inputError === 'username' && (
              <span className={styles.inputError}>{errorMessage}</span>
            )}
          </div>
          <div className={styles.inputBox}>
            <label className={styles.label} htmlFor='email'>
              Adresse email <span className={styles.asterisque}>*</span>
            </label>
            <input
              className={`${styles.input} ${
                inputError === 'email' ? styles.invalid : null
              }`}
              autoFocus={inputError === 'email' ? true : false}
              form='signupForm'
              placeholder='catherine-dupont@gmail.com'
              type='email'
              name='email'
              value={email}
              onChange={handleEmail}
              required
            />
            {inputError === 'email' && (
              <span className={styles.inputError}>{errorMessage}</span>
            )}
          </div>
          <div className={styles.inputBox}>
            <label className={styles.label} htmlFor='password'>
              Mot de passe <span className={styles.asterisque}>*</span>
            </label>
            <div className={styles.password}>
              <input
                className={`${styles.input} ${
                  inputError === 'password' ? styles.invalid : null
                }`}
                autoFocus={inputError === 'password' ? true : false}
                form='signupForm'
                placeholder='password'
                type={passwordShown ? 'text' : 'password'}
                name='password'
                value={password}
                onChange={handlePassword}
                required
              />
              <Icon_view
                className={styles.showPassword}
                onClick={() => togglePassword()}
              />
            </div>

            {inputError === 'password' && (
              <span className={styles.inputError}>{errorMessage}</span>
            )}
          </div>
          <div className={styles.inputBox}>
            <label className={styles.label} htmlFor='dateOfBirth'>
              Date de naissance <span className={styles.asterisque}>*</span>
            </label>
            <input
              className={`${styles.input} ${
                inputError === 'dateOfBirth' ? styles.invalid : null
              }`}
              autoFocus={inputError === 'dateOfBirth' ? true : false}
              form='signupForm'
              id='dateOfBirth'
              type='date'
              name='dateOfBirth'
              value={dateOfBirth}
              onChange={handleDateOfBirth}
              required
            />
            {inputError === 'dateOfBirth' && (
              <span className={styles.inputError}>
                Merci de renseigner votre Date de Naissance.
              </span>
            )}
          </div>
          <div>
            <p>
              En vous inscrivant, vous acceptez nos Conditions générales.
              Découvrez comment nous recueillons, utilisons et partageons vos
              données en consultant notre Politique d’utilisation des données et
              comment nous utilisons les cookies et autres technologies
              similaires en lisant notre Politique d’utilisation des cookies.
            </p>
          </div>
          <div className={styles.btnBox}>
            <button
              className={styles.btnVert}
              onClick={(e) => handlePreSignUp(e)}>
              Étape suivante
            </button>
          </div>
          <div className={styles.haveAccount}>
            <Link href='#'>
              <a onClick={() => setSignForm('signin')}>
                Already have an account
              </a>
            </Link>
          </div>
        </fieldset>
      </div>
      {isLoading && (
        <LoadingMini
          displayNextFormPart={displayNextFormPart}
          successSignUp={successSignUp}></LoadingMini>
      )}
    </>
  );
}

export default SignUpFormStep1;
