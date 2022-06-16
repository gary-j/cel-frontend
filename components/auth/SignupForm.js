import React from 'react';
import { useContext, useState, useEffect } from 'react';

import { publicRequest } from '../../utils/axiosRequest';
import { AuthContext } from '../../context/auth.context';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styles from './SignupForm.module.scss';
import Icon_close from '../../public/assets/img/svgs/icon-page-close.svg';
import axios from 'axios';
import Loading from '../Loadingg';
import SuccessSignup from './SuccessSignup';

//
// plus de themes en props provenant getStaticProps, useEffect à la place
const SignupForm = (props) => {
  const { storeToken, authenticateUser, isLoading, setIsLoading } =
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
      username,
      email,
      password,
      dateOfBirth,
    };
    //
    setIsLoading(true);
    //
    publicRequest.post(`/auth/preSignup`, requestBody).then((response) => {
      // console.log('reponse de PRESIGNUP', response);
      if (response.data.isValid === false) {
        // console.log('pas bon !');
        setInputError(response.data.error.input);
        setErrorMessage(response.data.error.message);
        setDsiplayNextFormPart(false);
        setIsLoading(false);
        return;
      }
      if (response.data.isValid === true) {
        // console.log('tout est bon');
        setInputError('');
        setErrorMessage('');
        setIsLoading(false);
        setDsiplayNextFormPart(true);
      }
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

      console.log(response, 'reponse du B.E. pour SignupForm.js');

      await storeToken(response.data.authToken);
      await authenticateUser();
      await setIsLoading(false);
      // appel du component SuccessSignup
      setSuccessSignUp(true);
    } catch (error) {
      // console.log('apel error signup');
      const errorDescription = error.response.data.message;
      setErrorMessage(errorDescription);
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

  // const test = true;

  return (
    <>
      <div
        className={`${styles.formContent} ${
          successSignUp ? styles.successSignup : ''
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
            <p className={styles.p}>
              Rejoignez la communauté pour partager les citrons et les limonades
              !
            </p>
          </div>
          <div className={styles.progressBar}>progressBar</div>
        </div>
        {(function () {
          if (!successSignUp) {
            return (
              <div className={styles.formBody}>
                {isLoading ? (
                  <Loading></Loading>
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
                        <label className={styles.label} htmlFor='lastname'>
                          Nom <span className={styles.asterisque}>*</span>
                        </label>
                        <input
                          className={styles.input}
                          form='signupForm'
                          id='lastname'
                          placeholder='Dupont'
                          type='text'
                          name='lastname'
                          value={lastname}
                          onChange={handleLastname}
                          required
                        />

                        <label className={styles.label} htmlFor='firstname'>
                          Prenom <span className={styles.asterisque}>*</span>
                        </label>
                        <input
                          className={styles.input}
                          form='signupForm'
                          id='firstname'
                          placeholder='Catherine'
                          type='text'
                          name='firstname'
                          value={firstname}
                          onChange={handleFirstname}
                          required
                        />

                        <label className={styles.label} htmlFor='username'>
                          Nom d'utilisateur{' '}
                          <span className={styles.asterisque}>*</span>
                        </label>
                        <input
                          className={styles.input}
                          form='signupForm'
                          id='username'
                          placeholder='Cathy_cat'
                          type='text'
                          name='username'
                          value={username}
                          onChange={handleUsername}
                          required
                        />

                        <label className={styles.label} htmlFor='email'>
                          Adresse email{' '}
                          <span className={styles.asterisque}>*</span>
                        </label>
                        <input
                          className={styles.input}
                          form='signupForm'
                          placeholder='catherine-dupont@gmail.com'
                          type='email'
                          name='email'
                          value={email}
                          onChange={handleEmail}
                          required
                        />

                        <label className={styles.label} htmlFor='password'>
                          Mot de passe{' '}
                          <span className={styles.asterisque}>*</span>
                        </label>
                        <input
                          className={styles.input}
                          form='signupForm'
                          placeholder='password'
                          type='password'
                          name='password'
                          value={password}
                          onChange={handlePassword}
                          required
                        />
                        <label className={styles.label} htmlFor='dateOfBirth'>
                          Date de naissance{' '}
                          <span className={styles.asterisque}>*</span>
                        </label>
                        <input
                          className={styles.input}
                          form='signupForm'
                          id='dateOfBirth'
                          type='date'
                          name='dateOfBirth'
                          value={dateOfBirth}
                          onChange={handleDateOfBirth}
                          required
                        />
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
                        <div>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              setDsiplayNextFormPart(false);
                            }}>
                            Precedent
                          </button>
                        </div>
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
                            <p data-target={theme._id} className={styles.text}>
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
                        <button type='submit' className={styles.btnVert}>
                          CONFIRMER
                        </button>
                      </fieldset>
                    </div>

                    {errorMessage && (
                      <p className='error-message'>{errorMessage}</p>
                    )}
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
                {isLoading ? (
                  <Loading></Loading>
                ) : (
                  <SuccessSignup props={props.props}></SuccessSignup>
                )}
              </div>
            );
          }
        })()}
      </div>
    </>
  );
};

export default SignupForm;
