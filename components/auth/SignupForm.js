import React, { useContext, useState, useEffect } from 'react';

import { publicRequest } from '../../utils/axiosRequest';
import { AuthContext } from '../../context/auth.context';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styles from './SignupForm.module.scss';
import Icon_close from '../../public/assets/img/svgs/icon-page-close.svg';
import axios from 'axios';
import SuccessSignup from './SuccessSignup';
import Loading from '../Loading';
import LoadingMini from '../LoadingMini';
import Icon_validate from '../../public/assets/img/svgs/icon-page-check.svg';
import Icon_view from '../../public/assets/img/svgs/icon-page-view.svg';
import SignUpHeaderMessage from './SignUpHeaderMessage';
import { BreakPointContext } from '../../context/breakPoints.context';

//
// plus de themes en props provenant getStaticProps, useEffect à la place
const SignupForm = (props) => {
  const { storeToken, authenticateUser, isLoading, setIsLoading, user } =
    useContext(AuthContext);

  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [selectedThemes, setSelectedThemes] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [inputError, setInputError] = useState('');
  const [displayNextFormPart, setDsiplayNextFormPart] = useState(false);
  const router = useRouter();
  const [themesFromDB, setThemesFromDB] = useState([
    {
      _id: '628e45c54ba27fe24bdc726d',
      name: ' Grossesse pathologique & Suivi médical',
      slug: 'grossesse-pathologique-et-suivi-medical',
      svg_title: 'pathological-pregnancy',
      number: '7',
    },
  ]);
  const [successSignUp, setSuccessSignUp] = useState(false);

  //   const navigate = useNavigate();
  const handleLastname = (e) => setLastname(e.target.value);
  const handleFirstname = (e) => setFirstname(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleDateOfBirth = (e) => setDateOfBirth(e.target.value);
  //
  const { breakPoint } = useContext(BreakPointContext);
  //
  // useEffect appel BD pour récupérer les thèmes hors staticprops
  useEffect(() => {
    async function getThemesFromDB() {
      // const res = await axios.get('http://localhost:5005/api/theme/all');
      const res = await publicRequest.get(`/theme/all`);
      const themes = await res.data;
      // console.log('*** themes from DB USE EFFECT: ', themes);
      setThemesFromDB(themes);
    }
    getThemesFromDB();
  }, []);
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
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const requestBody = {
        lastname,
        firstname,
        username,
        email,
        password,
        dateOfBirth,
        selectedThemes,
      };
      await setIsLoading(true);
      const response = await publicRequest.post(`/auth/signup`, requestBody);

      // console.log(response, 'reponse du B.E. pour SignupForm.js');

      setErrorMessage(''),
        setInputError(''),
        await storeToken(response.data.authToken);
      await authenticateUser();
      await setIsLoading(false);
      // appel du component SuccessSignup
      setSuccessSignUp(true);
    } catch (error) {
      // console.log('apel error signup *** :', error);
      const errorDescription = error.response.data.message;
      setErrorMessage(errorDescription);
      setInputError(error.response.data.input);
      setIsLoading(false);
    }
  };

  //
  const handleToggle = (e) => {
    {
      /*console.log('*** selectedThemes *** : ', selectedThemes); */
    }

    let themeID = e.target.closest('div').dataset.target;
    //  console.log("*** handleToggle, voici l'id : ", themeID);
    let themeGroup = document.querySelectorAll(`[data-target='${themeID}']`);
    // console.log('*** handleToggle, themeGroup: ', themeGroup);
    //
    if (selectedThemes.includes(themeID)) {
      // Removing already selected theme
      const cleanedArray = selectedThemes.filter((item) => item !== themeID);
      setSelectedThemes(cleanedArray);
      // console.log('*** CLEANED ARRAY *** : ', cleanedArray);

      // console.log('*** REMOVE FROM selectedThemes *** : ', selectedThemes);
    } else if (
      selectedThemes.length <= 2 &&
      !selectedThemes.includes(themeID)
    ) {
      // Adding new theme

      setSelectedThemes((selectedThemes) => [...selectedThemes, themeID]);

      // console.log('*** ADD TO selectedThemes *** : ', selectedThemes);
    }
  };
  //
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  //

  return (
    <>
      {/* <div>
        <Loading instruction='processing'></Loading>
      </div> */}
      <div
        className={`${styles.formContent} ${
          successSignUp ? styles.successSignup : ''
        } ${
          breakPoint === 'desktop' || breakPoint === 'laptop'
            ? styles.desktop
            : null
        } ${displayNextFormPart ? styles.secondPart : null} ${
          successSignUp ? styles.thirdPart : null
        }`}>
        <div className={styles.formHeader}>
          <div className={styles.title}>
            <h3>Inscription</h3>
            <Icon_close
              className={styles.close}
              onClick={() => props.props.closeForm(false)}
            />
          </div>
          <div className={styles.description}>
            <SignUpHeaderMessage
              displayNextFormPart={displayNextFormPart}
              successSignUp={successSignUp}
            />
          </div>
          {/* ProgessBar */}
          <div className={styles.progressBar}>
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
          {(breakPoint === 'laptop' || breakPoint === 'desktop') && (
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
        {/* END ProgessBar */}
        {(function () {
          if (!successSignUp) {
            return (
              <div className={styles.formBody}>
                {isLoading ? (
                  <LoadingMini
                    displayNextFormPart={displayNextFormPart}
                    successSignUp={successSignUp}
                  />
                ) : (
                  <form
                    id='signupForm'
                    className={styles.form}
                    onSubmit={(e) => handleLoginSubmit(e)}>
                    <div
                      className={`
                ${styles.fieldContainer + ' ' + styles.step1} ${
                        displayNextFormPart === true ? styles.display : ''
                      }
              `}>
                      <fieldset
                        form='signupForm'
                        id='userInfos'
                        className={styles.fieldset}>
                        {/* <div> */}
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
                            autoFocus={
                              inputError === 'firstname' ? true : false
                            }
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
                            Nom d'utilisateur{' '}
                            <span className={styles.asterisque}>*</span>
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
                            <span className={styles.inputError}>
                              {errorMessage}
                            </span>
                          )}
                        </div>
                        <div className={styles.inputBox}>
                          <label className={styles.label} htmlFor='email'>
                            Adresse email{' '}
                            <span className={styles.asterisque}>*</span>
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
                            <span className={styles.inputError}>
                              {errorMessage}
                            </span>
                          )}
                        </div>
                        <div className={styles.inputBox}>
                          <label className={styles.label} htmlFor='password'>
                            Mot de passe{' '}
                            <span className={styles.asterisque}>*</span>
                          </label>
                          <div className={styles.password}>
                            <input
                              className={`${styles.input} ${
                                inputError === 'password'
                                  ? styles.invalid
                                  : null
                              }`}
                              autoFocus={
                                inputError === 'password' ? true : false
                              }
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
                            <span className={styles.inputError}>
                              {errorMessage}
                            </span>
                          )}
                        </div>
                        <div className={styles.inputBox}>
                          <label className={styles.label} htmlFor='dateOfBirth'>
                            Date de naissance{' '}
                            <span className={styles.asterisque}>*</span>
                          </label>
                          <input
                            className={`${styles.input} ${
                              inputError === 'dateOfBirth'
                                ? styles.invalid
                                : null
                            }`}
                            autoFocus={
                              inputError === 'dateOfBirth' ? true : false
                            }
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
                            En vous inscrivant, vous acceptez nos Conditions
                            générales. Découvrez comment nous recueillons,
                            utilisons et partageons vos données en consultant
                            notre Politique d’utilisation des données et comment
                            nous utilisons les cookies et autres technologies
                            similaires en lisant notre Politique d’utilisation
                            des cookies.
                          </p>
                        </div>
                        {/* </div> */}
                        <button
                          className={styles.btnVert}
                          onClick={(e) => handlePreSignUp(e)}>
                          Étape suivante
                        </button>
                      </fieldset>
                    </div>
                    <div
                      className={`
                ${styles.fieldContainer + ' ' + styles.step2} ${
                        displayNextFormPart === true ? styles.display : ''
                      }
              `}>
                      <fieldset
                        form='signupForm'
                        id='themesSelection'
                        className={`${styles.fieldset} `}>
                        {inputError === 'themes' && (
                          <span className={styles.themeError}>
                            {errorMessage}
                          </span>
                        )}
                        <div className={styles.themesContainer}>
                          {themesFromDB.map((theme) => (
                            <div
                              key={theme._id}
                              className={` ${styles.themeBtn} ${
                                selectedThemes.includes(theme._id)
                                  ? styles.selected
                                  : ''
                              } `}
                              id={theme._id}
                              data-target={theme._id}
                              onClick={handleToggle}>
                              <p
                                data-target={theme._id}
                                className={styles.text}>
                                {theme.name}
                              </p>

                              <Image
                                className={`${theme.svg_title} ${styles.svg}`}
                                src={`${
                                  selectedThemes.includes(theme._id)
                                    ? `/assets/img/svgs/${theme.svg_title}-selected.svg`
                                    : `/assets/img/svgs/${theme.svg_title}-unselected.svg`
                                }`}
                                alt={theme.svg_title}
                                height='40px'
                                width='40px'
                                data-target={theme._id}></Image>
                            </div>
                          ))}
                        </div>
                        {/* <div> */}
                        <button
                          className={styles.backButton}
                          onClick={(e) => {
                            e.preventDefault();
                            setDsiplayNextFormPart(false);
                          }}>
                          Revenir en arrière
                        </button>
                        {/* </div> */}
                        <button type='submit' className={styles.btnVert}>
                          CONFIRMER
                        </button>
                      </fieldset>
                    </div>
                    {/* 
                    {errorMessage && (
                      <p className='error-message'>{errorMessage}</p>
                    )} */}
                    {/* <Link href='#'>
            <a onClick={() => props.props.setSignForm('signin')}>
              Already have an account
            </a>
          </Link> */}
                  </form>
                )}
              </div>
            );
          } else {
            {
              /* Affichage de l'inscription réussi, dans le formBody */
            }
            return (
              <div className={styles.successBody}>
                <SuccessSignup props={props.props} user={user}></SuccessSignup>
              </div>
            );
          }
        })()}
      </div>
    </>
  );
};

export default SignupForm;
