import React from 'react';
import { useContext, useState, useEffect } from 'react';

import { publicRequest } from '../../utils/axiosRequest';
import { AuthContext } from '../../context/auth.context';
import { useRouter } from 'next/router';
import Link from 'next/link';

import SignupTheme from './SignupTheme';

import { BACKEND_URL } from '../../utils/consts';

//

const SignupForm = ({ themes }) => {
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [selectedThemes, setSelectedThemes] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  //   const navigate = useNavigate();
  const handleLastname = (e) => setLastname(e.target.value);
  const handleFirstname = (e) => setFirstname(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleDateOfBirth = (e) => setDateOfBirth(e.target.value);
  const handleSelectedThemes = (e) => setSelectedThemes(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = {
      lastname,
      firstname,
      username,
      email,
      password,
      dateOfBirth,
      selectedThemes,
    };

    // Make an axios request to the API
    // If POST request is successful redirect to login page
    // If the request resolves with an error, set the error message in the state
    publicRequest
      .post(`/auth/signup`, requestBody)
      .then((response) => {
        // console.log('JWT RETURNED', response.data);
        console.log(response, 'reponse pour SignupForm.js');

        storeToken(response.data.authToken);
        authenticateUser();

        router.push('/');
        // navigate('/');
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  //

  //

  return (
    <>
      <div>Signup Form</div>
      <form id='signupForm' onSubmit={handleLoginSubmit}>
        <fieldset form='signupForm' id='userInfos' style={{ border: 'none' }}>
          <label htmlFor='lastname'>Nom</label>
          <input
            form='signupForm'
            id='lastname'
            placeholder='Danvers - Vissac'
            type='text'
            name='lastname'
            value={lastname}
            onChange={handleLastname}
          />

          <label htmlFor='firstname'>Prenom</label>
          <input
            form='signupForm'
            id='firstname'
            placeholder='Baptiste'
            type='text'
            name='firstname'
            value={firstname}
            onChange={handleFirstname}
          />

          <label htmlFor='username'>Nom d'utilisateur</label>
          <input
            form='signupForm'
            id='username'
            placeholder='Baptiste_danv'
            type='text'
            name='username'
            value={username}
            onChange={handleUsername}
          />

          <label htmlFor='email'>Adresse email</label>
          <input
            form='signupForm'
            placeholder='d-baptiste@gmail.com'
            type='email'
            name='email'
            value={email}
            onChange={handleEmail}
          />

          <label htmlFor='password'>Mot de passe</label>
          <input
            form='signupForm'
            placeholder='password'
            type='password'
            name='password'
            value={password}
            onChange={handlePassword}
          />
          <label htmlFor='dateOfBirth'>Date de naissance</label>
          <input
            form='signupForm'
            id='dateOfBirth'
            type='date'
            name='dateOfBirth'
            value={dateOfBirth}
            onChange={handleDateOfBirth}
          />
          <div>
            <p>
              En vous inscrivant, vous acceptez nos Conditions générales.
              Découvrez comment nous recueillons, utilisons et partageons vos
              données en consultant notre Politique d’utilisation des données et
              comment nous utilisons les cookies et autres technologies
              similaires en lisant notre Politique d’utilisation des cookies.
            </p>
          </div>
        </fieldset>
        <fieldset form='signupForm' id='themesSelection'>
          {/* <SignupTheme></SignupTheme> */}
          {themes.map((theme) => (
            <p key={theme.id}>{theme.name}</p>
          ))}
        </fieldset>

        {errorMessage && <p className='error-message'>{errorMessage}</p>}
        <button type='submit' className='btn'>
          SUBMIT
        </button>
        <Link href={'/signin'}>Already have an account</Link>
      </form>
    </>
  );
};

export default SignupForm;
