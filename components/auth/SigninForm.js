import React from 'react';
import { useContext, useState } from 'react';

import { publicRequest } from '../../utils/axiosRequest';
import { AuthContext } from '../../context/auth.context';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './SigninForm.module.scss';
//
const SigninForm = () => {
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  //   const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password };

    // Make an axios request to the API
    // If POST request is successful redirect to login page
    // If the request resolves with an error, set the error message in the state
    publicRequest
      .post(`/auth/signin`, requestBody)
      .then((response) => {
        // console.log('JWT RETURNED', response.data);
        console.log(response, 'reponse pour SigninForm.js');

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

  return (
    <>
      <div className={styles.formContainer}>
        <div className={styles.formContent}>
          <h3>Signin Form</h3>
          <form onSubmit={handleLoginSubmit}>
            <input
              placeholder='email'
              type='text'
              name='email'
              value={email}
              onChange={handleEmail}
            />
            <input
              placeholder='password'
              type='password'
              name='password'
              value={password}
              onChange={handlePassword}
            />
            {errorMessage && <p className='error-message'>{errorMessage}</p>}
            <button type='submit' className='btn'>
              SUBMIT
            </button>

            <Link href={'/signup'}>
              <a>Create a new account</a>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default SigninForm;
