import React from 'react';
import { useState } from 'react';
import SigninForm from './SigninForm';
import SignupForm from './SignupForm';
import styles from './SignFormContainer.module.scss';

const SignFormContainer = (props) => {
  const [signForm, setSignForm] = useState('signin');
  console.log('*** PROPS SigngormContainer: ', props);
  let newprops = {
    closeForm: props.closeForm,
    setSignForm: setSignForm,
  };
  return (
    <div className={styles.formContainer}>
      {signForm === 'signin' ? (
        <SigninForm props={newprops} />
      ) : (
        <SignupForm props={newprops} />
      )}
    </div>
  );
};

export default SignFormContainer;
