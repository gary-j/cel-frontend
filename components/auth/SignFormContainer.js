import React from 'react';
import { useState, useContext } from 'react';
import SigninForm from './SigninForm';
import SignupForm from './SignupForm';
import styles from './SignFormContainer.module.scss';
import { BreakPointContext } from '../../context/breakPoints.context';

const SignFormContainer = (props) => {
  const [signForm, setSignForm] = useState('signin');
  // console.log('*** PROPS SigngormContainer: ', props);
  let newprops = {
    closeForm: props.closeForm,
    setSignForm: setSignForm,
  };
  //
  const { breakPoint } = useContext(BreakPointContext);

  return (
    <div className={styles.formContainer}>
      {signForm === 'signin' ? (
        <SigninForm props={newprops} cssBreakPoint={breakPoint} />
      ) : (
        <SignupForm props={newprops} cssBreakPoint={breakPoint} />
      )}
    </div>
  );
};

export default SignFormContainer;
