import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../context/auth.context';
import { publicRequest } from '../../../../utils/axiosRequest';
import SignUpFormStep1 from './SignUpFormStep1';
import SignUpFormStep2 from './SignUpFormStep2';
import styles from '../SignupFormContainer.module.scss';
//
const SignupFormBody = ({ props }) => {
  const { storeToken, authenticateUser, isLoading, setIsLoading, user } =
    useContext(AuthContext);
  //
  const {
    cssBreakPoint,
    closeForm,
    setSignForm,
    displayNextFormPart,
    setDsiplayNextFormPart,
    successSignUp,
    setSuccessSignUp,
  } = props;

  // FieldState
  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [selectedThemes, setSelectedThemes] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [inputError, setInputError] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  //
  const [themesFromDB, setThemesFromDB] = useState([
    {
      _id: '628e45c54ba27fe24bdc726d',
      name: ' Grossesse pathologique & Suivi médical',
      slug: 'grossesse-pathologique-et-suivi-medical',
      svg_title: 'pathological-pregnancy',
      number: '7',
    },
  ]);
  // NewProps
  let newProps = {
    cssBreakPoint,
    closeForm,
    setSignForm,
    displayNextFormPart,
    setDsiplayNextFormPart,
    successSignUp,
  };
  let fieldStateProps = {
    lastname: lastname,
    setLastname: setLastname,
    firstname: firstname,
    setFirstname: setFirstname,
    username: username,
    setUsername: setUsername,
    email: email,
    setEmail: setEmail,
    password: password,
    setPassword: setPassword,
    dateOfBirth: dateOfBirth,
    setDateOfBirth: setDateOfBirth,
    errorMessage: errorMessage,
    setErrorMessage: setErrorMessage,
    inputError: inputError,
    setInputError: setInputError,
    passwordShown: passwordShown,
    setPasswordShown: setPasswordShown,
    selectedThemes: selectedThemes,
    setSelectedThemes: setSelectedThemes,
    themesFromDB: themesFromDB,
    setThemesFromDB: setThemesFromDB,
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
  return (
    <form
      id='signupForm'
      className={styles.form}
      onSubmit={(e) => handleLoginSubmit(e)}>
      <SignUpFormStep1
        props={newProps}
        fieldStateProps={fieldStateProps}></SignUpFormStep1>
      <SignUpFormStep2
        props={newProps}
        fieldStateProps={fieldStateProps}></SignUpFormStep2>
    </form>
  );
};

export default SignupFormBody;
